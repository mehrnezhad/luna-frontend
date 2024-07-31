
import type { AttractionItemsType } from "@/type/attraction/attraction_categories";
import Image from "next/image";
import FaqPageItem from "./attraction-item-faq";
import DOMPurify from 'isomorphic-dompurify';
import ReactSlider from "./attraction-slider";




const AttractionMainContent = ({ item }: { item: AttractionItemsType }) => {
    const images = [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3',
        'https://via.placeholder.com/800x400?text=Slide+4',
    ];
    const image = JSON.parse(item.images);
    const fileName = image[0].split('/').pop();
    const imageUrl = `main-${fileName}`;
    const imagePath = image[0].split('/').slice(0, -1).join('/');

    const addLinkStyles = (html: string) => {
        const styleTag = `
            <style>
                a {
                    @apply underline;
                }
            </style>
        `;
        return styleTag + html;
    };
    return (

        <div className='pt-5'>


           

            <div id="section_0" className="text-2xl mb-4">
                <h1 className='mb-4'>{item?.title}</h1>
              
                        <ReactSlider images={item?.images}/>
             
                {/* <Image
                        src={`${process.env.HOST_ADDR}/${imagePath}/${imageUrl}`}
                        fill
                        className="mx-auto w-full h-auto md:w-auto"
                        loading="lazy"
                        alt={item?.title}
                        placeholder='blur'
                        blurDataURL='data:image/webp;base64,UklGRtYCAABXRUJQVlA4WAoAAAAgAAAAvgAAfgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg6AAAAHAMAJ0BKr8AfwA+7XazVKmzpCMiErmycB2JaW7gAd2P7VYHM/t8/AB1sdFvzj6UJoh47bcJMHHUrXeZK3SnIXpPZKYho6epouujFrOHmv3nEB+jZY7q6T2lmGV8tAwjTv3xICtFuTa85Jm8KAD+6cqOqD46sVtHrWouvTFRTAjuvV2CStsc2vsWi5xdBX5Yja3BVB6MeD4ilDfC4erDRqo6KcrzXsHUzBGoDjYGNZOlCF5wZgScIfLSuUnsADSX1BepOZg0+iyl0WijQCzZs7pd4A0usOwtD08YvBcpArCqA7w7xFUEAAA='
                    /> */}

            </div>
         
            {item?.contents?.map((contentItem, index) => (
                <div key={`${index}_content`} id={`section_${index + 1}`} className="text-base text-justify mb-6 relative leading-normal" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(addLinkStyles(contentItem.content)) }} />


            ))}

            {item?.faqs[0].question !== '' &&
                <div id={`section_${item?.contents?.length + 1}`} className="text-2xl mb-4 relative">
                    <h2 className="text-2xl mb-4 mt-8">سوالات متداول</h2>
                    <span className="block w-[230px] md:h-0.5 h-0.25 bg-orange-300"></span>
                </div>
            }

            <FaqPageItem item={item} />
        </div>




    );
};

export default AttractionMainContent;
