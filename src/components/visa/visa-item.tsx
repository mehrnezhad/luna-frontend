'use client'
import type { VisaCategoryType } from "@/type/visa/visa_category"
import Image from "next/image"
import { MdOutlineMoreTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiInformation2Line } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DOMPurify from 'isomorphic-dompurify';
import React from "react";
const VisaItem = ({ visa }: { visa: VisaCategoryType }) => {
    visa.price_box = typeof visa.price_box === 'string' ? JSON.parse(visa.price_box) : visa.price_box
    visa.passport_requirement = typeof visa.passport_requirement === 'string' ? JSON.parse(visa.passport_requirement) : visa.passport_requirement
    visa.faqs = typeof visa.faqs === 'string' ? JSON.parse(visa.faqs) : visa.faqs

    return (
        <>
            <div className="flex flex-row items-center justify-start">
                <div className="flex gap-2 items-center justify-start">

                    {visa.logo ?
                        <Image
                            alt={visa.title}
                            className="w-16 md:w-[90px]"
                            src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${visa?.logo}`}
                            width={90}
                            height={65}
                        />
                        :
                        ''
                    }
                    <h1 className="text-lg md:text-3xl font-DanaDemiBold">{visa.title}</h1>
                </div>

            </div>
            <div className="flex gap-5 mt-3">
                <div className="flex flex-col gap-y-5 w-full dark:text-white">


                    <div className="flex gap-5 w-full">
                        <div className="w-1/2 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                            <div className="flex flex-col items-center gap-4 py-5">
                                <MdOutlineMoreTime size={35} />
                                <div className="text-base font-bold">اعتبار ویزا پس از صدور:</div>
                                <div className="text-base ">{visa.validity}</div>
                            </div>

                        </div>
                        <div className="w-1/2 border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                            <div className="flex flex-col items-center gap-4 py-5">
                                <SlCalender size={35} />
                                <div className="text-base font-bold">زمان اخذ ويزا :</div>
                                <div className="text-base ">{visa.process_time}</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 text-justify border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(visa?.top_content) }}>
                    </div>

                    <div className="flex justify-start items-center gap-2">
                        <IoPricetagsOutline size={15} className="p-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#FFB457] to-[#FF705B]"/>
                        <div className="text-xl font-bold">قیمت  {visa.title}</div>
                    </div>

                    <div className="p-5 flex flex-col text-justify border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                        <div className="mb-5 font-DanaDemiBold">{visa.price_box.label}</div>

                        <div className="flex flex-col">
                            {visa.price_box.type?.map((item, index) =>
                                <div
                                    key={index}
                                    className={`flex flex-row w-full p-3 ${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-zinc-700'}`}
                                >
                                    <div className="flex gap-2 w-1/2 items-center">
                                        <RiInformation2Line />
                                        <div className="">{item.label}</div>
                                    </div>
                                    <div className="flex w-1/2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.value) }}></div>
                            
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-2">

                        <TbChecklist size={20} className="p-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#FFB457] to-[#FF705B]"/>
                        <div className="text-xl font-bold"> مدارک مورد نیاز  {visa.title} </div>
                    </div>
                    <div className="p-5 flex flex-col gap-y-8 text-justify border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                        {visa.passport_requirement.map(item =>

                            <div className="flex flex-col ">
                                <div className="flex gap-x-5 items-center justify-start">
                                    <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#ececec] to-[#f0f0f0]"> <FaCheck size={15} /></div>
                                    <div className="flex flex-col gap-y-2">
                                        <div className="">{item.title}</div>
                                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description) }}></div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(visa?.main_content) }} className="p-5 text-justify border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700 bg-white">
                    </div>

                    <div className="flex justify-start items-center gap-2">
                        <FaQuestion size={15} className="p-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#FFB457] to-[#FF705B]" />
                        <div className="text-xl font-bold"> سوالات متداول </div>
                    </div>
                    <Accordion variant="splitted" className="px-0">
                        {visa?.faqs.map((item, index) =>
                            <AccordionItem  className="dark:bg-zinc-700" key={index} aria-label={item.question} title={item.question}>
                                {item.answer}
                            </AccordionItem>
                        )}
                    </Accordion>

                </div>

       </div>
        </>
    )
}
export default VisaItem