import type { VisaCategoryType } from "@/type/visa/visa_category"
export const getParentcategory = async () => {
    const res = await fetch(`${process.env.HOST_ADDR}/visa/getParentcategory`, {
        method: 'GET',
        next: { revalidate: 1}
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result
}

export const getCategory = async (slug : string):Promise<VisaCategoryType> => {
    const res = await fetch(`${process.env.HOST_ADDR}/visa/getCategory/${slug}`, {
        method: 'GET',
        next: { revalidate: 1}
    })
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data?.data?.result
}


