'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import React from "react";
import SubMenu from "./subMenu";
import { ThemeSwitcher } from "./themeSwitcher"
import { ThemeSwitcherMobile } from "./themeSwitcherMobile";
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineHome, HiOutlineShoppingBag, HiMiniChevronDown, HiArrowLeftOnRectangle, HiBars3, HiXMark, HiOutlineDocumentText, HiOutlineBriefcase } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhoneOutgoing } from "react-icons/fi";
import Cart from "./cart";
import type { AttractionCategoriesType } from "@/type/attraction/attraction_categories";
import { HiChevronLeft } from "react-icons/hi";
import AttractionsCategoryListMenu from "@/components/attraction/attraction-category-list-mernu"
import { BsDot } from "react-icons/bs";
interface CategoryAttrListProps {
    categoriesAttr: AttractionCategoriesType[];
}

const Header = ({ categoriesAttr }: CategoryAttrListProps) => {

    const [menuIcon, setMenuIcon] = useState(false)
    const [subMenu, setSubMenu] = useState<string | null>(null)

    const handleSubMenu = (e: string) => {
        setSubMenu(subMenu === e ? null : e);
    }
    const handleMenuScreenResizer = () => {
        setMenuIcon(!menuIcon)
    }

    return (
        <>

            {/* Header desktop */}
            <header className='hidden absolute top-9 right-0 left-0 z-20 md:flex items-center w-[95%] xl:w-[90%] h-20 mx-auto bg-black/50 rounded-3xl px-3 lg:px-10 py-3 backdrop-blur-[6px]'>

                <div className='relative flex justify-between items-center w-screen'>

                    {/* nav & logo */}
                    <nav className='flex gap-x-3 lg:gap-x-9 h-14 items-center justify-between w-full'>

                        <div className="relative flex justify-start w-full items-center text-white drop-shadow-md">

                            <div className="flex items-center justify-between w-full">

                                <div className="flex items-center lg:gap-x-4 lg:text-lg md:gap-x-2 md:text-base text-gray-300 text-xl tracking-tightest h-full child:leading-[56px]">
                                    <div>
                                        <Image
                                            src="/images/app-logo.png"
                                            alt="لوگو سایت"
                                            width={52}
                                            height={56}
                                        />
                                    </div>

                                    <Link href="/" className="hover:text-orange-200">صفحه اصلی</Link>
                                    <div className="group">

                                        <div className='flex items-center justify-between'>
                                            <Link href="/tour" className="group-hover:text-orange-300 transition-colors">
                                                تورها
                                            </Link>

                                        </div>

                                    </div>

                                    <div className="group">

                                        <div className='flex items-center justify-between'>
                                            <Link href="/hotel" className="group-hover:text-orange-300 transition-colors">
                                                هتل ها
                                            </Link>

                                            {/* <div>
                                                <HiMiniChevronDown size={20} />
                                            </div> */}

                                        </div>

                                        {/* <div className="hidden group-hover:flex flex-col absolute left-0 right-0 p-10 w-full shadow-normal transition-all child:tracking-normal child:transition-colors overflow-x-hidden delay-75 rounded-2xl text-zinc-700 dark:text-white text-base bg-white dark:bg-zinc-700">

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="group">

                                        <div className='flex items-center justify-between'>
                                            <Link href="/visa" className="group-hover:text-orange-300 transition-colors tracking-wide">
                                                ویزا
                                            </Link>

                                           

                                        </div>

                         
                                    </div>
                                    <div className="group">

                                        <div className='flex items-center justify-between'>
                                            <Link href="#" className="group-hover:text-orange-300 transition-colors">
                                                جاذبه های گردشگری
                                            </Link>

                                            <div>
                                                <HiMiniChevronDown size={20} />
                                            </div>

                                        </div>

                                        <div className="hidden group-hover:flex flex-col absolute left-0 right-0 p-5 w-full shadow-normal transition-all child:tracking-normal child:transition-colors overflow-x-hidden delay-75 rounded-2xl text-zinc-700 dark:text-white text-base bg-white dark:bg-zinc-700">

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                                                <AttractionsCategoryListMenu categoriesAttr={categoriesAttr} />

                                                {/* 
                                                {categoriesAttr?.map(attraction => (

                                                    <div className="flex flex-col gap-2 lg:gap-1" key={attraction.id}>
                                                        <div className="flex flex-col items-start mb-3">
                            
                                                            <h3 className="mb-2 text-xl lg:text-lg">
                                                                {attraction.title}
                                                            </h3>
                                                            <span className="block w-[130px] md:h-0.5 h-0.25 bg-orange-300"></span>
                                                     
                                                        </div>
                                                        {attraction.childrens.map(child => (
                                                            <div key={child.id} className="flex flex-row items-center lg:text-lg">
                                                                <HiChevronLeft />
                                                                <Link href={`/attractions/${attraction.slug}/${child.slug}`} className="hover:text-orange-400">{child.title}</Link>
                                                            </div>
                                                        ))}

                                                    </div>
                                                ))} */}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* cart & toggle & login */}
                                <div className='flex text-orange-200 items-center'>

                                    {/* cart & login*/}
                                    <div className='flex gap-x-5 items-center'>
                                        <Cart />
                                        <ThemeSwitcher />

                                    </div>
                                    <span className='block w-px bg-white/20 h-14 mx-5 lg:mx-10'></span>

                                    {/* login */}
                                    <div className='flex text-xl gap-x-2.5 items-center tracking-tightest'>
                                        <div className='rotate-180'>
                                            <HiArrowLeftOnRectangle size={'32px'} />
                                        </div>
                                        {/* {
                                            user ?
                                                (
                                                    user
                                                )
                                                :
                                                (
                                                    <Link className="hidden lg:inline-block" href="/login">ورود | ثبت‌ نام</Link>

                                                )
                                        } */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </nav>


                </div >
            </header>

            {/* Header Mobile */}
            <div className='flex md:hidden items-center justify-between bg-white dark:bg-zinc-700 h-14 px-4'>
                {/* Menu bars */}
                <div onClick={handleMenuScreenResizer}>
                    <div className='text-zinc-700 dark:text-white'>
                        <HiBars3 size={24} />
                    </div>
                </div>


                <div className={
                    menuIcon ?
                        'fixed md:hidden top-0 right-0 w-64 min-h-screen bg-white dark:bg-zinc-700 z-20 px-4 ease-in duration-500'
                        :
                        'fixed md:hidden top-0 right-[-100%] w-64 min-h-screen bg-white dark:bg-zinc-700 z-20 px-4 ease-in duration-500'
                }>

                    {/* Nav Header */}

                    <div className='flex items-center justify-between pt-3 border-b border-b-gray-100 dark:border-b-white/10 pb-4 mb-4'>
                        <div className='flex items-center gap-x-2'>
                            <svg className='h-10 w-[41px] text-orange-300'>
                                <use href="#logo"></use>
                            </svg>
                            <svg className='h-10 w-[100px] text-orange-300'>
                                <use href="#logo-type"></use>
                            </svg>
                        </div>
                        <div onClick={handleMenuScreenResizer}>
                            <div className='text-zinc-600 dark:text-white'>
                                <HiXMark size={20} />
                            </div>
                        </div>
                    </div>


                    {/* Nav Body */}
                    <div>
                        <ul className='flex flex-col gap-y-4  text-zinc-700 dark:text-white child-hover:text-orange-300 child-hover:bg-orange-200/20 child-hover:rounded-lg my-4'>
                            <li >
                                <Link href="/" className='flex items-center gap-x-2 py-5 h-4 px-2.5'>
                                    <HiOutlineHome size={20} />
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li className='px-2.5' onClick={() => handleSubMenu("1")}>
                                <div className='flex items-center justify-between'>
                                    <Link href="#" className='flex items-center gap-x-2 py-2.5'>

                                        <HiOutlineShoppingBag size={20} />
                                        فروشگاه
                                    </Link>

                                    <div>
                                        <HiMiniChevronDown size={20} />
                                    </div>

                                </div>
                                {subMenu === "1" && (
                                    <SubMenu key='1' />
                                )}
                            </li>
                            <li>
                                <Link href="/tour" className='flex items-center gap-x-2 py-5 h-4 px-2.5'>
                                    <HiOutlineChatBubbleLeftEllipsis size={20} />
                                    تورها
                                </Link>
                            </li>
                            <li className='px-2.5' onClick={() => handleSubMenu("2")}>
                                <div className='flex items-center justify-between'>
                                    <Link href="#" className='flex items-center gap-x-2 py-2.5'>

                                        <svg className='w-5 h-5'>
                                            <use href='#shopping-bag'></use>
                                        </svg>
                                        2  فروشگاه
                                    </Link>

                                    <div>
                                        <svg className='w-5 h-5' >
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </div>

                                </div>
                                {subMenu === "2" && (
                                    <SubMenu key='2' />
                                )}
                            </li>

                            <li>
                                <Link href="/hotel" className='flex items-center gap-x-2 py-5 h-4 px-2.5'>
                                    <HiOutlineBriefcase size={20} />
                                    هتل ها
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className='flex items-center gap-x-2 py-5 h-4 px-2.5'>
                                    <HiOutlineDocumentText size={20} />
                                    جاذبه های گردشگری
                                </Link>
                            </li>


                            <li>
                                <Link href="/visa" className='flex items-center gap-x-2 py-5 h-4 px-2.5'>
                                    <FiPhoneOutgoing size={20} />
                                     ویزا 
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Nav Footer */}
                    <div className='flex flex-col gap-6 items-start border-t border-t-gray-100 dark:border-t-white/10 px-3 py-8'>
                        <Link href="/login" className='flex items-center gap-x-2 text-orange-400 dark:text-orange-300'>
                            <HiArrowLeftOnRectangle size={20} />
                            ورود | ثبت‌نام
                        </Link>

                        <ThemeSwitcherMobile />

                        <Link href="#" className='inline-flex items-center gap-x-2 text-orange-400 dark:text-orange-300 text-base'>

                            <AiOutlineShoppingCart size={20} />
                            سبد خرید
                        </Link>
                    </div>


                </div>

                {/* Icon */}
                <div>
                    <svg className='w-[100px] h-10 text-orange-300'>
                        <use href="#logo-type" className='w-6 h-6'></use>
                    </svg>
                </div>

                {/* Shopping-Card */}
                <div>
                    <div className=' text-zinc-700 dark:text-white'>
                        <AiOutlineShoppingCart size={24} />
                    </div>
                </div>

            </div>
            {/* <div className={menuIcon ? 'md:hidden bg-black/40 fixed inset-0 w-full h-full z-10 transition delay-7000 duration-300 ease-in-out' : 'hidden'}></div> */}


        </>
    )
}
export default Header