import Link from 'next/link';
import { HiChevronLeft } from 'react-icons/hi';
import type { AttractionCategoriesType } from "@/type/attraction/attraction_categories";
import React from 'react';
// Recursive component to render attraction and its children
const AttractionItemMenu = ({ attraction, parentSlug = '' }: { attraction: AttractionCategoriesType, parentSlug: string }) => {
    const currentSlug = parentSlug ? `${parentSlug}/${attraction.slug}` : attraction.slug;
    return (
        <>
            {attraction.childrens && attraction.childrens.map(child => (
                <React.Fragment key={child.id}>
                    <div className="flex flex-row items-center lg:text-lg">
                        <HiChevronLeft />
                        <Link href={`/attractions/${currentSlug}/${child.slug}`} className="hover:text-orange-400">
                            {child.title}
                        </Link>
                    </div>
                    <div className='pr-2'>
                        {child.childrens && <AttractionItemMenu attraction={child} parentSlug={currentSlug} />}
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default AttractionItemMenu;
