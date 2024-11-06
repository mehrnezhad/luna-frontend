import VisaContainer from "@/components/visa/visa-container"
import * as actions from '@/actions'
import React from "react"
import Script from "next/script";
export async function generateMetadata() {
  const visa = await actions.getParentcategory()
  const image = typeof visa?.images === 'string' ? JSON.parse(visa.images) : visa.images

  return {
    title: visa?.meta_title,
    description: visa?.meta_description,
    openGraph: {
      title: visa?.meta_title,
      description: visa?.meta_description,
      type: 'website',
      publishedTime: visa?.createdAt,
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
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
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${image[0]}`,
          alt: visa?.meta_title
        }
      ]
    },
    alternates: {
      canonical: `${process.env.HOST_MYSEL}/visa`,
    }

  }

}


const visaPage = async () => {
  const visa = await actions.getParentcategory()

  // Define breadcrumb JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "صفحه اصلی",
        "item": `${process.env.HOST_MYSEL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "ویزا",
        "item": `${process.env.HOST_MYSEL}/visa`
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
      <VisaContainer visa={visa} />
    </>
  )
}
export default visaPage