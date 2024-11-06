
import type { TourCategoryType } from "@/type/tour";
import FaqPageTourCategory from "./tour-category-faq";
import DOMPurify from 'isomorphic-dompurify';

const TourCategoryMainContent = ({ item }: { item: TourCategoryType }) => {

    const items = typeof item?.contents === 'string' ? JSON.parse(item.contents) : item.contents

    const faqs = typeof item?.faqs === 'string' ? JSON.parse(item.faqs) : item.faqs

    const addLinkStyles = (html: string) => {
        const styleTag = `
            <style>
                a {
                    @apply underline;
                }
            </style>
        `;
        return styleTag + html;
    };
    return (

        <div>

            {items?.map((contentItem: { sidebar: string, content: string }, index: number) => (
                <div key={`${index}_content`} id={`section_${index + 1}`} className="text-base text-justify mb-6 relative leading-9" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(addLinkStyles(contentItem.content)) }} />

            ))}
            {faqs[0].question !== '' &&
                <div id={`section_${items?.length + 1}`} className="text-2xl mb-4 relative">
                    <div className="text-base md:text-xl mb-4 mt-8 font-DanaDemiBold">سوالات متداول</div>
                    <span className="block w-[230px] md:h-0.5 h-0.25 bg-orange-300"></span>
                </div>
            }

            <FaqPageTourCategory item={item} />
        </div>

    );
};

export default TourCategoryMainContent;
