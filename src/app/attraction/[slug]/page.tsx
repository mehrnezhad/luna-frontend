import * as actions from '@/actions'
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";
import path from "path"
import AttractionRightMenu from '@/components/attraction/attraction-item-rightmenu';
import AttractionMainContent from '@/components/attraction/attraction-item-maincontent';
import AttractionBreadCrumb from "@/components/attraction/atrraction-item-breadcrumb"
import React from 'react';
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params
    let metaSeo = await actions.getItem(slug)
    const image = JSON.parse(metaSeo.images)
    const fileName = image[0].split('/').pop()
    const imageUrl = `main-${fileName}`
    const imagePath = image[0].split('/').slice(0, -1).join('/');
    return {
        title: metaSeo?.meta_title,
        description: metaSeo?.meta_description,
        openGraph: {
            title: metaSeo?.meta_title,
            description: metaSeo?.meta_description,
            type: 'article',
            url: `${process.env.HOST_MYSEL}/attraction/${metaSeo?.slug}`,
            publishedTime: metaSeo?.createdAt,
            images: [
                {
                    type: `image/${path.extname(imageUrl).slice(1)}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${imagePath}/${imageUrl}`,
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
                    type: `image/${path.extname(imageUrl).slice(1)}`,
                    width: 1200,
                    height: 600,
                    url: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${imagePath}/${imageUrl}`,
                    alt: metaSeo?.meta_title
                }
            ]
        },
        alternates: {
            canonical: `${process.env.HOST_MYSEL}/attraction/${metaSeo?.slug}`,
        }

    }
}


const AttractionPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    let item = await actions.getItem(slug)
    item = {
        ...item,
        faqs: typeof item.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs,
        contents: typeof item.contents === 'string' ? JSON.parse(item.contents) : item.contents,
    };
    const breadCrumbs = await actions.getBreadCrumbs(item?.categorySlug)
    const image = JSON.parse(item.images)
    const fileName = image[0].split('/').pop()
    const imageUrl = `main-${fileName}`
    const imagePath = image[0].split('/').slice(0, -1).join('/');

    const jsonLd: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: item.faqs.map(faq => ({
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
            name: "Luca Restagno",
            url: "https://lucarestagno.com",
        },
        image: `${process.env.NEXT_PUBLIC_HOST_ADDR}/${imagePath}/${imageUrl}`,
        datePublished: item.createdAt,
        dateModified: item.updatedAt,
    }
    return (
        <>
            {item.faqs?.[0]?.question != undefined ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
                : ''
            }
            <section className='pt-3 md:pt-32 dark:bg-zinc-900 bg-white'>
                <div className='container'>
                    
                        <div className="flex gap-x-5">
                            <aside className="hidden md:w-1/4 md:flex-1 text-sm md:flex md:flex-col md:gap-y-4 w-[280px] p-3 sticky top-0 h-screen overflow-y-auto border border-slate-200 shadow-sm rounded-t dark:bg-zinc-700">

                                <AttractionRightMenu item={item} />
                            </aside>
                            <main className="w-3/4 flex flex-1 flex-col p-4 border border-slate-200 shadow-sm rounded-t dark:bg-zinc-700 dark:text-white">
                                <AttractionBreadCrumb item={item} breadCrumbs={breadCrumbs} />
                                <span className="block h-px bg-orange-300"></span>
                                <AttractionMainContent item={item} />

                            </main>

                        </div>
                
                </div>
            </section>
        </>
    )
}

export default AttractionPage