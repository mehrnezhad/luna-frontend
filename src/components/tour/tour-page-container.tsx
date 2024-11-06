'use client'
import type { TourPageItemType, TourItemType ,TourCategoryType} from "@/type/tour"
import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import {useState} from "react"
const TourPageContainer = ({ tourPage, categories }: { tourPage: TourPageItemType, categories: TourCategoryType[] }) => {
    const [visibleCount, setVisibleCount] = useState(16); 
    const image = typeof tourPage?.images === 'string' ? JSON.parse(tourPage.images) : tourPage.images
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 16);  // Load 16 more categories each time
    };
    return (
        <>

<section className="dark:bg-zinc-900 bg-gray-100 min-h-screen">
                <div className="relative bg-slate-900 w-full h-20 md:h-96">
                    <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`}
                        alt={tourPage.title}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Content below the image */}
                <div className="container">
                    <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-3">
                        <Link href="/">صفحه اصلی</Link>
                        <HiChevronLeft />
                        تور
                    </div>
                    <h1 className="section-title py-3">تورهای داخلی و خارجی</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 mt-5 pb-5">
                        {categories.slice(0, visibleCount).map((child, index) => (
                            <Link key={index} href={`/tour/${child.slug}`}>
                                <Card isHoverable isFooterBlurred className="h-40 md:h-[230px] rounded-2xl bg-white shadow-xl dark:bg-zinc-700 overflow-hidden">
                                    <Image
                                        alt={child.title}
                                        className="z-0 w-full h-full object-cover"
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${child.thumbnail}`}
                                        width={300}
                                        height={230}
                                    />
                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 items-center justify-center">
                                        <h3 className="text-black md:font-medium text-base md:text-2xl dark:text-white font-DanaMedium">{child.title}</h3>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Load More button */}
                    {visibleCount < categories.length && (
                        <div className="flex justify-center mt-5">
                            <Button onClick={handleLoadMore} color="primary" >
                                 تور های بیشتر
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default TourPageContainer