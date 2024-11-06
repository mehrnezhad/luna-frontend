'use client'
import Link from "next/link"
import { HiChevronDoubleLeft } from "react-icons/hi";
import type { TourCategoryType } from "@/type/tour"
import React from "react";
const TourCategoryRightMenu = ({ item }: { item: TourCategoryType }) => {

    
    const items = typeof item?.contents === 'string' ? JSON.parse(item.contents) : item.contents

    const faqs = typeof item?.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs


    return (
        <>
              
                <nav className="p-4">
                    <ul>


                        {items.map((rightmenu : {sidebar: string , contents: string}, index : number) => (
                            <li key={index} className="mb-4 flex items-start gap-x-2 text-amber-800">
                                <HiChevronDoubleLeft className='shrink-0 pt-1  dark:text-yellow-500' />
                                <Link href={`#section_${index + 1}`} className="hover:font-bold text-slate-900 hover:transition-opacity dark:text-white">{rightmenu.sidebar}</Link>
                            </li>
                        ))}

                        {faqs[0].question != '' ?
                            <li key='faq' className="mb-4 flex items-start gap-x-2 text-amber-800">
                                <HiChevronDoubleLeft className='shrink-0 pt-1 dark:text-yellow-500' />
                                <Link href={`#section_${items?.length + 1}`} className="text-slate-900 hover:transition-opacity dark:text-white">سوالات متداول</Link>
                            </li>
                            :
                            ''
                        }

                    </ul>
                </nav>

        
        </>
    )
}



export default TourCategoryRightMenu