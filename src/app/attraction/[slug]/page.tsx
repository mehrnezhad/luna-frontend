import * as actions from '@/actions'
import Script from "next/script";
import { FAQPage, WithContext, Article } from "schema-dts";
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
    const jsonLd: WithContext<FAQPage> | null = item.faqs?.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: item.faqs.map((faq: { question: string, answer: string }) => ({
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
            image: `${process.env.HOST_ADDR}/${imagePath}/${imageUrl}`,
            datePublished: item.createdAt,
            dateModified: item.updatedAt,
        } : null;

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: item.title,
        description: item.meta_description,
        image: `${process.env.HOST_ADDR}/${imagePath}/${imageUrl}`,
        author: {
            "@type": "Organization",
            name: "LunaGasht"
        },
        publisher: {
            "@type": "Organization",
            name: "LunaGasht",
            logo: {
                "@type": "ImageObject",
                url: `${process.env.HOST_MYSEL}/images/logo.webp`
            }
        },
        datePublished: item.createdAt,
        dateModified: item.updatedAt

    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "صفحه اصلی",
                item: `${process.env.HOST_MYSEL}`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "جاذبه های گردشگری",
                item: `${process.env.HOST_MYSEL}/attractions`
            },
            ...breadCrumbs.map((category, index) => ({
                "@type": "ListItem",
                position: index + 3,
                name: category.title,
                item: `${process.env.HOST_MYSEL}/attractions/${category.path}`
            })),
            {
                "@type": "ListItem",
                position: breadCrumbs.length + 3,
                name: item.title,
                item: `${process.env.HOST_MYSEL}/attraction/${item.slug}`
            }
        ]
    };

    return (
        <>
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
                id="article-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className='pt-3 md:pt-32 dark:bg-zinc-900 bg-gray-100'>
                <div className='container'>

                    <div className="flex gap-x-5">
                        <aside className="hidden border-t-[2px] border-orange-300 rounded-2xl md:w-1/4 md:flex-1 text-sm md:flex md:flex-col md:gap-y-4 w-[280px] p-3 sticky top-0 h-screen overflow-y-auto shadow-sm rounded-t dark:bg-zinc-700 bg-white">
                            <AttractionRightMenu item={item} />
                        </aside>
                        <main className="w-3/4 flex flex-1 flex-col p-4 border-t-[2px] border-orange-300 rounded-2xl shadow-sm rounded-t dark:bg-zinc-700 dark:text-white bg-white">
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