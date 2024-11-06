import ProductHomePage from "@/components/layout/productHomePage";
import Slider from "../components/layout/slider"
import TourHomePage from "@/components/layout/specialTour";
import CategoryTourHomePage from "@/components/layout/CategoryTourHomePage";
import React from "react";
import * as actions from '@/actions'
import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {

  title: "آژانس مسافرتی لونا گشت - رزرو تور های مسافرتی داخلی و خارجی",
  description: 'آژانس مسافرتی شرکت خدماتی و گردشگری لونا گشت آریا ارائه دهنده تورهای خارجی، داخلی، تور های هوایی، تور های لحظه آخری با بهترین قیمت',
  openGraph: {
    title: "آژانس مسافرتی لونا گشت - رزرو تور های مسافرتی داخلی و خارجی",
    description: 'آژانس مسافرتی شرکت خدماتی و گردشگری لونا گشت آریا ارائه دهنده تورهای خارجی، داخلی، تور های هوایی، تور های لحظه آخری با بهترین قیمت',
    type: 'website',
    siteName: 'لونا گشت',
    locale: 'fa_IR',
    images: [
      {
        type: 'image/webp',
        width: 200,
        height: 200,
        url: `/images/logo.webp`,
        alt: "لوگو لونا پست"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "آژانس مسافرتی لونا گشت - رزرو تور های مسافرتی داخلی و خارجی",
    description: 'آژانس مسافرتی شرکت خدماتی و گردشگری لونا گشت آریا ارائه دهنده تورهای خارجی، داخلی، تور های هوایی، تور های لحظه آخری با بهترین قیمت',
    creator: '@lunagasht',
    images: [
      {
        type: 'image/webp',
        width: 200,
        height: 200,
        url: '/images/logo.webp',
        alt: "لوگو لونا گشت"
      }
    ]
  },
  alternates: {
    canonical: `${process.env.HOST_MYSEL}`,
  }

}

export default async function Home() {

  const tours = await actions.getAllItemsTourHomePage()
  const categoriesTour = await actions.getAllCategoriesTourHomePage()


  return (
    <>
      <Script
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Lunagasht Co.",
            "alternateName": "لونا گشت",
            "url": "https://lunagasht.com",
            "logo": "https://lunagasht.com/logo.webp",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+989127222339",
                "contactType": "customer service",
                "areaServed": "IR",
                "availableLanguage": "Persian",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+989124842679",
                "contactType": "sales",
                "areaServed": "IR",
                "availableLanguage": "Persian",
              },
            ],
            "sameAs": [
              "https://twitter.com/lunagasht",
              "https://www.instagram.com/lunagasht/",
              "https://www.linkedin.com/company/lunagasht-com/",
            ],
          }),
        }}
      /> 
      <Slider />
      {/* <ProductHomePage /> */}
      <TourHomePage tours={tours} />
      <CategoryTourHomePage categoriesTour={categoriesTour} />
    </>
  );
}
