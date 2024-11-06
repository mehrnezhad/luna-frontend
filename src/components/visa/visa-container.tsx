'use client'
import type { VisaCategoryType } from "@/type/visa/visa_category"

import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi2"
const VisaContainer = ({ visa }: { visa: VisaCategoryType }) => {

    const image = typeof visa?.images === 'string' ? JSON.parse(visa.images) : visa.images

    return (
        <>
            <section className='dark:bg-zinc-900 bg-gray-100 min-h-screen'>
                <div className="relative bg-slate-900 w-full md:h-96 h-44">
                    <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`}
                        alt={visa.title}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Content below the image */}
                <div className="container">

                <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-3">
                <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
                <HiChevronLeft />
                  ویزا
               </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 mt-5 pb-5">
                        {visa?.children.map((child,index) =>

                            <Link key={index} href={`/visa/${child.slug}`} >
                                <Card key={index} isHoverable isFooterBlurred className="h-56 md:h-64 rounded-2xl bg-white shadow-xl dark:bg-zinc-700 overflow-hidden">
                                    <CardHeader className="flex-col items-center">
                                        <h3 className="text-black font-medium text-base md:text-2xl dark:text-white">{child.title}</h3>
                                    </CardHeader>
                                    <Image
                                        alt={child.title}
                                        className="z-0 w-full h-full object-cover"
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${child.thumbnail}`}
                                        width={300}
                                        height={300}
                                    />

                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-1 md:px-2">
                                        <div>
                                            <p className="text-black text-sm md:text-base md:font-DanaDemiBold">شروع قیمت از </p>
                                        </div>
                                        <Button className="text-sm md:text-lg font-DanaDemiBold" color="primary" radius="full" size="sm">
                                            {child.startedPrice}
                                        </Button>
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
export default VisaContainer