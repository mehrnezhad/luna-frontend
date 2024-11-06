'use server'
import type { HotelPageItemType , HotelCategoryType , HotelItemType} from "@/type/hotel"

export const getPageWithHotelSlug = async ():Promise<HotelPageItemType> => {

    const res = await fetch(`${process.env.HOST_ADDR}/page/getItem/hotel`, {
        method: 'GET',
        next: { revalidate: 1}
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()

    return data?.data?.result

}


export const getAllCategoriesHotel = async (): Promise<HotelCategoryType[]> => {
    const res = await fetch(`${process.env.HOST_ADDR}/hotel/getAllCategoriesHotel`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}



export const getAllItemsHotelWitCatSlug = async (slug: string): Promise<HotelCategoryType> => {
    const res = await fetch(`${process.env.HOST_ADDR}/hotel/getAllItemsHotelWitCatSlug/${slug}`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}



export const getItemWithSlug = async (slug: string): Promise<HotelItemType> => {
    const res = await fetch(`${process.env.HOST_ADDR}/hotel/getItemWithSlug/${slug}`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}

export const updateStarHotel = async (newRating:number , id: string): Promise<Number> => {

    const res = await fetch(`${process.env.HOST_ADDR}/hotel/updateStarHotel/${id}`, {
       method: 'PATCH',
       cache:'no-cache',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({newRating})
    })

    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()

    return data?.statusCode
}

