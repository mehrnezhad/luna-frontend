'use server'
import type { TourCategoryType, TourItemType} from "@/type/tour"

export const getAllItemsTourHomePage = async(): Promise<TourItemType[]> => {
    const res = await fetch(`${process.env.HOST_ADDR}/tour/getAllItemsTourHomePage`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}

export const getAllCategoriesTourHomePage = async(): Promise<TourCategoryType[]> => {
    const res = await fetch(`${process.env.HOST_ADDR}/tour/getAllCategoriesTourHomePage`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}
