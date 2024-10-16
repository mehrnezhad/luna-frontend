'use client'
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi2"
import React from "react"
const VisaBreadCrumb = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex flex-wrap justify-start items-center text-sm md:text-base pb-2 gap-x-2">
                <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
                <HiChevronLeft />
                <Link href='/visa'>ویزا</Link>
                <HiChevronLeft />
                  {title} 
            </div>
        </>
    )
}
export default VisaBreadCrumb