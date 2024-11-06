'use client'
import { TourItemType, HotelType } from "@/type/tour";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsSignStop } from "react-icons/bs";
import { PiMoneyWavy } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { BiBus } from "react-icons/bi";
import { MdOutlineLunchDining } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuLuggage } from "react-icons/lu";
import { BsCaretLeft } from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { RiCupLine } from "react-icons/ri";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsBackspaceFill } from "react-icons/bs";
import { BsFillSkipStartCircleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaPlaneUp } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { MdDescription } from "react-icons/md";

import { AiTwotonePushpin } from "react-icons/ai";
import DOMPurify from 'isomorphic-dompurify';
import { IoStar } from "react-icons/io5";
//import HotelAddressMap from "./hotel-address-map";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
//import FaqPageItem from "./hotel-items-faq";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoMdImages } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const TourItem = ({ item }: { item: TourItemType }) => {

    const [isFullScreen, setIsFullScreen] = useState(false);
    const formattedPrice = Number(item.priceTour).toLocaleString()
    const packages = typeof item?.packages === 'string' ? JSON.parse(item.packages) : item.packages;
    const services = typeof item?.services === 'string' ? JSON.parse(item.services) : item.services;
    const documents = typeof item?.documents === 'string' ? JSON.parse(item.documents) : item.documents;
    const chartplan = typeof item?.chartplan === 'string' ? JSON.parse(item.chartplan) : item.chartplan;


    const [dates, setDates] = useState<string[]>([]); // Hold all available dates
    const [selectedDate, setSelectedDate] = useState<string>(''); // The selected date
    const [hotels, setHotels] = useState<HotelType[]>([]); // Hotels for the selected date

    // Parse the item data on component mount
    useEffect(() => {
        if (item && Array.isArray(packages) && packages.length > 0) {
            const firstPackage = packages[0];
            setDates(packages.map((pkg) => pkg.date)); // Extract dates from packages
            setSelectedDate(firstPackage.date); // Default select the first date
            setHotels(firstPackage.hotel); // Show hotels for the first date
        }

    }, [item]);


    const handleDateSelection = (date: string) => {
        setSelectedDate(date);
        const selectedPackage = packages.find((pkg: any) => pkg.date === date);
        if (selectedPackage) {
            setHotels(selectedPackage.hotel); // Show only the hotels related to the selected date
        } else {
            setHotels([]); // Clear hotels if no package found for the date
        }
    };

    const handleExitFullScreen = () => {
        setIsFullScreen(false); // Exit full-screen mode
    };

    const [activeSection, setActiveSection] = useState<string>("");

    const leftImage = typeof item?.leftImage === 'string' ? JSON.parse(item.leftImage) : item.leftImage;


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
                threshold: 0.7, // Adjust threshold for when to activate the section
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

    // Click handler to update active section manually
    const handleClick = (sectionId: string) => {
        setActiveSection(sectionId);

        // Scroll smoothly to the section
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <div className="w-full dark:bg-zinc-700 bg-white rounded-3xl pb-3">
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1 relative">
                    <div className="col-span-2 row-span-2">
                        <div className="relative w-full h-[100%]">
                            <Link href="">
                                <Image
                                    alt={item?.title}
                                    sizes="100%"
                                    fill
                                    loading="lazy"
                                    src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${item?.mainImage}`}
                                />
                            </Link>
                        </div>

                    </div>

                    {leftImage?.map((img: string, index: number) => (
                        <div className="h-52" key={index}>
                            <div className="relative w-full h-[100%]">
                                <Link href="" key={index}>
                                    <Image
                                        alt={item?.title}
                                        sizes="100%"
                                        fill
                                        loading="lazy"
                                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${img}`}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* show in mobile */}
                <div className="block md:hidden">
                    <div className="relative w-full h-[30vh] m-auto"> {/* Adjust max-width and max-height */}

                        <Image
                            alt={item?.title}
                            sizes="100%"
                            fill
                            loading="lazy"
                            className="rounded-3xl"
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${item?.mainImage}`}
                        />

                    </div>


                </div>
                <div className="container">
                    <div className="md:flex md:flex-row justify-between items-center">

                        <div className="flex flex-col gap-y-3">
                            <h1 className="text-lg md:text-xl font-DanaDemiBold pt-4">{item.title}</h1>

                            {item?.dateTour ?
                                (
                                    <div className="flex flex-row gap-x-1">

                                        <LuAlarmClock size={18} />
                                        <span>تاریخ برگزاری تور: </span>
                                        <span>{item?.dateTour}</span>

                                    </div>
                                )
                                :
                                ''
                            }
                            {item?.lengthOfStay ?
                                (
                                    <div className="flex flex-row gap-x-1">

                                        <CiCalendar size={18} />
                                        <span>مدت اقامت: </span>
                                        <span>{item?.lengthOfStay}</span>

                                    </div>
                                )
                                :
                                ''
                            }

                            {item?.serviceImportant ?
                                (
                                    <div className="flex flex-row gap-x-1">

                                        <IoIosInformationCircleOutline size={18} />
                                        <span className="hidden md:flex"> خدمات تور: </span>
                                        <span>{item?.serviceImportant}</span>

                                    </div>
                                )
                                :
                                ''
                            }

                        </div>


                        <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-4">
                            <PiMoneyWavy size={20} />
                            <span>  شروع قیمت از :  </span>
                            <span className="text-xl font-DanaDemiBold"> {formattedPrice} تومان  </span>

                        </div>


                    </div>
                </div>

            </div>



            <div className="sticky top-0 bg-gray-100 z-10 dark:bg-zinc-900">
                <ul className="flex flex-row items-center justify-around w-full md:justify-center md:gap-4 p-2">
                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-2 ${activeSection === "section_1"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_1")}
                    >
                        <IoMdPricetags  className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-sm hover:font-bold text-slate-900 dark:text-white">
                            قیمت تور
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-2 ${activeSection === "section_2"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_2")}
                    >
                        <BsBackspaceFill className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-sm hover:font-bold text-slate-900 dark:text-white">

                            خدمات تور
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-2 ${activeSection === "section_3"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_3")}
                    >
                        <FaPlaneUp className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-sm hover:font-bold text-slate-900 dark:text-white">
                            برنامه پرواز
                        </span>
                    </li>

                    <li
                        className={`w-1/4 h-12 flex items-center justify-center cursor-pointer gap-x-1 md:gap-x-2 px-2 ${activeSection === "section_4"
                            ? "text-yellow-500 border-b-4 border-yellow-500"
                            : ""
                            }`}
                        onClick={() => handleClick("section_4")}
                    >
                        <MdDescription className="shrink-0 dark:text-yellow-500 text-xs md:text-base" />
                        <span className="text-[0.7rem] md:text-sm hover:font-bold text-slate-900 dark:text-white">
                            توضیحات 
                        </span>
                    </li>
                </ul>
            </div>

            {/* start section */}

            <div className="flex flex-col items-center  gap-y-3">

                <section id="section_1" className="w-full">
                    <div className="w-[100%] mb-3 mt-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                        <div className="font-DanaMedium text-xl pr-5 pt-3 ">تاریخ های برگزاری تور</div>
                        <div className="md:flex p-2 md:p-5">

                            <div className="date-selector flex gap-4 ">

                                {dates.map((date, index) => (

                                    <button
                                        key={index}
                                        onClick={() => handleDateSelection(date)}
                                        className={` flex gap-x-2 items-center justify-start p-2 ${selectedDate === date ? 'bg-orange-500 text-slate-200' : 'bg-gray-200 text-zinc-900'} rounded-md`}
                                    >
                                        <IoCalendarOutline />
                                        {date}
                                    </button>

                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="w-[100%] flex flex-col gap-y-2">

                        {hotels.length > 0 ? (
                            hotels.map((hotel, index) => (

                                <div key={index} className=" border-t-[2px] border-orange-300 rounded-2xl flex flex-col  md:flex-row items-start gap-y-2 md:gap-x-2 shadow-normal bg-white dark:bg-zinc-700 dark:text-white" >

                                    <div className="w-[100%] md:w-1/4 relative h-44 md:h-56">
                                        <Link href={`/hotel/details/${hotel.hotelslug}`} key={index}>
                                            <Image
                                                className="rounded-r-2xl rounded-l-2xl"
                                                alt={hotel.title}
                                                sizes="100%"
                                                fill
                                                loading="lazy"
                                                src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${hotel.image}`}
                                            />
                                        </Link>
                                    </div>
                                    <div className="md:w-3/4 w-full p-2 md:pt-4">

                                        <div className="flex flex-col gap-y-2 pl-2">

                                            <div className="">
                                                <Link href={`/hotel/details/${hotel.hotelslug}`}>
                                                    <h2 className="line-clamp-1 text-base md:text-lg font-DanaMedium">{hotel.title}</h2>
                                                </Link>
                                            </div>

                                            <div className="flex gap-x-2 items-center">
                                                <div className="flex gap-x-1">
                                                    {(() => {
                                                        const stars = [];
                                                        let i = 0;
                                                        while (i < Number(hotel.hotelstar)) {
                                                            stars.push(<IoStar key={i} className="text-yellow-500 text-xs md:text-base" />);
                                                            i++;
                                                        }
                                                        return stars;
                                                    })()}
                                                </div>
                                                <div className="flex gap-x-1">
                                                    {hotel.hoteltransfer === 'فعال' ?
                                                        (
                                                            <div className="text-sm flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl">
                                                                <BiBus />
                                                                <span className="text-xs">
                                                                    ترانسفر
                                                                </span>

                                                            </div>
                                                        ) :
                                                        (
                                                            ''
                                                        )}
                                                </div>
                                                <div className="flex gap-x-1">
                                                    {hotel.hotelservice === 'BB' ? (
                                                        <div className="text-sm flex flex-row items gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl">
                                                            <RiCupLine className="w-4 h-4" />
                                                            <span className="text-xs">BB</span>
                                                        </div>
                                                    ) : (

                                                        <div className="text-sm flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl">
                                                            <MdOutlineLunchDining />
                                                            <span className="text-xs">
                                                                {hotel.hotelservice}
                                                            </span>

                                                        </div>

                                                    )}
                                                </div>
                                            </div>

                                        </div>


                                        <div className="flex md:flex-row flex-col gap-y-3 justify-around md:items-center mt-6">

                                            <div className="flex flex-row justify-between gap-x-4 md:flex-col md:gap-y-4 md:items-center">
                                                <span>دو تخته </span>

                                                <span className="font-DanaDemiBold"> {hotel.hotelpricetwobed} تومان </span>
                                            </div>

                                            <div className="flex flex-row justify-between gap-x-4 md:flex-col md:gap-y-4 md:items-center">
                                                <span>یک تخته </span>
                                                <span className="font-DanaDemiBold">{hotel.hotelpriceonebed} تومان</span>
                                            </div>


                                            <div className="flex flex-row justify-between gap-x-4 md:flex-col md:gap-y-4 md:items-center">
                                                <span>  کودک با تخت </span>
                                                <span className="font-DanaDemiBold">{hotel.hotelpricechild} تومان</span>
                                            </div>


                                            <div className="flex flex-row justify-between gap-x-4 md:flex-col md:gap-y-4 md:items-center">
                                                <span>   کودک بدون تخت </span>

                                                <span className="font-DanaDemiBold">{hotel.hotelpricechildnobed} تومان </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hotels available for this date.</p>
                        )}

                    </div>

                </section>

                <section className="w-[100%] mt-5 p-3 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" id="section_2">

                    <div className="flex md:flex-row flex-col justify-around">

                        <div className="flex-col ">
                            <div className="flex flex-row gap-x-2 mb-5 text-xl">
                                <FaServicestack />
                                <span> خدمات تور</span>

                            </div>
                            <div className="flex flex-col gap-y-4 w-full" >

                                {services.map((service: string[], index: number) => (

                                    <div className="flex flex-row gap-x-1 items-center justify-start text-sm md:text-base">
                                        <AiOutlineCaretLeft size={12} />
                                        {service}
                                    </div>
                                ))
                                }
                            </div>
                        </div>


                        <div className="flex-col">
                            <div className="flex flex-row gap-x-2 mb-5 text-xl mt-5 md:mt-0">
                                <IoDocumentTextOutline />
                                <span>مدارک مورد نیاز</span>

                            </div>
                            <div className="flex flex-col gap-y-4 w-full" >

                                {documents.map((document: string[], index: number) => (

                                    <div className="flex flex-row gap-x-1 items-center justify-start text-sm md:text-base">
                                        <AiOutlineCaretLeft size={12} />
                                        {document}
                                    </div>
                                ))
                                }
                            </div>
                        </div>

                    </div>
                </section>

                <section className="w-[100%] mt-5 p-3 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" id="section_3">
                    
                    <div className="text-xl font-DanaDemiBold mb-3 md:mb-1">برنامه پرواز</div>
                    
                    <div className="md:flex-col gap-y-14 hidden md:flex">
                        {chartplan.map((item: any, index: number) => (

                            <div className="flex flex-row justify-between items-center">

                                <div className="flex justify-center w-2/12">
                                    {item.namePlane}
                                </div>

                                <div className="flex flex-row items-center justify-center w-8/12">

                                    <div className="flex flex-col gap-y-2 w-1/6 items-center">
                                        <span className="font-DanaDemiBold"> {item.timeflight} </span>
                                        <span> {item.firstlocation} </span>
                                    </div>


                                    <div className="flex flex-row justify-between items-center w-4/6 pt-6">
                                        <div className="flex flex-col gap-y-3 justify-center">
                                            <span className="transform -rotate-90 relative top-[5px]"> <MdAirplanemodeActive /></span>
                                            <span> {item.flagfirst} </span>
                                        </div>
                                        <div className="border-b-1 h-1 mx-auto relative top-[-18px] w-full">

                                            <div className=" text-sm relative top-[-35px] right-[40%] px-2 py-1 text-center">
                                                <div className="flex flex-row gap-x-1 items-center">
                                                    <FaRegClock />
                                                    <span className="pt-1">{item.timetravel}</span>
                                                </div>
                                            </div>

                                            {item.timestop ? (
                                                <div className=" text-sm relative top-[-25px] right-[40%] px-2 py-1 text-center">
                                                    <div className="flex flex-row gap-x-1 items-center">
                                                        <BsSignStop />
                                                        <span className="pt-1">{item.timestop} توقف</span>
                                                    </div>
                                                </div>
                                            ) :
                                                ''
                                            }

                                        </div>
                                        <div className="flex flex-col gap-y-3 justify-center">
                                            <span> <FaRegCircle size={12} /></span>
                                            <span> {item.flaglast} </span>
                                        </div>

                                    </div>


                                    <div className="flex flex-col gap-y-2 w-1/6 items-center">
                                        <span className="font-DanaDemiBold"> {item.timearrived} </span>
                                        <span> {item.destination} </span>
                                    </div>

                                </div>


                                <div className="flex flex-col gap-y-2 w-2/12 justify-center items-center">

                                    <div className="text-sm flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl w-[90px]">
                                        <LuLuggage />
                                        <span className="text-xs"> {item.carryallowed}</span>

                                    </div>

                                    <div className="text-xs flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl w-[80px]">
                                        <BsCaretLeft />
                                        <span className="text-xs"> {item.flighttype}</span>

                                    </div>
                                </div>

                            </div>



                        ))
                        }
                    </div>

                    {/* chat plan in mobile */}
                    < div className="gap-y-8 flex flex-col md:hidden" >
                        {
                            chartplan.map((item: any, index: number) => (
                                <div className="">
                                    <div className="font-DanaDemiBold mb-2 text-lg">{item.namePlane}</div>

                                    <div className="flex flex-col border-l-1 p-2">
                                        <div className="flex flex-row items-center justify-between">



                                            <div className="relative flex flex-col items-center gap-y-3">
                                                {/* Vertical Line with Circles */}
                                                <div className="absolute inset-0 flex items-center justify-center right-[-120px]">
                                                    {/* Vertical Border */}
                                                    <div className="w-px h-full bg-gray-300"></div>

                                                    {/* Top Circle */}
                                                    <div className="absolute top-0 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>

                                                    {/* Bottom Circle */}
                                                    <div className="absolute bottom-0 translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
                                                </div>

                                                {/* First Location */}
                                                <div className="flex flex-row items-center gap-x-2 ">
                                                    <div>{item.firstlocation}</div>
                                                    <div className="font-DanaDemiBold">{item.timeflight}</div>
                                                </div>

                                                {/* Arrow Icon in the Middle */}
                                                <div>
                                                    <AiOutlineArrowDown className="text-gray-500 right-[-60px] relative top-5" size={18} />
                                                </div>

                                                {/* Travel Time */}
                                                <div className="text-xs dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl relative -top-3">
                                                    {item.timetravel}
                                                </div>

                                                {item.timestop ? (
                                                <div className="text-xs dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl relative -top-3">
                                                    {item.timestop} توقف
                                                </div>
                                                ):''
                                            }

                                                {/* Destination */}
                                                <div className="flex flex-row items-center gap-x-2 ">
                                                    <div>{item.destination}</div>
                                                    <div className="font-DanaDemiBold text">{item.timearrived}</div>
                                                </div>
                                            </div>


                                            <div className="flex flex-col gap-y-2">

                                                <div className="text-xs flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl w-[80px]">
                                                    <BsCaretLeft />
                                                    <span className="text-xs"> {item.flighttype}</span>

                                                </div>
                                                <div className="text-sm flex flex-row items-center gap-x-1 dark:bg-zinc-900 bg-gray-200 px-2 py-1 rounded-xl w-[90px]">
                                                    <LuLuggage />
                                                    <span className="text-xs"> {item.carryallowed}</span>

                                                </div>
                                            </div>


                                        </div>





                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="w-[100%] mt-5 p-3 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" id="section_3">
                    
                    <div className="text-xl font-DanaDemiBold mb-3 md:mb-1">توضیحات </div>
                    <div className="text-base text-justify mb-2 leading-normal px-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.importantDescrition) }} />

                 </section>


            </div>




        </>
    );
};

export default TourItem;
