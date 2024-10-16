'use client'
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "@nextui-org/react";
import * as actions from '@/actions'
import type { AttractionItemsType } from "@/type/attraction/attraction_categories"
import AttractionCard from "./attraction-card";
import React from "react";
const LoadMore =({ slugProps }: { slugProps: string }) => {
    
    const [attracions, setAttractions] = useState<AttractionItemsType[]>([])
    const [skip, setSkip] = useState(0)
    const [loading, setLoading] = useState(true)
    const { ref, inView } = useInView()
    const loadMore = async () => {
      
        let lastElement = slugProps.slice(-1);
        const nextSkip = skip + 12;
        try {
         //   if(!loading) return

            const newData = await actions.getItemsAttractions(lastElement, nextSkip, 12)
          
            if(newData?.attractionItems.length === 0)  {
            setLoading(false) 
            return 
            }else{
                setLoading(true)
            }  

            setSkip(nextSkip)
            setAttractions((prevState: AttractionItemsType[]) => [...prevState, ...newData?.attractionItems])

        } catch (error) {
             console.log('error')
        } 
    }

    useEffect(() => {
       if (inView) {
    
           loadMore()

       }
    
    }, [inView])


    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 pt-5">
                {attracions.map(item => (
                    <AttractionCard key={item.id} {...item} />
                ))}
            </div>

            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" ref={ref}>
               {loading ? <Spinner /> : null}
            </div>
        </>
    )
}

export default LoadMore