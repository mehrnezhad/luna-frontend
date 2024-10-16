import type { TourPageItemType } from "@/type/tour"


export const getPageWithTourSlug = async ():Promise<TourPageItemType> => {

    const res = await fetch(`${process.env.HOST_ADDR}/page/getItem/tour`, {
        method: 'GET',
        next: { revalidate: 1}
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()

    return data?.data?.result

}

export const getAllCategoriesTour = async (): Promise<TourPageItemType[]> => {
    const res = await fetch(`${process.env.HOST_ADDR}/tour/getAllCategoriesTour`, {
       method: 'GET',
       cache:'no-cache'
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result

}
