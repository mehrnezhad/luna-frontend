import * as actions from '@/actions'
import { Suspense } from 'react';
import AttractionShowLoading from '@/components/attraction/attraction-loading'
import type { AttractionItemsType } from "@/type/attraction/attraction_categories";
import AttractionList from '@/components/attraction/attraction-list'
import Link from 'next/link';
import { HiChevronLeft } from "react-icons/hi";
import React from 'react';
import Script from 'next/script'
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const newSlug = slug.toString().replace(/,/, '\/')
  let lastElement = slug.slice(-1);
  const metaSeo: AttractionItemsType = await actions.getItemsAttractions(lastElement, 0, 12)

  return {
    title: metaSeo?.meta_title,
    description: metaSeo?.meta_description,
    openGraph: {
      title: metaSeo?.meta_title,
      description: metaSeo?.meta_description,
      type: 'website',
      publishedTime: metaSeo?.createdAt,
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${metaSeo.image}`,
          alt: metaSeo?.meta_title

        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: metaSeo?.meta_title,
      description: metaSeo?.meta_description,
      creator: '@lunagasht',
      images: [
        {
          type: 'image/webp',
          width: 1200,
          height: 630,
          url: `${process.env.HOST_ADDR}/${metaSeo.image}`,
          alt: metaSeo?.meta_title
        }
      ]
    },
    alternates: {
      canonical: `${process.env.HOST_MYSEL}/attractions/${newSlug}`,
    }

  }


}


const generateBreadcrumbSchema = (breadCrumbs: any) => {
  const itemListElement = breadCrumbs.map((category: any, index: number) => ({
    "@type": "ListItem",
    position: index + 1,
    name: category.title,
    item: `${process.env.HOST_MYSEL}/attractions/${category.path}`
  }));

  // Add the homepage and main attractions page as the first breadcrumb items
  itemListElement.unshift(
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
    }
  );

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };
};



const AttractionsPage = async ({ params }: { params: { slug: string } }) => {

  const { slug } = params
  let lastElement = slug.slice(-1);

  const breadCrumbs = await actions.getBreadCrumbs(lastElement)
  const items: AttractionItemsType = await actions.getItemsAttractions(lastElement, 0, 12)
  const breadcrumbSchema = generateBreadcrumbSchema(breadCrumbs);

  return (
    <>
               <Script
                type="application/ld+json"
                id="breadcrumb-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
      {items?.attractionItems.length > 0 ?
        <section className='pt-3 md:pt-32 dark:bg-zinc-900 bg-gray-100 min-h-screen'>
          <div className='container'>

            <div className="flex flex-wrap justify-start text-xs pb-2">
              <div className="flex flex-wrap justify-start text-sm pb-2 gap-x-2">
               <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
               <HiChevronLeft />
               <Link href='/attractions'>جاذبه های گردشگری</Link>
          
                {breadCrumbs.map(category => (

                  <React.Fragment key={category.id}>
                    <HiChevronLeft  />
                    <Link key={category.id} href={`${process.env.HOST_MYSEL}/attractions/${category?.path}`}>{category?.title}</Link>
                  </React.Fragment>

                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-start text-2xl pb-2 font-MorabbaBold">
              {<h1>{items?.title}</h1>}
            </div>

            <Suspense fallback={<AttractionShowLoading />}>
              <AttractionList items={items?.attractionItems} slugProps={slug} />
            </Suspense>

          </div>

        </section>
        : ''}

    </>
  )
}


export default AttractionsPage