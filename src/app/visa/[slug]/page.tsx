import * as actions from '@/actions'
import VisaBreadCrumb from '@/components/visa/visa-breadcrumb'
import VisaItem from '@/components/visa/visa-item'
import VisaSlider from '@/components/visa/visa-slider'
import Link from 'next/link'
import path from 'path'
import { FAQPage, WithContext } from "schema-dts";
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
            creator: '@nextjs',
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
    visa.faqs = typeof visa.faqs === 'string' ? JSON.parse(visa.faqs) : visa.faqs

    const jsonLd: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: visa.faqs.map(faq => ({
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
            name: "Luca Restagno",
            url: "https://lucarestagno.com",
        },
        image: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${visa.images[0]}`,
        datePublished: visa.createdAt,
        dateModified: visa.updatedAt,
    }


    return (
        <>
           {visa.faqs?.[0]?.question != undefined ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
                : ''
            }
            <section className='dark:bg-zinc-900 bg-gray-200'>

                <div className="relative w-full">
                    <VisaSlider images={visa?.images} />
                </div>

                <div className='container'>
                    <div className="flex flex-wrap justify-start text-xs pb-2 mt-4">
                        <VisaBreadCrumb title={visa.title} />
                    </div>
                    <VisaItem visa={visa}/>
                </div>

                
            </section>

        </>
    )
}
export default VisaType