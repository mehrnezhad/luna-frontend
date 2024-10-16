'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { HotelCategoryType, HotelItemType } from "@/type/hotel/index"
import { BsQuestionCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
const FaqPageItem = ({ item }: { item: HotelCategoryType | HotelItemType}) => {
   const FaQuestion = dynamic(() => import("react-icons/fa6").then((mod) => mod.FaQuestion));

    let faqs = Array.isArray(item?.faqs) ? item.faqs : [];
    if (typeof item?.faqs === 'string') {
        try {
            faqs = JSON.parse(item.faqs);
        } catch (error) {
            console.error("Failed to parse FAQs", error);
        }
    }

    return (
        <>
        {faqs.length > 0 && faqs[0].question ? (
            <div className="w-full">
            <div className="flex justify-start items-center gap-2">
                <FaQuestion size={15} className="p-2 shrink-0 w-9 h-9 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#FFB457] to-[#FF705B]" />
                <div className="text-xl font-bold"> سوالات متداول </div>
            </div>
            
                <Accordion>
                    {faqs.map((faq, index) => (
                        <AccordionItem startContent={<BsQuestionCircleFill />} key={index} aria-label={faq.question} title={faq.question}>
                            {faq.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
               </div> 
            ) : (
                ''
            )}
        </>
    );
}

export default FaqPageItem