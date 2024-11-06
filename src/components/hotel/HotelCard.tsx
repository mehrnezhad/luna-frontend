'use client'
import type { HotelItemType, HotelCategoryType } from "@/type/hotel"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md";
import { IoStar } from "react-icons/io5";
const HotelCard = (child: HotelItemType) => {

    const getRatingLabel = (rate: number) => {
        if (rate > 9.5 && rate <= 10) return 'استثنایی';
        if (rate >= 9 && rate <= 9.5) return 'فوق العاده';
        if (rate > 8.5 && rate < 9) return 'عالی';
        if (rate >= 8 && rate <= 8.5) return 'خیلی خوب';
        if (rate >= 7.5 && rate < 8) return 'خوب';
        if (rate >= 7 && rate < 7.5) return 'قابل قبول';
        return ''; // No label for ratings below 7
    };
    return (
        <React.Fragment>

            <div key={child.id} className="border-t-[2px] border-orange-300 rounded-2xl flex items-start gap-x-2 shadow-normal bg-white dark:bg-zinc-700 dark:text-white" >

                <div className="w-1/2 md:w-1/3 relative h-36 md:h-40">
                    <Link href={`/hotel/details/${child.slug}`} key={child.id}>
                        <Image
                            className="rounded-r-2xl"
                            alt={child.title}
                            sizes="100%"
                            fill
                            loading="lazy"
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${child.thumbnail}`}
                        />
                    </Link>
                </div>
                <div className="w-1/2 md:w-2/3 relative pt-2 h-36 md:h-40">
                    <div className="flex items-center justify-end pl-2">

                        <div className="flex items-end justify-center gap-x-2">
                            <div className="text-xs md:text-sm"> {getRatingLabel(Number(child.rate))}</div>

                            <div className="flex text-xs md:text-sm items-center justify-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] bg-blue-900 dark:bg-zinc-800  rounded-lg transition-all text-white text-center">
                                {child.rate}
                            </div>
                        </div>
                    </div>


                    <h3 className="pt-2 line-clamp-1 text-sm md:text-base font-DanaMedium">
                        <Link href={`/hotel/details/${child.slug}`}>
                            {child.title}
                        </Link>
                    </h3>

                    <div className="md:pt-2 pt-2 line-clamp-1 text-xs md:text-sm">{child.titleEn}</div>
                    <div className="md:text-sm pt-2 line-clamp-1 flex items-center justify-start text-xs"><MdLocationOn size={20} /> {child.region}</div>
                    <div className="pt-2 flex">
                        {(() => {
                            const stars = [];
                            let i = 0;
                            while (i < Number(child.NumberStar)) {
                                stars.push(<IoStar key={i} className="text-yellow-500 text-xs md:text-base" />);
                                i++;
                            }
                            return stars;
                        })()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HotelCard