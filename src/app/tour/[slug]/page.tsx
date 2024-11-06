import * as actions from '@/actions'
import TourContainer from "@/components/tour/tour-container"
import React from 'react'
import Script from "next/script"
import { FAQPage, WithContext , Article , WebSite } from "schema-dts"
export async function generateMetadata({ params }: { params: { slug: string } }) {

  const { slug } = params
  const tourItems = await actions.getAllItemsTourWitCatSlug(slug)
  const image = typeof tourItems?.images === 'string' ? JSON.parse(tourItems?.images) : tourItems?.images
  return {
    title: tourItems?.meta_title,
    description: tourItems?.meta_description,
    openGraph: {
      title: tourItems?.meta_title,
      description: tourItems?.meta_description,
      type: 'website',
      publishedTime: tourItems?.createdAt,
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
          alt: tourItems?.meta_title

        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: tourItems?.meta_title,
      description: tourItems?.meta_description,
      creator: '@lunagasht',
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
          alt: tourItems?.meta_title
        }
      ]
    },
    alternates: {
      canonical: `${process.env.HOST_MYSEL}/tour/${tourItems?.slug}`,
    }

  }

}


const TourPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const items = await actions.getAllItemsTourWitCatSlug(slug)
  const faqs = items?.faqs ? (typeof items.faqs === 'string' ? JSON.parse(items.faqs) : items.faqs) : [];

  // Define breadcrumb JSON-LD schema
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
        "name": "تور",
        "item": `${process.env.HOST_ADDR}/tour`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": items.title,
        "item": `${process.env.HOST_ADDR}/tour/${items.slug}`
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
      headline: items.title,
      description: items.meta_description,
      author: {
        "@type": "Person",
        name: "lunagasht editor",
        url: "https://lunagasht.com",
      },
      image: `${process.env.HOST_ADDR}/${items.thumbnail}}`,
      datePublished: items.createdAt,
      dateModified: items.updatedAt,
    } : null;


    const tourVideoSchema = items.videoUrl ?
        {
            "@context": "http://schema.org/",
            "@type": "VideoObject",
            "name": items?.meta_title,
            "description": items?.meta_description,
            "thumbnailUrl": `${process.env.HOST_ADDR}/${items?.thumbnail}`,
            "uploadDate": items.createdAt,
            "contentUrl": `${process.env.HOST_MYSEL}/tour/${items?.slug}`,
            "embedUrl": items?.videoUrl
        } :
        null


        const articleSchema: WithContext<WebSite> = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          headline: items.title,
          description: items.meta_description,
          image: `${process.env.HOST_ADDR}/${items.thumbnail}`,
          author: {
              "@type": "Organization",
              name: "لوناگشت"
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
          datePublished: items.createdAt,
          dateModified: items.updatedAt,
          mainEntityOfPage: `${process.env.HOST_ADDR}/tour/${items.slug}`
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
          {tourVideoSchema ?
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(tourVideoSchema),
                    }}
                />
                : ''
            }

           <Script
                type="application/ld+json"
                id="article-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

      <TourContainer items={items} slug={slug} />
    </>
  )
}

export default TourPage