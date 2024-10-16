import * as actions from '@/actions'
import HotelContainer from "@/components/hotel/hotel-container"
import React from 'react'
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
      type: 'article',
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
      creator: '@nextjs',
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
      canonical: `${process.env.HOST_MYSEL}/hotel`,
    }

  }

}


const HotelPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const items = await actions.getAllItemsHotelWitCatSlug(slug)

  return (
    <>
      <HotelContainer items={items} slug={slug} />
    </>
  )
}

export default HotelPage