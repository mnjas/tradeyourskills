import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"

// COMPONENT CONTAINING LEAFLET LOGIC FOR DISPLAYING THE MAP

export default function DynamicMap({ latitude, longitude }) {
  const pinIcon = new Icon({
    iconUrl: "/assets/icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", marginBottom: "50px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" aria-label="Carte de Boulogne-Billancourt"></a>'
      />
      <Marker position={[latitude, longitude]} icon={pinIcon}>
        <Popup>162 Rue de Billancourt, 92100 Boulogne-Billancourt</Popup>
      </Marker>
    </MapContainer>
  )
}
