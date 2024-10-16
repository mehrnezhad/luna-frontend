import VisaContainer from "@/components/visa/visa-container"
import * as actions from '@/actions'
import React from "react"
export async function generateMetadata() {
    const visa = await actions.getParentcategory()
    const image = typeof visa?.images === 'string' ? JSON.parse(visa.images) : visa.images

    return {
      title: visa?.meta_title,
      description: visa?.meta_description,
      openGraph: {
        title: visa?.meta_title,
        description: visa?.meta_description,
        type: 'article',
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
        creator: '@nextjs',
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
  

const visaPage = async() => {
    const visa = await actions.getParentcategory()
    return (
        <>
         <VisaContainer visa={visa}/>
        </>
    )
}
export default visaPage