export type VisaCategoryType = {
    id: string,
    title: string,
    slug: string,
    top_content:string,
    main_content:string,
    images: string,
    logo: string,
    thumbnail: string,
    meta_title: string,
    meta_description: string,
    canonical: string,
    updatedAt: string,
    createdAt: string,
    videoUrl: string,
    main_attributes: string,
    validity: string,
    process_time: string,
    passport_requirement: { icon: string, title: string, description: string }[],
    price_box: { label : string , type : {label : string , value: string}[]}
    categorySlug: string,
    startedPrice: string,
    notifymessage: string,
    visa_type: string,
    visa_human :{ title: string, subtitle: string }[], 
    faqs: { question: string, answer: string }[], // Adjust the type for faqs
    status: string,
    parent_id: number
    children : VisaCategoryType[]

}
