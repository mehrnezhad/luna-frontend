export type AttractionCategoriesType = {
    id: string,
    title: string,
    slug: string,
    content : string,
    image: string,
    parent_id : number,
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt : Date,
    createdAt : Date,
    childrens: AttractionCategoriesType[]
}

export type AttractionCategoriesTypeForBreadCrumbs = {
    id: string,
    title: string,
    slug: string,
    path:string,
    parent: AttractionCategoriesType[]

}



export type AttractionItemsType = {
    id: string,
    title: string,
    slug: string,
    contents: { sidebar: string, content: string }[],
    images: string,
    image: string,
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt: string,
    createdAt: string,
    categorySlug: string,
    faqs: { question: string, answer: string }[], // Adjust the type for faqs
    attractionItems : AttractionItemsType[]
    
    videoUrl: string
}

