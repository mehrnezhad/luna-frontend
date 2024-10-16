export type TourPageItemType = {
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


export type TourCategoryType = {
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
    tourItems: TourItemType[]
}


export type TourItemType = {
    id: string,
    title: string,
    subtitle: string,
    serviceImportant: string,
    dateTour: string,
    slug: string,
    priceTour: string,
    lengthOfStay: string,
    topContent: string,
    mainContent: string,
    documents: string,
    importantDescrition: string,
    shortDescription: string,
    services: { lable: string, value: string }[],
    packages: {
        date: string, hotel:
        {
            hotelstar: string,
            hotelname: string,
            hotelservice: string,
            hoteltransfer: string,
            hotelpriceonebed: string,
            hotelpricetwobed: string,
            hotelpricechild: string,
            hotelpricechildnobed: string,
            lat: string,
            lng: string
        }[]
    }[],

    chartplan: {
        namePlane: string,
        firstlocation: string,
        timeflight: string,
        timetravel: string,
        timearrived: string,
        timestop: string,
        destination: string,
        flighttype: string,
        carryallowed: string,
        flagfirst: string,
        flaglast: string
    }[],
    tourplan: { label: string, content: string }[],
    faqs: { question: string, answer: string }[], // Adjust the type for faqs
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt: string,
    createdAt: string,
    mainImage: string,
    leftImage: string,
    thumbnail: string,
    status: string,
    special: string,
    tourCategories: TourCategoryType[]
}
