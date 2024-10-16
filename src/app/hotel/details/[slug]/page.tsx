

import * as actions from '@/actions'
import path from 'path'
import React from 'react'
import HotelBreadCrumb from '@/components/hotel/hotel-breadcrumb'
import HotelItem from '@/components/hotel/hotel-item'
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params
    let metaSeo = await actions.getItemWithSlug(slug)
  
    return {
        title: metaSeo?.meta_title,
        description: metaSeo?.meta_description,
        openGraph: {
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            type: 'article',
            url: `${process.env.HOST_MYSEL}/hotel/details/${metaSeo?.slug}`,
            publishedTime: metaSeo?.createdAt,
            images: [
                {
                    type: `image/${metaSeo?.mainImage}}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${metaSeo?.mainImage}`,
                    alt: metaSeo?.meta_title

                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            creator: '@nextjs',
            images: [
                {
                    type: `image/${metaSeo?.mainImage}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${metaSeo?.mainImage}`,
                    alt: metaSeo?.meta_title
                }
            ]
        },
        alternates: {
            canonical: `${process.env.HOST_MYSEL}/hotel/details/${metaSeo?.slug}`,
        }

}
}


const HotelPage = async ({ params }: { params: { slug: string } }) => {

    const { slug } = params
    let item = await actions.getItemWithSlug(slug)

    return (
        <>
                <section className='pt-3 md:pt-32 dark:bg-zinc-900 bg-white pb-4'>
                <div className='container'>

                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <HotelBreadCrumb item={item} />
                    </div>
                    <HotelItem item={item}/> 
                </div>
                </section>
        </>
    )


}

export default HotelPage