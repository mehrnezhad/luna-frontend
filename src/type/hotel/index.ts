export type HotelPageItemType = {
    id: string,
    title: string,
    slug: string,
    content: string,
    images: string,
    image: string,
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt: string,
    createdAt: string,
    faqs: { question: string, answer: string }[], // Adjust the type for faqs
    videoUrl: string
}

export type HotelCategoryType = {
    id: string,
    title: string,
    slug: string,
    topContent: string,
    mainContent: string,
    images: string,
    thumbnail: string,
    meta_title: string,
    meta_description: string,
    canonical: string,
    faqs: { question: string, answer: string }[],
    updatedAt: string,
    createdAt: string,
    videoUrl: string,
    location: string,
    status: string,
    hotelItems: HotelItemType[]
}

export type HotelItemType = {
    id: string,
    title: string,
    titleEn: string,
    subTitle: string,
    slug: string,
    topContent: string,
    mainContent: string,
    facilities: { lable: string, value: string | string[] }[],
    new_facilities:{ categoryTitle: string, facilityTitles: string[] }[],
    mainFacility: { lable: string, value: string | string[] }[],
    faqs: { question: string, answer: string }[], // Adjust the type for faqs
    importantPlace: { lable: string, value: string }[],
    hotelNearBy: { lable: string, value: string }[],
    role: { lable: string, value: string }[],
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt: string,
    createdAt: string,
    videoUrl: string,
    region: string,
    regionEn: string,
    telephone: string
    address: string,
    rate: string
    NumberStar: string,
    mainImage: string,
    leftImage: string,
    thumbnail: string,
    otherImage: string,
    lat: string,
    lang: string,
    special: string,
    status: string,
    hotelCategories: HotelCategoryType[]
}