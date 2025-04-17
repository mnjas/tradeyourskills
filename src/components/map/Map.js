"use client"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

// load dynamicMap component dynamic whitout SSR
const DynamicMap = dynamic(() => import("../dynamicMap/DynamicMap"), { ssr: false })

export default function Map({ latitude, longitude }) {
  return (
    <div>
      <DynamicMap latitude={latitude} longitude={longitude} />
    </div>
  )
}
