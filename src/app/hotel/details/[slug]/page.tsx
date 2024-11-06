import * as actions from '@/actions'
import path from 'path'
import React from 'react'
import HotelBreadCrumb from '@/components/hotel/hotel-breadcrumb'
import HotelItem from '@/components/hotel/hotel-item'
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";
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
                    url: `${process.env.HOST_ADDR}/${metaSeo?.mainImage}`,
                    alt: metaSeo?.meta_title

                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            creator: '@lunagasht',
            images: [
                {
                    type: `image/${metaSeo?.mainImage}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.HOST_ADDR}/${metaSeo?.mainImage}`,
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

    const faqs = item?.faqs ? (typeof item.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs) : [];

    const mainFacility = item?.mainFacility ? (typeof item.mainFacility === 'string' ? JSON.parse(item.mainFacility) : item.mainFacility) : [];



    const jsonLd: WithContext<FAQPage> | null = faqs?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq: { question: string, answer: string }) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                }
            })),
            headline: item.title,
            description: item.meta_description,
            author: {
                "@type": "Person",
                name: "lunagasht editor",
                url: "https://lunagasht.com",
            },
            image: `${process.env.HOST_ADDR}/${item.mainImage}`,
            datePublished: item.createdAt,
            dateModified: item.updatedAt,
        } : null;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "صفحه اصلی",
                "item": `${process.env.HOST_ADDR}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "هتل",
                "item": `${process.env.HOST_ADDR}/hotel`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${item.hotelCategories[0]?.title}`,
                "item": `${process.env.HOST_ADDR}/hotel/${item.hotelCategories[0]?.slug}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": `${item.title}`,
                "item": `${process.env.HOST_ADDR}/hotel/details/${item.slug}`
            }
        ]
    };

    // JSON-LD structured data
    const hotelSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: item.title,
        description: item.meta_description,
        image: item.mainImage,
        address: {
            "@type": "PostalAddress",
            streetAddress: item.address,
            addressLocality: item.regionEn,
            addressRegion: item.hotelCategories[0]?.title,
            addressCountry: item.country,
        },
        telephone: item.telephone,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: item?.ratingValue ?? '4.7',
            ratingCount: item?.ratingCount ?? '120',
            reviewCount: item?.reviewCount ?? '98'
        },
        amenities: mainFacility.map((amenity: string) => ({
            "@type": "PropertyValue",
            name: amenity,
            value: "true"
        })),
        url: `${process.env.HOST_ADDR}/hotel/details/${item.slug}`,
        checkinTime: '14:00',
        checkoutTime: '12:00'
    };

    const hotelVideoSchema = item.videoUrl ?
        {
            "@context": "http://schema.org/",
            "@type": "VideoObject",
            "name": item?.meta_title,
            "description": item?.meta_description,
            "thumbnailUrl": `${process.env.HOST_ADDR}/${item?.mainImage}`,
            "uploadDate": item.createdAt,
            "contentUrl": `${process.env.HOST_MYSEL}/hotel/details/${item?.slug}`,
            "embedUrl": item?.videoUrl
        } :
        null

    return (
        <>
            <Script
                type="application/ld+json"
                id="breadcrumb-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {jsonLd ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
                : ''
            }


            <Script
                type="application/ld+json"
                id="breadcrumb-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
            />

            {hotelVideoSchema ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(hotelVideoSchema),
                    }}
                />
                : ''
            }

            <section className='pt-3 md:pt-32 dark:bg-zinc-900 bg-gray-100 pb-4'>
                <div className='container'>
                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <HotelBreadCrumb item={item} />
                    </div>
                    <HotelItem item={item} />
                   
                </div>
            </section>
        </>
    )


}

export default HotelPage