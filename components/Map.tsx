"use client"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { PropsMap } from "@/utils/types.dev"

<<<<<<< HEAD:app/components/Map.tsx
export default function MyMap({ position, zoom }: PropsMap) {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Pinar del Río. <br /> Cuba
        </Popup>
      </Marker>
    </MapContainer>
  )
}
=======


export default function MyMap(props: any) {
  const { position, zoom } = props

  return <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Pinar del Río. <br /> Cuba
      </Popup>
    </Marker>
  </MapContainer>
}
>>>>>>> mmllamazares:components/Map.tsx
