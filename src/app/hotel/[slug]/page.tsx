import * as actions from '@/actions'
import HotelContainer from "@/components/hotel/hotel-container"
import React from 'react'
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";
export async function generateMetadata({ params }: { params: { slug: string } }) {

  const { slug } = params
  const hotlItems = await actions.getAllItemsHotelWitCatSlug(slug)
  const image = typeof hotlItems?.images === 'string' ? JSON.parse(hotlItems?.images) : hotlItems?.images
  return {
    title: hotlItems?.meta_title,
    description: hotlItems?.meta_description,
    openGraph: {
      title: hotlItems?.meta_title,
      description: hotlItems?.meta_description,
      url: `${process.env.HOST_MYSEL}/${slug}`,
      type: 'website',
      publishedTime: hotlItems?.createdAt,
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
          alt: hotlItems?.meta_title

        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: hotlItems?.meta_title,
      description: hotlItems?.meta_description,
      creator: '@lunagasht',
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
          alt: hotlItems?.meta_title
        }
      ]
    },
    alternates: {
      canonical: `${process.env.HOST_MYSEL}/hotel/${slug}`,
    }

  }

}


const HotelPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const items = await actions.getAllItemsHotelWitCatSlug(slug)
  const faqs = items?.faqs ? (typeof items.faqs === 'string' ? JSON.parse(items.faqs) : items.faqs) : [];
  const image = items?.images ? (typeof items.images === 'string' ? JSON.parse(items.images) : items.images) : [];

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
      image: `${process.env.HOST_ADDR}/${image[0]}`,
      datePublished: items.createdAt,
      dateModified: items.updatedAt,
    } : null;


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
        "name": "هتل",
        "item": `${process.env.HOST_ADDR}/hotel`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": items.title,
        "item": `${process.env.HOST_ADDR}/hotel/${items.slug}`
      }
    ]
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
      <HotelContainer items={items} slug={slug} />
    </>
  )
}

export default HotelPage