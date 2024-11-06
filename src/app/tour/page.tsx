import * as actions from '@/actions'
import TourPageContainer from "@/components/tour/tour-page-container"
import Script from "next/script";
export async function generateMetadata() {
    
    const page = await actions.getPageWithTourSlug()

    const image = typeof page?.images === 'string' ? JSON.parse(page?.images) : page?.images


    return {
      title: page?.meta_title,
      description: page?.meta_description,
      openGraph: {
        title: page?.meta_title,
        description: page?.meta_description,
        type: 'website',
        publishedTime: page?.createdAt,
        images: [
          {
            type: 'image/webp',
            width: 1200,
            height: 630,
            url: `${process.env.HOST_ADDR}/${image[0]}`,
            alt: page?.meta_title
  
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: page?.meta_title,
        description: page?.meta_description,
        creator: '@lunagasht',
        images: [
          {
            type: 'image/webp',
            width: 1200,
            height: 630,
           url: `${process.env.HOST_ADDR}/${image[0]}`,
            alt: page?.meta_title
          }
        ]
      },
      alternates: {
        canonical: `${process.env.HOST_MYSEL}/tour`,
      }
  
    }
  
}
  

const TourPage = async () => {
    const tourPage = await actions.getPageWithTourSlug()
    const categories = await actions.getAllCategoriesTour()
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
        "name": "تور",
        "item": `${process.env.HOST_MYSEL}/tour`
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
          <TourPageContainer tourPage={tourPage} categories={categories}/>
        </>
    )
}

export default TourPage