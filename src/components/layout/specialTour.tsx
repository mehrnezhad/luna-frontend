'use client'
import Link from "next/link"
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniChevronLeft, HiOutlineArrowsRightLeft, HiOutlineStar } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuAlarmClock } from "react-icons/lu";
import type { TourItemType } from "@/type/tour"
import { useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
//import 'swiper/css/scrollbar';

// import required modules

import { FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const TourHomePage = ({ tours }: { tours: TourItemType[] }) => {
    const [isImageLoading, setImageLoading] = useState(true)
    const formattedPrice = (price: string) => {
        const priceAsNumber = Number(price);
        return priceAsNumber.toLocaleString()
    }

    return (

        <section className="pb-5 pt-6 md:pt-8 lg:pt-12 md:bg-product-bg-home md:dark:bg-product-bg-home-dark bg-no-repeat bg-cover dark:bg-zinc-900 bg-gray-100">
            {/* product header */}
            <div className="container">
                <div className="mb-5 md:mb-12 flex items-end justify-between">
                    <div>

                        <div className="section-title">
                            <h3>تورهای ویژه</h3>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        // When the screen width is less than 768px (mobile)
                        0: {
                            slidesPerView: 2, // Show 2 slides on mobile
                            spaceBetween: 10,
                        },
                        // When the screen width is 768px and above (tablet/desktop)
                        768: {
                            slidesPerView: 4, // Show 4 slides on tablets and larger devices
                            spaceBetween: 20,
                        },
                    }}
                    freeMode={true}
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                  
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="mySwiper"
                >
                    {tours.map((tour: TourItemType, index: number) => (

                        <SwiperSlide>
                            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
                                <div className="relative md:h-52 h-36">
                                    <Link href={`/tour/details/${tour.id}-${tour.slug}`} key={tour.id}>

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

                                <h3 className="text-sm md:text-lg dark:text-white text-zinc-700 font-DanaDemiBold line-clamp-1 md:p-2 md:h-10 h-7 px-2 pt-2">
                                    <Link href={`/tour/details/${tour.id}-${tour.slug}`} key={tour.id}>
                                        {tour.title}
                                    </Link>
                                </h3>
                                <div className="flex flex-row gap-x-2 md:gap-x-2.5 px-2 pb-2 pt-2">
                                    <div className="md:flex md:items-center md:justify-between md:w-full">

                                        <span className="text-sm md:text-base"> شروع قیمت از </span>
                                        <div className="flex flex-row">
                                            <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">{formattedPrice(tour.priceTour)}</span>
                                            <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter pr-1">
                                                تومان
                                            </span>
                                        </div>

                                    </div>
                                    {/* <div className="offer">
                                        <span className="text-sm md:text-lg">
                                            154,000
                                        </span>
                                        <span className="hidden xl:inline text-sm tracking-tighter">
                                            تومان
                                        </span>
                                    </div> */}
                                </div>

                                <div className="flex items-center justify-between p-2">
                                    <div className="flex md:gap-3 gap-2">
                                        <div className="flex items-center justify-center gap-x-1">

                                            <CiCalendar className="text-xs md:text-base" size={18} />
                                            <div className="text-xs md:text-base">{tour.dateTour}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-x-1">
                                        <LuAlarmClock className="text-xs md:text-base" size={18} />
                                        <div className="text-xs md:text-base">{tour.lengthOfStay}</div>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TourHomePage
