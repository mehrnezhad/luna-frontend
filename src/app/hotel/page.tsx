import * as actions from '@/actions'
import HotelPageContainer from "@/components/hotel/hotel-page-container"
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";
export async function generateMetadata() {

  const page = await actions.getPageWithHotelSlug()
  const image = page?.images ? (typeof page.images === 'string' ? JSON.parse(page.images) : page.images) : [];
  const faqs = page?.faqs ? (typeof page.faqs === 'string' ? JSON.parse(page.faqs) : page.faqs) : [];
  return {
    title: page?.meta_title,
    description: page?.meta_description,
    openGraph: {
      title: page?.meta_title,
      description: page?.meta_description,
      type:'website',
      url: `${process.env.HOST_MYSEL}/hotel`,
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
      canonical: `${process.env.HOST_MYSEL}/hotel`,
    }
  }
}

const HotelPage = async () => {
  const hotelPage = await actions.getPageWithHotelSlug()
  const categories = await actions.getAllCategoriesHotel()

  const image = hotelPage?.images ? (typeof hotelPage.images === 'string' ? JSON.parse(hotelPage.images) : hotelPage.images) : [];
  const faqs = hotelPage?.faqs ? (typeof hotelPage.faqs === 'string' ? JSON.parse(hotelPage.faqs) : hotelPage.faqs) : [];

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
      headline: hotelPage.title,
      description: hotelPage.meta_description,
      author: {
        "@type": "Person",
        name: "lunagasht editor",
        url: "https://lunagasht.com",
      },
      image: `${process.env.HOST_ADDR}/${image[0]}`,
      datePublished: hotelPage.createdAt,
      dateModified: hotelPage.updatedAt,
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
        "item": `${process.env.HOST_MYSEL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "هتل",
        "item": `${process.env.HOST_MYSEL}/hotel`
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
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HotelPageContainer hotelPage={hotelPage} categories={categories} />
    </>
  )
}

export default HotelPage