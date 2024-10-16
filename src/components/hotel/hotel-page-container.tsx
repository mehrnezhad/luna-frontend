'use client'
import type { HotelPageItemType, HotelCategoryType } from "@/type/hotel"
import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
const HotelPageContainer = ({ hotelPage, categories }: { hotelPage: HotelPageItemType, categories: HotelCategoryType[] }) => {

    const image = typeof hotelPage?.images === 'string' ? JSON.parse(hotelPage.images) : hotelPage.images

    return (
        <>

            <section className='dark:bg-zinc-900 bg-gray-200 min-h-screen'>
                <div className="relative bg-slate-900 w-full h-20 md:h-96">
                    <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`}
                        alt={hotelPage.title}
                        style={{ objectFit: 'cover' }}
                    />
                </div>



                {/* Content below the image */}
                <div className="container">
                <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-3">
                <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
                <HiChevronLeft />
                  هتل
               </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 mt-5 pb-5">
                        {categories.map((child, index) =>

                            <Link key={index} href={`/hotel/${child.slug}`} >
                                <Card key={index} isHoverable isFooterBlurred className="h-40 md:h-64 rounded-2xl bg-white shadow-xl dark:bg-zinc-700 overflow-hidden">
                                
                                    <Image
                                        alt={child.title}
                                        className="z-0 w-full h-full object-cover"
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${child.thumbnail}`}
                                        width={300}
                                        height={300}
                                    />

                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 items-center justify-center">

                                        <h2 className="text-black md:font-medium text-sm md:text-2xl dark:text-white font-DanaMedium">{child.title}</h2>

                                    </CardFooter>
                                </Card>
                            </Link>
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
export default HotelPageContainer