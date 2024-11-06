import * as actions from '@/actions'
import VisaBreadCrumb from '@/components/visa/visa-breadcrumb'
import VisaItem from '@/components/visa/visa-item'
import VisaSlider from '@/components/visa/visa-slider'
import Link from 'next/link'
import path from 'path'
import { FAQPage, WithContext, Article } from "schema-dts";
import Script from 'next/script'
import React from 'react'
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params
    const visa = await actions.getCategory(slug)
    const image = JSON.parse(visa.images)
    const fileName = image[0].split('/').pop()
    const imageUrl = `${fileName}`
    return {
        title: visa?.meta_title,
        description: visa?.meta_description,
        openGraph: {
            title: visa?.meta_title,
            description: visa?.meta_description,
            type: 'article',
            url: `${process.env.HOST_MYSEL}/visa/${visa?.slug}`,
            publishedTime: visa?.createdAt,
            images: [
                {
                    type: `image/${path.extname(imageUrl).slice(1)}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`,
                    alt: visa?.meta_title

                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: visa?.meta_title,
            description: visa?.meta_description,
            creator: '@lunagasht',
            images: [
                {
                    type: `image/${path.extname(imageUrl).slice(1)}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`,
                    alt: visa?.meta_title
                }
            ]
        },
        alternates: {
            canonical: `${process.env.HOST_MYSEL}/visa/${visa?.slug}`,
        }

    }
}



const VisaType = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const visa = await actions.getCategory(slug)
    const faqs = typeof visa.faqs === 'string' ? JSON.parse(visa.faqs) : visa.faqs

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
                "name": "ویزا",
                "item": `${process.env.HOST_ADDR}/visa`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${visa.title}`,
                "item": `${process.env.HOST_ADDR}/visa/${visa.slug}`
            }
        ]
    };


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
            headline: visa.title,
            description: visa.meta_description,
            author: {
                "@type": "Person",
                name: "lunagasht editor",
                url: "https://lunagasht.com",
            },
            image: `${process.env.HOST_ADDR}/${visa.thumbnail}`,
            datePublished: visa.createdAt,
            dateModified: visa.updatedAt,
        } : null;


    const visaVideoSchema = visa.videoUrl ?
        {
            "@context": "http://schema.org/",
            "@type": "VideoObject",
            "name": visa?.meta_title,
            "description": visa?.meta_description,
            "thumbnailUrl": `${process.env.HOST_ADDR}/${visa?.thumbnail}`,
            "uploadDate": visa.createdAt,
            "contentUrl": `${process.env.HOST_MYSEL}/visa/${visa?.slug}`,
            "embedUrl": visa?.videoUrl
        } :
        null


    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: visa.title,
        description: visa.meta_description,
        image: `${process.env.HOST_ADDR}/${visa.thumbnail}`,
        author: {
            "@type": "Organization",
            name: "لونا گشت"
        },
        publisher: {
            "@type": "Organization",
            name: "لونا گشت",
            logo: {
                "@type": "ImageObject",
                url: `${process.env.HOST_MYSEL}/images/logo.webp`,         
                inLanguage:'fa-IR',
                 caption:'لونا گشت'
            }
        },
        datePublished: visa.createdAt,
        dateModified: visa.updatedAt,
        mainEntityOfPage: `${process.env.HOST_ADDR}/visa/${visa.slug}`
    };


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

            {visaVideoSchema ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(visaVideoSchema),
                    }}
                />
                : ''
            }
            <Script
                type="application/ld+json"
                id="article-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <section className='dark:bg-zinc-900 bg-gray-100'>

                <div className="relative w-full">
                    <VisaSlider images={visa?.images} />
                </div>

                <div className='container'>
                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <VisaBreadCrumb title={visa.title} />
                    </div>
                    <VisaItem visa={visa} />
                </div>


            </section>

        </>
    )
}
export default VisaType