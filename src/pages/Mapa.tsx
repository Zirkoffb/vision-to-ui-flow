import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// MapContent component to isolate leaflet context
function MapContent({ position }: { position: [number, number] }) {
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          São Paulo - Localização atual
        </Popup>
      </Marker>
    </>
  );
}

export default function Mapa() {
  const position: [number, number] = [-23.5505, -46.6333]; // São Paulo coordinates

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold font-urbanist text-slate-800">Mapa</h1>
      
      <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg border border-slate-200">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg"
        >
          <MapContent position={position} />
        </MapContainer>
      </div>
    </div>
  );
}