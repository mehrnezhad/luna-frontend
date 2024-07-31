'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { AttractionItemsType } from "@/type/attraction/attraction_categories"
import { BsQuestionCircleFill } from "react-icons/bs";
const FaqPageItem = ({ item }: { item: AttractionItemsType }) => {


    return (
        <>
            { item?.faqs[0].question != '' ?
                <Accordion>
                    {item?.faqs.map((faq, index) => (
                        <AccordionItem startContent={<BsQuestionCircleFill />} key={index} aria-label={faq.question} title={faq.question}>
                            {faq.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
                : ''
            }
        </>
    );
}

export default FaqPageItem