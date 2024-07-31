import Link from "next/link"
import { HiChevronDoubleLeft } from "react-icons/hi";
import type { AttractionItemsType } from "@/type/attraction/attraction_categories"
const AttractionRightMenu = async ({ item }: { item: AttractionItemsType }) => {
    return (
        <>
                <span className="text-xl mb-4">دسترسی سریع</span>
                <nav>
                    <ul>


                        {item?.contents.map((rightmenu, index) => (
                            <li key={index} className="mb-4 flex items-start gap-x-2 text-amber-800">
                                <HiChevronDoubleLeft className='shrink-0 pt-1  dark:text-yellow-500' />
                                <Link href={`#section_${index + 1}`} className="hover:font-bold text-slate-900 hover:transition-opacity dark:text-white">{rightmenu.sidebar}</Link>
                            </li>
                        ))}

                        {item?.faqs[0].question != '' ?
                            <li key='faq' className="mb-4 flex items-start gap-x-2 text-amber-800">
                                <HiChevronDoubleLeft className='shrink-0 pt-1 dark:text-yellow-500' />
                                <Link href={`#section_${item?.contents?.length + 1}`} className="text-slate-900 hover:transition-opacity dark:text-white">سوالات متداول</Link>
                            </li>
                            :
                            ''
                        }

                    </ul>
                </nav>

        
        </>
    )
}



export default AttractionRightMenu