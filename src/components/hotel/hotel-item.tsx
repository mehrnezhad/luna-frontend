'use client'
import { HotelItemType } from "@/type/hotel";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBackspaceFill } from "react-icons/bs";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import { AiTwotonePushpin } from "react-icons/ai";
import DOMPurify from 'isomorphic-dompurify';
import { IoStar } from "react-icons/io5";
import HotelAddressMap from "./hotel-address-map";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import FaqPageItem from "./hotel-items-faq";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoMdImages } from "react-icons/io";
import StarRating from "@/components/hotel/hotel-star"
import * as actions from "@/actions"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { toast } from "react-toastify";

const HotelItem = ({ item }: { item: HotelItemType }) => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const handleExitFullScreen = () => {
        setIsFullScreen(false); // Exit full-screen mode
    };
    const [activeSection, setActiveSection] = useState<string>("");
    const [currentRating, setCurrentRating] = useState(item.ratingValue); // State to track current rating
    const handleRatingChange = async (newRating: number) => {
        //  setCurrentRating(newRating); // Update current rating
        const data = await actions.updateStarHotel(newRating, item.id)

        if (data === 200) {
            toast.success('امتیاز شما با موفقیت ثبت شد')
        }

    };


    const leftImage = typeof item?.leftImage === 'string' ? JSON.parse(item.leftImage) : item.leftImage;
    const hotelNearBy = typeof item?.hotelNearBy === 'string' ? JSON.parse(item.hotelNearBy) : item.hotelNearBy;
    const importantPlace = typeof item?.importantPlace === 'string' ? JSON.parse(item.importantPlace) : item.importantPlace;
    const facilities = typeof item?.facilities === 'string' ? JSON.parse(item.facilities) : item.facilities;
    const otherImage = typeof item?.otherImage === 'string' ? JSON.parse(item.otherImage) : item.otherImage;
    const new_facilities = typeof item?.new_facilities === 'string' ? JSON.parse(item.new_facilities) : item.new_facilities;




    const getRatingLabel = (rate: number) => {
        if (rate > 9.5 && rate <= 10) return 'استثنایی';
        if (rate >= 9 && rate <= 9.5) return 'فوق العاده';
        if (rate > 8.5 && rate < 9) return 'عالی';
        if (rate >= 8 && rate <= 8.5) return 'خیلی خوب';
        if (rate >= 7.5 && rate < 8) return 'خوب';
        if (rate >= 7 && rate < 7.5) return 'قابل قبول';
        return ''; // No label for ratings below 7
    };

    // Scroll detection
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "0px 0px -50%",
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleClick = (sectionId: string) => {
        setActiveSection(sectionId);


        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };


    // Smooth Scroll with Offset Adjustment
    // const handleClick = (sectionId: string) => {
    //     setActiveSection(sectionId);
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         const offsetTop = section.offsetTop - 60; // Adjust for sticky nav height
    //         window.scrollTo({
    //             top: offsetTop,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    return (
        <>
            <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1 relative">
                <div className="col-span-2 row-span-2">
                    <div className="relative w-full h-[100%]">

                        <Image
                            alt={item?.title}
                            sizes="100%"
                            fill
                            loading="lazy"
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${item?.mainImage}`}
                        />

                    </div>

                    {/* Add a button to open the modal */}
                    <button
                        className="flex gap-x-1 items-center absolute bottom-2 left-2 bg-yellow-500 text-white py-2 px-4 rounded-lg z-20"
                        onClick={() => setIsFullScreen(true)}
                    >
                        <IoMdImages size={20} />
                        <span>
                            تمامی تصاویر
                        </span>

                    </button>


                </div>

                {leftImage?.map((img: string, index: number) => (
                    <div className="h-52" key={index}>
                        <div className="relative w-full h-[100%]">

                            <Image
                                alt={item?.title}
                                sizes="100%"
                                fill
                                loading="lazy"
                                src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${img}`}
                            />

                        </div>
                    </div>
                ))}
            </div>

            <div className="block md:hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full flex items-center justify-center" // Flexbox centering
                >
                    {otherImage?.map((image: string, index: number) => (
                        <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-[30vh] max-w-[90vw] m-auto"> {/* Adjust max-width and max-height */}
                                <Image
                                    alt={`Full-Screen Image ${index}`}
                                    src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image}`}
                                    layout="fill"
                                    objectFit="contain" // Use "contain" to maintain aspect ratio without stretching
                                    className="rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {isFullScreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl z-50"
                        onClick={handleExitFullScreen}
                    >
                        &times; {/* Close button */}
                    </button>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="w-full h-full flex items-center justify-center" // Flexbox centering
                    >
                        {otherImage?.map((image: string, index: number) => (
                            <SwiperSlide key={index} className="relative w-full h-full flex items-center justify-center">
                                <div className="relative w-full h-[80vh] max-w-[90vw] m-auto top-10"> {/* Adjust max-width and max-height */}
                                    <Image
                                        alt={`Full-Screen Image ${index}`}
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image}`}
                                        layout="fill"
                                        objectFit="contain" // Use "contain" to maintain aspect ratio without stretching
                                        className="rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}


            <div className="sticky top-0 bg-white z-10 dark:bg-zinc-900">
                <ul className="flex flex-row items-center justify-around w-full md:justify-center md:gap-4 p-2">
                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-1 ${activeSection === "section_1"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_1")}
                    >
                        <BsBackspaceFill className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-lg text-xs md:font-MorabbaBold text-slate-900 dark:text-white">
                            اطلاعات کلی
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-0 ${activeSection === "section_2"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_2")}
                    >
                        <FaLocationDot className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-lg text-xs md:font-MorabbaBold text-slate-900 dark:text-white">
                            موقعیت هتل
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-0 ${activeSection === "section_3"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_3")}
                    >
                        <BsFillSkipStartCircleFill className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-lg text-xs md:font-MorabbaBold text-slate-900 dark:text-white">
                            امکانات هتل
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-0 ${activeSection === "section_4"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_4")}
                    >
                        <FaInfoCircle className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-lg text-xs md:font-MorabbaBold  text-slate-900 dark:text-white">
                            معرفی هتل
                        </span>
                    </li>
                </ul>
            </div>




            <div className="flex flex-col items-center justify-center gap-y-3">

                <section className="w-full mt-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" id="section_1">
                    <div className="md:flex p-2 md:p-5">
                        <div className="flex-col w-full md:w-2/3">
                            <div className="flex flex-row flex-wrap gap-x-2 items-center justify-start">
                                <h1 className="font-DanaDemiBold md:text-xl text-base whitespace-nowrap">{item?.title}</h1>
                                <span className="flex flex-row">
                                    {(() => {
                                        const stars = [];
                                        let i = 0;
                                        while (i < Number(item.NumberStar)) {
                                            stars.push(<IoStar key={i} className="text-yellow-500 text-xs md:text-base" />);
                                            i++;
                                        }
                                        return stars;
                                    })()}
                                </span>

                                <div className="text-xs md:text-base flex items-center justify-center w-[60px] h-[30px] md:w-[70px] md:h-[40px] bg-blue-900 dark:bg-zinc-800 rounded-lg transition-all text-white text-center">
                                    {`10 / ${item?.rate}`}
                                </div>
                                <div className="text-xs md:text-sm"> {getRatingLabel(Number(item?.rate))}</div>
                            </div>

                            <div className="mt-5">
                                <p className="font-Dana text-base md:text-xl">{item?.titleEn}</p>
                            </div>

                            <div className="mt-5 flex gap-x-1">
                                <FaLocationDot className="shrink-0 dark:text-yellow-500 text-sm md:text-base" size={17} />
                                <span className="text-sm md:text-base">
                                    {item?.region} - {item?.regionEn}
                                </span>
                            </div>

                            {item?.address ?
                                <div className="mt-5 flex gap-x-1">
                                    <FaHotel className="shrink-0 dark:text-yellow-500 text-xs md:text-base" size={17} />
                                    <span className="text-xs md:text-sm">
                                        {item?.address}
                                    </span>
                                </div>
                                : ''
                            }

                            {item?.telephone ?
                                <div className="mt-5 flex gap-x-1">
                                    <FaPhoneFlip className="shrink-0 dark:text-yellow-500" size={17} />
                                    <span className="">
                                        {item?.telephone}
                                    </span>
                                </div>
                                : ''
                            }
                        </div>

                        <div className="md:flex w-full md:w-1/3 mt-4 md:mt-0">
                            <div className="flex flex-row items-start gap-x-1">

                                <AiTwotonePushpin className="shrink-0 dark:text-yellow-500" size={20} />
                                <span className="md:font-DanaMedium font-Dana ">

                                    <div className="flex text-justify" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.topContent) }}></div>

                                </span>

                            </div>

                        </div>

                    </div>



                </section>



                <section className="md:flex md:flex-row gap-x-2 w-full mt-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white p-2 md:p-5" id="section_2">

                    <div className="md:flex w-full md:w-2/3">
                        <div className="md:flex md:flex-row w-full">

                            <div className="w-full md:w-1/2 flex flex-col items-center md:border-l-1 md:border-orange-200 pl-4 gap-y-3 max-h-96 overflow-y-auto">
                                <span className="font-MorabbaMedium text-xl mb-2">فاصله تا مراکز مهم </span>

                                {importantPlace.map((place: { label: string, value: string }, index: number) => (
                                    <div className="flex flex-row justify-between w-full" key={index}>

                                        <div className="flex flex-row gap-x-1 items-center justify-start text-sm md:text-base">
                                            <AiOutlineCaretLeft size={12} />
                                            {place.label}
                                        </div>

                                        <div className="text-xs md:text-base">{place.value}</div>
                                    </div>
                                ))}

                            </div>

                            <div className="w-full md:w-1/2 flex flex-col items-center md:px-4 gap-y-3 max-h-96 overflow-y-auto mt-4 md:mt-0">
                                <span className="font-MorabbaMedium text-xl  mb-2">هتل های اطراف</span>
                                {hotelNearBy.map((place: { label: string, value: string }, index: number) => (
                                    <div className="flex flex-row justify-between w-full" key={index}>

                                        <div className="flex flex-row gap-x-1 items-center justify-start text-sm md:text-base">
                                            <AiOutlineCaretLeft size={12} />
                                            {place.label}
                                        </div>
                                        <div className="text-xs md:text-base">{place.value}</div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>


                    <div className="md:flex h-96 w-full md:w-1/3">
                        <HotelAddressMap lat={item?.lat} lang={item?.lang} />
                    </div>
                </section>

                <section className="w-full mt-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white p-2 md:p-5" id="section_3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {new_facilities.map((facility: { categoryTitle: string, facilityTitles: string[] }, index: number) => (
                            <div key={index} className="border p-4 rounded-lg text-right">
                                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {facility.categoryTitle}
                                </span>
                                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-white">
                                    {Array.isArray(facility.facilityTitles) ? (
                                        facility.facilityTitles.map((item, i) => (
                                            <li key={i} className="text-md">
                                                {item}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-md">{facility.facilityTitles}</li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full mt-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" id="section_4">
                    <div className="flex flex-col items-center"> {/* Center the content horizontally */}
                        {item?.videoUrl ? (
                            <div className="flex w-full flex-col items-center justify-center">
                                <span className="mt-5 text-xl font-semibold text-center text-gray-800 dark:text-white">
                                    ویدیو هتل
                                </span>
                                <div className="mt-5 flex justify-center w-1/2"> {/* Center the video block */}
                                    <div className="relative w-full" style={{ paddingTop: '57%' }}> {/* Maintain aspect ratio */}
                                        <iframe
                                            src={item.videoUrl} // Use curly braces to embed the variable directly
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full"
                                            frameBorder="0"
                                            title="Video"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                        {/* Uncomment if you want to render main content */}
                        <span className="mt-5 text-xl font-semibold text-center text-gray-800 dark:text-white">
                            معرفی هتل
                        </span>
                        <div className="leading-10 p-2 md:p-5 flex text-justify" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.mainContent) }}></div>

                        <div className="flex w-full p-4">
                            <FaqPageItem item={item} />
                        </div>


                    </div>
                    <div className="flex flex-row gap-x-1 px-6 py-3">
                         <span className="">امتیاز کاربران سایت : </span>
                        <StarRating ratingValue={currentRating} onRatingChange={handleRatingChange} />

                    </div>

                </section>


            </div >
        </>
    );
};

export default HotelItem;
