'use client'
import Link from "next/link"
import Image from "next/image";
import { HiMiniChevronLeft} from "react-icons/hi2";
import type { TourCategoryType } from "@/type/tour"

import { useState } from "react";

const CategoryTourHomePage = ({ categoriesTour }: { categoriesTour: TourCategoryType[] }) => {
    const [isImageLoading, setImageLoading] = useState(true)

    return (

        <section className="pb-5 pt-5 md:bg-product-bg-home md:dark:bg-product-bg-home-dark bg-no-repeat bg-cover dark:bg-zinc-900 bg-gray-100">
            {/* product header */}
            <div className="container">
                <div className="mb-5 md:mb-12 flex items-end justify-between">
                    <div>

                        <div className="section-title">
                            <div> مقاصد پر طرفدار</div>
                        </div>

                    </div>
                    <Link href="/tours" className="section-link">
                    
                        <span>
                            مشاهده همه
                        </span>
                        <HiMiniChevronLeft size={20} />
                    </Link>

                </div>
            </div>

            <div className="container">

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:p-2 child:md:p-5">

                    {categoriesTour.map((tour: TourCategoryType, index: number) => (


                        <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
                            <div className="relative h-36 md:h-52">
                                <Link href={`/tour/${tour.slug}`} key={tour.id}>

                                    <Image
                                        sizes="100%"
                                        fill
                                        loading="lazy"
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${tour.thumbnail}`}
                                        alt={tour.title}
                                        onLoad={() => setImageLoading(false)}
                                        className={`${isImageLoading ? 'blur' : 'remove-blur'} w-full`}
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" />

                                </Link>
                            </div>

                            <h3 className="text-sm md:text-lg dark:text-white text-zinc-700 font-DanaDemiBold line-clamp-1 p-2 text-center">
                                <Link href={`/tour/${tour.slug}`} key={tour.id}>
                                    {tour.title}
                                </Link>
                            </h3>


                        </div>


                    ))}

                </div>
            </div>

        </section>
    )
}

export default CategoryTourHomePage
