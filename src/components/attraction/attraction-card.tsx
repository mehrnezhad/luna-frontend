
import type { AttractionItemsType } from "@/type/attraction/attraction_categories"
import Link from "next/link"
import {Image} from "@nextui-org/image";

const AttractionCard = ({ title, images, slug }: AttractionItemsType) => {
  const image =JSON.parse(images)
  const fileName = image[0].split('/').pop()
  const imageUrl= `thumb-${fileName}`
  const imagePath = image[0].split('/').slice(0, -1).join('/');

  return (

    <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden mb-4 ">

      <div className="p-2">
        <Link href={`/attraction/${slug}`}>

         <Image isZoomed src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${imagePath}/${imageUrl}`} width={280} className="mx-auto md:w-auto h-[150px] md:h-[250px]" alt={title} loading="lazy" />  

        </Link>
      </div>

      <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium  p-2 md:p-5 text-center">
      
         <Link className="line-clamp-1 hover:text-overlay"  href={`/attraction/${slug}`}>{title}</Link> 
        
      </h3>

    </div>

  )
}
export default AttractionCard