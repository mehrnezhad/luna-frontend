'use client'
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "@nextui-org/react";
import * as actions from '@/actions'
import HotelCard from "./HotelCard";
import React from "react";
import { HotelItemType } from "@/type/hotel";
const LoadMoreHotel = ({ slug }: { slug: string }) => {


    const [hotelItem, setHotelItem] = useState<HotelItemType[]>([])
    const [skip, setSkip] = useState(0)
    const [loading, setLoading] = useState(true)
    const { ref, inView } = useInView()

    const loadMore = async () => {

        const nextSkip = skip + 6;
        try {

            const newData = await actions.getAllItemsHotelWitCatSlug(slug)

      
            if (newData?.hotelItems.length === 0) {
                setLoading(true)
                return
            } else {
                setLoading(true)
            }

            setSkip(nextSkip)
            setHotelItem((prevState: HotelItemType[]) => [...prevState, ...newData?.hotelItems])

        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
        if (inView) {

            loadMore()

         
        }

    }, [inView])

    console.log(hotelItem)
    return (
        <>
        
            {hotelItem?.length !== 0 ?
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 pt-5">

                        {hotelItem?.map((child, index) =>

                            <HotelCard key={child.id} {...child} />
                        )}
                    </div>

                    <div
                        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" ref={ref}>
                        {loading ? <Spinner /> : null}
                    </div>
                </div>
                :
                <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" ref={ref}>
                {loading ? <Spinner /> : null}
            </div>
            }

        </>
    )
}

export default LoadMoreHotel