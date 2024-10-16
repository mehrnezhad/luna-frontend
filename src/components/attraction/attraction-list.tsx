import type { AttractionItemsType } from "@/type/attraction/attraction_categories"
import AttractionCard from "@/components/attraction/attraction-card";
import LoadMore from './load-more';
import React from "react";
const AttractionList = async ({ items, slugProps }: { items: AttractionItemsType[], slugProps: string }) => {

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">

                {items.map(item => (
                    <AttractionCard key={item.id} {...item} />
                ))}

            </div>

            {/* <LoadMore slugProps={slugProps} /> */}

        </>


    )
}

export default AttractionList