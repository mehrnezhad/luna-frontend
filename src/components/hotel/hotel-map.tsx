'use client'
import { Library } from "@googlemaps/js-api-loader"
import { useJsApiLoader } from "@react-google-maps/api"
import React, { useEffect, useRef, useState } from "react"

const libs: Library[] = ["places", "geometry", "drawing", "visualization"]

const HotelMap = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: libs
    })

    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const mapOptions = {
                center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
                zoom: 12
            }
            const mapInstance = new google.maps.Map(mapRef.current, mapOptions)
            setMap(mapInstance)
        }
    }, [isLoaded])

    if (loadError) {
        return <div>Error loading map</div>
    }

    return (
        <div className="flex flex-col">
            {isLoaded ? (
                <div
                    ref={mapRef}
                    style={{ height: "500px", width: "100%" }} // Ensure width is set as well
                ></div>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    )
}

export default HotelMap
