'use client'
import type { TourItemType, TourCategoryType } from "@/type/tour"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MdLocationOn } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";


const TourCard = (child: TourItemType) => {
    const priceAsNumber = Number(child.priceTour);
    const formattedPrice = priceAsNumber.toLocaleString()
    return (
        <React.Fragment>

            <div key={child.id} className="border-t-[2px] border-orange-300 rounded-2xl flex flex-col  md:flex-row items-start gap-y-2 md:gap-x-2 shadow-normal bg-white dark:bg-zinc-700 dark:text-white" >

                <div className="w-[100%] md:w-1/3 relative h-44 md:h-40">
                    <Link href={`/tour/details/${child.id}-${child.slug}`} key={child.id}>
                        <Image
                            className="rounded-r-2xl rounded-l-2xl"
                            alt={child.title}
                            sizes="100%"
                            fill
                            loading="lazy"
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${child.thumbnail}`}
                        />
                    </Link>
                </div>
                <div className="md:w-2/3 w-full p-2 md:pt-2 md:p-0 md:h-40">

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between pl-2">

                        <div className="">

                            <Link href={`/tour/details/${child.id}-${child.slug}`}>
                                <h2 className="line-clamp-1 text-base md:text-lg font-DanaMedium">{child.title}</h2>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-end justify-center gap-x-2">

                            <div className="flex flex-col text-xs md:text-sm items-center justify-center w-[125px] h-[45px] md:w-[145px] md:h-[50px] bg-blue-900 dark:bg-zinc-800  rounded-lg transition-all text-white text-center">
                                <span className="pt-2">
                                    شروع قیمت از:
                                </span>
                                <span className="font-DanaDemiBold md:text-base text-base">
                                    {formattedPrice} تومان
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row items-center justify-start gap-x-1 md:pt-2 pt-4 line-clamp-1 text-sm md:text-base">
                        <span>
                            <CiCalendar size={18} />
                        </span>
                        <span>
                            تاریخ برگزاری :
                        </span>
                        <span>
                            {child.dateTour}
                        </span>

                    </div>

                    <div className="flex flex-row items-center justify-start gap-x-1 md:pt-2 pt-4 line-clamp-1 text-sm md:text-base">
                        <span>
                            <LuAlarmClock size={18} />
                        </span>
                        <span>
                            مدت اقامت :
                        </span>
                        <span>
                            {child.lengthOfStay}
                        </span>

                    </div>

                    <div className="flex flex-row items-center justify-start gap-x-1 md:pt-2 pt-4 line-clamp-1 text-sm md:text-base">
                        <span>
                        <IoIosInformationCircleOutline size={19}/>
                        </span>
                    
                        <span>
                            {child.serviceImportant}
                        </span>

                    </div>


                    <div className="md:hidden flex flex-row items-center justify-start gap-x-1 md:pt-2 pt-4 line-clamp-1 text-sm md:text-base">
                        <span>
                        <IoPricetagsOutline size={18}/>
                        </span>
                        <span>
                            شروع قیمت از  :
                        </span>
                        <span className="font-DanaDemiBold text-base">
                            {formattedPrice} تومان
                        </span>

                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
export default TourCard