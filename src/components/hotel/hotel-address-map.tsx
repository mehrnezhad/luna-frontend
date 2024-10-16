import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"
import React from "react"

const HotelAddressMap = ({ lat, lang }: { lat: string; lang: string }) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary

      const position = {
        lat: parseFloat(lat),  // Convert lat to number
        lng: parseFloat(lang), // Convert lng to number
      }

      const mapsOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
        },
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapsOptions)

      const marker = new google.maps.Marker({
        map: map,
        position: position,
      })
    }

    init()
  }, [lat, lang])

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
  )
}

export default HotelAddressMap
