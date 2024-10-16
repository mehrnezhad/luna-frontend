'use client'
import type { HotelPageItemType, HotelCategoryType } from "@/type/hotel"
import React, { useState } from "react";
import { Card, CardHeader, CardFooter, Button, Input, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import dynamic from "next/dynamic";
import { MdLocationOn } from "react-icons/md";
import { IoSearch, IoStar } from "react-icons/io5";
import { useMemo } from "react";
import HotelCard from "./HotelCard";
import LoadMoreHotel from "./load-more-hotel";
import FaqPageItem from "./hotel-items-faq";
import DOMPurify from 'isomorphic-dompurify';
const HotelContainer = ({ items, slug }: { items: HotelCategoryType, slug: string }) => {

    //const IoStar = dynamic(() => import("react-icons/io5").then((mod) => mod.IoStar));

    const image = typeof items?.images === 'string' ? JSON.parse(items.images) : items.images

    const [fiterData, setFilterData] = useState(items.hotelItems || '')
    const [filterInput, setFilterInput] = useState("");
    const hasSearchFilter = Boolean(filterInput);

    const [isSelectedFive, setIsSelectedFive] = React.useState(false);
    const [isSelectedFour, setIsSelectedFour] = React.useState(false);
    const [isSelectedThree, setIsSelectedThree] = React.useState(false);
    const [isSelectedTwo, setIsSelectedTwo] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState(false);

    const [isSelectedNumberNine, setIsSelectedNumberNine] = React.useState(false);
    const [isSelectedNumberEight, setIsSelectedNumberEight] = React.useState(false);
    const [isSelectedNumberSeven, setIsSelectedNumberSeven] = React.useState(false);
    const [isSelectedNumberSix, setIsSelectedNumberSix] = React.useState(false);
    // State for region filtering
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [visibleItems, setVisibleItems] = useState(6); // Initially show 6 items

    // Extract unique regions from hotel items
    const uniqueRegions = useMemo(() => {
        const regions = fiterData.map((item) => item.region);
        return Array.from(new Set(regions)); // Remove duplicates
    }, [fiterData]);


    // Handle region checkbox changes
    const handleRegionChange = (region: string) => {
        setSelectedRegions((prev) =>
            prev.includes(region)
                ? prev.filter((r) => r !== region) // Remove if already selected
                : [...prev, region] // Add if not selected
        );

    };

    const onSearchChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e) {
            setFilterInput(e.target.value);
        } else {
            setFilterInput("");
        }
    }, [filterInput])


    const filteredItems = useMemo(() => {
        let filteredHotels = [...fiterData];

        if (hasSearchFilter) {
            filteredHotels = filteredHotels.filter((attr) =>
                attr.title.toLowerCase().includes(filterInput.toLowerCase()),
            );
        }

        const selectedStars: string[] = [];
        if (isSelectedFive) selectedStars.push('5');
        if (isSelectedFour) selectedStars.push('4');
        if (isSelectedThree) selectedStars.push('3');
        if (isSelectedTwo) selectedStars.push('2');
        if (isSelected) selectedStars.push('1');

        if (selectedStars.length > 0) {
            filteredHotels = filteredHotels.filter((hotel) =>
                selectedStars.includes(String(hotel.NumberStar))
            );
        }


        // Filter by rating score (combine selected ranges)
        const selectedRates: number[] = [];
        if (isSelectedNumberNine) selectedRates.push(9);
        if (isSelectedNumberEight) selectedRates.push(8);
        if (isSelectedNumberSeven) selectedRates.push(7);
        if (isSelectedNumberSix) selectedRates.push(6);

        if (selectedRates.length > 0) {
            filteredHotels = filteredHotels.filter((hotel) => {
                return selectedRates.some(rate => Math.floor(Number(hotel.rate)) >= rate);
            });
        }


        if (selectedRegions.length > 0) {
            filteredHotels = filteredHotels.filter((hotel) =>
                selectedRegions.includes(hotel.region)
            );
        }

        if (filteredHotels.length > 6) {
            setVisibleItems(6)
        }
        return filteredHotels;
    }, [selectedRegions, fiterData, filterInput, isSelectedFive, isSelectedFour, isSelectedThree, isSelectedTwo, isSelected, isSelectedNumberNine, isSelectedNumberEight, isSelectedNumberSeven, isSelectedNumberSix]);


    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Show 6 more items
    };

    const addLinkStyles = (html: string) => {
        const styleTag = `
            <style>
                a {
                    @apply underline;
                }
            </style>
        `;
        return styleTag + html;
    };


    return (
        <>
            <section className='dark:bg-zinc-900 bg-gray-200 min-h-screen pb-6'>
                <div className="relative bg-slate-900 w-full h-30 md:h-96">
                    <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${image[0]}`}
                        alt={items.title}
                        style={{ objectFit: 'cover' }}
                    />
                </div>


                {/* Content below the image */}
                <div className="container">


                    <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2 pt-3">
                        <Link href={`${process.env.NEXT_PUBLIC_MYSELF_ADDR}`}>صفحه اصلی</Link>
                        <HiChevronLeft />
                        <Link href='/hotel'>هتل</Link>
                        <HiChevronLeft />
                        {items.title}

                    </div>


                    <div className="flex gap-x-5">
                        <aside className="hidden md:w-1/6 text-sm md:flex md:flex-col md:gap-y-4 pt-4 mt-4 sticky top-0 h-screen overflow-y-auto border border-slate-200 shadow-sm rounded-t dark:bg-zinc-600 bg-white ">
                            <div className="flex flex-col items-center border-b-1 pb-3">
                                <Input
                                    isClearable
                                    classNames={{
                                        base: "w-full sm:max-w-[90%] dark:text-white",
                                        inputWrapper: "border-1",

                                    }}
                                    placeholder="جستجو نام هتل..."
                                    size="sm"
                                    startContent={<IoSearch className="text-default-300 dark:text-white" />}
                                    value={filterInput}
                                    variant="bordered"
                                    onClear={() => setFilterInput("")}
                                    onChange={onSearchChange}
                                />
                            </div>
                            {/*
                            درجه هتل
                            */}
                            <div className="flex flex-col border-b-1 pb-3">
                                <span className="flex justify-center items-center pb-4 font-DanaDemiBold">درجه هتل</span>
                                <div className="flex flex-col gap-y-4 pr-2">
                                    <Checkbox isSelected={isSelectedFive} onValueChange={setIsSelectedFive} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                        </div>

                                    </Checkbox>


                                    <Checkbox isSelected={isSelectedFour} onValueChange={setIsSelectedFour} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            <IoStar />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                        </div>

                                    </Checkbox>

                                    <Checkbox isSelected={isSelectedThree} onValueChange={setIsSelectedThree} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                        </div>

                                    </Checkbox>

                                    <Checkbox isSelected={isSelectedTwo} onValueChange={setIsSelectedTwo} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar className="text-yellow-500" />
                                            <IoStar className="text-yellow-500" />
                                        </div>

                                    </Checkbox>


                                    <Checkbox isSelected={isSelected} onValueChange={setIsSelected} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar className="text-yellow-500" />
                                        </div>

                                    </Checkbox>
                                </div>
                            </div>

                            {/*
                            امتیاز هتل
                            */}
                            <div className="flex flex-col border-b-1 pb-3">
                                <span className="flex justify-center items-center pb-4 font-DanaDemiBold">امتیاز هتل</span>
                                <div className="flex flex-col gap-y-4 pr-2">
                                    <Checkbox isSelected={isSelectedNumberNine} onValueChange={setIsSelectedNumberNine} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            +9 عالی
                                        </div>

                                    </Checkbox>


                                    <Checkbox isSelected={isSelectedNumberEight} onValueChange={setIsSelectedNumberEight} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            +8 خیلی خوب
                                        </div>

                                    </Checkbox>

                                    <Checkbox isSelected={isSelectedNumberSeven} onValueChange={setIsSelectedNumberSeven} className="custom-checkbox">

                                        <div className="flex gap-x-1 justify-start items-start pr-2">
                                            +7 خوب
                                        </div>

                                    </Checkbox>

                                    <Checkbox isSelected={isSelectedNumberSix} onValueChange={setIsSelectedNumberSix} className="custom-checkbox">

                                        +6 متوسط

                                    </Checkbox>


                                </div>
                            </div>

                            <div className="flex flex-col border-b-1 pb-3">
                                <span className="flex justify-center items-center pb-4 font-DanaDemiBold">
                                    مناطق
                                </span>
                                <div className="flex flex-col gap-y-4 pr-2">
                                    {uniqueRegions.map((region) => (
                                        <Checkbox
                                            key={region}
                                            isSelected={selectedRegions.includes(region)}
                                            onValueChange={() => handleRegionChange(region)}
                                            className="custom-checkbox"
                                        >
                                            {region}
                                        </Checkbox>
                                    ))}
                                </div>
                            </div>


                        </aside>
                        <main className="md:w-4/6 flex flex-1 flex-col pt-4 ">

                            {filteredItems.length !== 0 ?

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3 justify-between items-center ">

                                    {filteredItems.slice(0, visibleItems).map((child, index) =>

                                        <HotelCard key={child.id} {...child} />
                                    )}
                                </div>
                                :
                                <div className="flex justify-center items-start h-screen">
                                    هتلی با مشخصات وارد شده یافت نشد
                                </div>
                            }

                            {visibleItems < filteredItems.length && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        className="px-6 py-2 bg-blue-500 text-white rounded-md"
                                        onClick={loadMoreItems}
                                    >
                                        هتل های بیشتر
                                    </button>
                                </div>
                            )}
                        </main>

                    </div>

                    <div className="flex flex-col mt-4 p-4 border border-slate-200 shadow-sm rounded-t dark:bg-zinc-700 dark:text-white bg-white">
                        <h1 className="flex text-xl justify-center items-center font-DanaDemiBold relative before:content-[''] before:block before:h-[1px] before:w-[40%] before:bg-orange-500 before:absolute before:left-0 before:top-[50%] after:content-[''] after:block after:h-[1px] after:w-[40%] after:bg-orange-500 after:absolute after:right-0 after:top-[50%]">
                            {items.title}
                        </h1>

                        <div className="text-base text-justify mb-6 relative leading-normal" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(addLinkStyles(items.mainContent)) }} />
                      
                 
                      
                        <FaqPageItem item={items} /> 
                    </div>

                </div>



            </section>
        </>
    )
}
export default HotelContainer