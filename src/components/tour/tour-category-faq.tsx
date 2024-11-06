'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { TourCategoryType } from "@/type/tour"
import { BsQuestionCircleFill } from "react-icons/bs";
const FaqPageTourCategory = ({ item }: { item: TourCategoryType }) => {

    const faqs = typeof item?.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs

    return (
        <>
            {faqs[0].question != '' ?
                <Accordion>
                    {faqs.map((faq:{question: string , answer: string}, index: number) => (
                        <AccordionItem startContent={<BsQuestionCircleFill />} key={index} aria-label={faq.question} title={<span className="text-sm md:text-base">{faq.question}</span>} >
                           <span className="text-sm md:text-base">{faq.answer}</span> 
                        </AccordionItem>
                    ))}
                </Accordion>
                : ''
            }
        </>
    );
}

export default FaqPageTourCategory