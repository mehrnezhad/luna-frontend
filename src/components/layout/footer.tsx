"use client"
import React from "react";
import { HiMiniChevronUp, } from "react-icons/hi2";
import Image from "next/image"
import Link from "next/link";
import { FaMinus } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (

        <footer className='relative flex items-center  w-full bg-zinc-700 md:pb-11 pb-8'>
            <svg className="absolute top-0 left-0 right-0 mx-auto hidden md:flex w-[100px] h-[22px] text-gray-100 dark:text-zinc-900" width="100" height="22" viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 22C31 22 19 0 0 0L100 0C81.25 0 69 22 50 22Z" fill="currentColor" />
            </svg>

            <div onClick={scrollToTop} className="cursor-pointer items-center justify-center hidden md:flex border border-orange-400 rounded-full w-[30px] h-[30px] absolute top-0 right-0 left-0 mx-auto -translate-y-1/2">
                <HiMiniChevronUp size={20} />
            </div>

            <div className="container mx-auto md:flex justify-between gap-x-24 text-gray-200">

                <div className="flex-col gap-y-2 pt-8 md:w-1/3 w-full">
                    <Image
                        width={176}
                        height={32}
                        src={"/images/logo.svg"}
                        alt="Logo"
                        priority
                    />

                    <p className="text-lg mt-2 text-justify">
                        ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                    </p>
                </div>

                <div className="flex-col gap-y-2 pt-8 md:w-1/3 w-full">
                    <div className="mt-6 mb-2 text-white">دسترسی سریع</div>

                    <div className="flex flex-row md:justify-between justify-start gap-x-20 leading-10">
                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>
                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>
                    </div>
                    <div className="flex flex-row md:justify-between justify-start gap-x-20 leading-10">

                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>

                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>
                    </div>

                    <div className="flex flex-row md:justify-between justify-start gap-x-20 leading-10">
                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>

                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>
                    </div>

                    <div className="flex flex-row md:justify-between justify-start gap-x-20 leading-10">
                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>


                        <Link href="" className="flex flex-row gap-x-2 items-center hover:text-orange-500">
                            <FaMinus />
                            تور استانبول
                        </Link>

                    </div>

                </div>

                <div className="flex-col gap-y-2 pt-8 md:w-1/3 w-full">
                    <div className="mt-6 mb-2 text-white">در تماس باشیم </div>
                    
                    <div className="flex flex-row gap-x-2 mt-4 items-center">
                        <IoLocationOutline size={18} />
                        <span className="text-sm">بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</span>
                    </div>

                    <div className="md:flex md:flex-row gap-x-5 mt-6 items-center">

                        <div className="flex flex-row gap-x-1">
                            <AiOutlinePhone size={18} />
                            <Link href="+989125400848" className="text-base">09027222339</Link>
                        </div>

                        <div className="flex flex-row gap-x-1 mt-6 md:mt-0">
                            <HiOutlineMail size={18} />
                            <span className="text-sm">support[at]lunagasht.com</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-5 mt-8 items-center">

                        <Link href="#" className="flex flex-row gap-x-1 items-center justify-start px-4 text-[#FED7AA] py-1 border border-[#FED7AA] rounded-xl hover:bg-orange-300 transition-colors hover:text-[#3F3F46]">

                            <FaInstagram size={20} />
                            <span className="pt-1">
                                lunagasht@
                            </span>

                        </Link>

                        <Link href="#" className="flex flex-row gap-x-1 items-center justify-start px-4 text-[#FED7AA] py-1 border border-[#FED7AA] rounded-xl hover:bg-orange-300 transition-colors hover:text-[#3F3F46]">

                            <LiaTelegram size={20} />
                            <span className="pt-1">
                                lunagasht@
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer