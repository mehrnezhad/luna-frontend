'use server'
import type { AttractionCategoriesType , AttractionItemsType, AttractionCategoriesTypeForBreadCrumbs } from "@/type/attraction/attraction_categories";

export const getCategoriesAttractions = async ():Promise<AttractionCategoriesType[]> => {
    const res = await fetch(`${process.env.HOST_ADDR}/attractions/getCategories`, {
        method: 'GET',
        next: { revalidate: 3600 * 24 }
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.categories
}

export const getItemsAttractions = async (slug : string , skip : number , take : number):Promise<AttractionItemsType> => {
    
    const res = await fetch(`${process.env.HOST_ADDR}/attractions/getItems/${slug}?take=${take}&skip=${skip}`, {
        method: 'GET',
        next: { revalidate: 1}
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result
}

export const getBreadCrumbs = async(slug : string):Promise<AttractionCategoriesTypeForBreadCrumbs[]> =>{

    const res = await fetch(`${process.env.HOST_ADDR}/attractions/getBreadCrumbs/${slug}`, {
        method: 'GET',
        next: { revalidate:1 }
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.categories
}

export const getItem = async (slug : string):Promise<AttractionItemsType> => {
    const res = await fetch(`${process.env.HOST_ADDR}/attractions/getItem/${slug}`, {
        method: 'GET',
        next: { revalidate: 3600 * 24 }
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.item
}

