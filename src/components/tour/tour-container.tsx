'use client'
import type { TourPageItemType, TourCategoryType } from "@/type/tour"
import React, { useState } from "react";
import { Card, CardHeader, CardFooter, Button, Input, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import dynamic from "next/dynamic";
import { MdLocationOn } from "react-icons/md";
import { IoSearch, IoStar } from "react-icons/io5";
import { useMemo } from "react";
import TourCard from "./TourCard";
//import LoadMoreHotel from "./load-more-hotel";
import FaqPageTourCategory from "./tour-category-faq";
import DOMPurify from 'isomorphic-dompurify';
import TourCategoryRightMenu from "./tour-category-right-menu";
import TourCategoryMainContent from "./tour-category-main-content"
import RatingReview from "./star-rate"
const TourContainer = ({ items, slug }: { items: TourCategoryType, slug: string }) => {


    const [rating, setRating] = useState(0)
    //const IoStar = dynamic(() => import("react-icons/io5").then((mod) => mod.IoStar));

    const image = typeof items?.images === 'string' ? JSON.parse(items.images) : items.images
    const [fiterData, setFilterData] = useState(items.TourItems || '')
    const [visibleItems, setVisibleItems] = useState(6); // Initially show 6 items

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Show 6 more items
    };

    return (
        <>
            <section className='dark:bg-zinc-900 bg-gray-100 min-h-screen pb-6'>
                <div className="w-full h-44 md:h-[450px] dark:bg-zinc-700 bg-white rounded-3xl">
                    <div className="relative bg-slate-900 w-full h-30 md:h-96">
                        <Image
                            fill
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`}
                            alt={items.title}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="container">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-lg md:text-2xl font-DanaDemiBold pt-4">{items.title}</h1>
                            <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-4">
                                <Link href={`${process.env.NEXT_PUBLIC_MYSELF_ADDR}`}>صفحه اصلی</Link>
                                <HiChevronLeft />
                                <Link href='/tour'>تور</Link>
                                <HiChevronLeft />
                                {items.title}

                            </div>

                        </div>

                    </div>
                </div>

                {/* Content below the image */}
                <div className="container">

                    <div className="flex gap-x-5">

                        <main className=" flex flex-1 flex-col pt-4 ">

                            {fiterData.length !== 0 ?

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3 justify-between items-center ">

                                    {fiterData.slice(0, visibleItems).map((child, index) =>

                                        <TourCard key={child.id} {...child} />
                                    )}
                                </div>
                                :
                                <div className="flex justify-center items-start h-screen">
                                    توری یافت نشد
                                </div>
                            }

                            {visibleItems < fiterData.length && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        className="px-6 py-2 bg-blue-500 text-white rounded-md"
                                        onClick={loadMoreItems}
                                    >
                                        تورهای  بیشتر
                                    </button>
                                </div>
                            )}
                        </main>

                    </div>

                    <div className="flex flex-row mt-4 gap-x-2">

                        <aside className="hidden md:flex md:w-1/4 dark:bg-zinc-700 dark:text-white bg-white text-sm flex-col gap-y-4 sticky top-0 h-[calc(100vh-20px)] overflow-y-auto shadow-sm rounded-t">
                            <TourCategoryRightMenu item={items} />
                        </aside>
                        <main className="md:w-3/4 w-full dark:bg-zinc-700 dark:text-white bg-white p-4">
                            <TourCategoryMainContent item={items} />
                          
                        </main>
                                      
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default TourContainer