import type { AttractionCategoriesTypeForBreadCrumbs, AttractionItemsType } from "@/type/attraction/attraction_categories"
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
const AttractionBreadCrumb = ({ breadCrumbs, item }: { breadCrumbs: AttractionCategoriesTypeForBreadCrumbs[], item: AttractionItemsType }) => {

    return (

        <div className="flex overflow-x-auto justify-start text-xs pb-2 pt-2 gap-x-2">
        
                <Link href={`${process.env.HOST_MYSEL}`}>صفحه اصلی</Link>
                <HiChevronLeft color='#ffc15b' />
                <Link href='/attractions'>جاذبه های گردشگری</Link>
                <HiChevronLeft color='#ffc15b' />
                {breadCrumbs?.map(category => (
                    <span className="flex gap-x-2" key={category.id}>
                        <Link href={`${process.env.HOST_MYSEL}/attractions/${category?.path}`}>{category?.title}</Link>
                        <HiChevronLeft color='#ffc15b' />
                    </span>
                ))}

                <span className='font-semibold'>{item?.title}</span>
            
        </div>
    )
}

export default AttractionBreadCrumb;