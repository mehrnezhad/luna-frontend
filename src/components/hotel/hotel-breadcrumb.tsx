'use client'
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi2"
import React from "react"
import { HotelItemType } from "@/type/hotel"

const HotelBreadCrumb = ({ item }: { item: HotelItemType }) => {
    return (
        <>
            <div className="flex flex-wrap justify-start items-center text-xs md:text-base pb-2 gap-x-1 md:gap-x-2">
                <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
                <HiChevronLeft />
                <Link href='/hotel'>هتل</Link>
                <HiChevronLeft />
                <Link href={`${item.hotelCategories[0]?.slug}`}>{item.hotelCategories[0]?.title}</Link>
                  <HiChevronLeft />
                  {item?.title} 
              
            </div>
        </>
    )
}
export default HotelBreadCrumb