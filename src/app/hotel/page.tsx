import * as actions from '@/actions'
import HotelPageContainer from "@/components/hotel/hotel-page-container"

export async function generateMetadata() {
    
    const page = await actions.getPageWithHotelSlug()

    const image = typeof page?.images === 'string' ? JSON.parse(page?.images) : page?.images


    return {
      title: page?.meta_title,
      description: page?.meta_description,
      openGraph: {
        title: page?.meta_title,
        description: page?.meta_description,
        type: 'article',
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
        creator: '@nextjs',
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

    return (
        <>
          <HotelPageContainer hotelPage={hotelPage} categories={categories}/>
        </>
    )
}

export default HotelPage