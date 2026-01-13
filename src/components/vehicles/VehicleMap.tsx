import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { VehicleLocation } from "../../types/vehicle";
import "leaflet/dist/leaflet.css";

// Fix for default leaflet marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface VehicleMapProps {
    locations: VehicleLocation[];
}

export function VehicleMap({ locations }: VehicleMapProps) {
    const defaultCenter: [number, number] = [-23.550520, -46.633308]; // Sao Paulo

    return (
        <div className="rounded-lg overflow-hidden border border-gray-800 h-[400px] w-full relative z-0">
            {/* z-0 importance for leaflet z-indexing issues with sidebar */}
            <MapContainer
                center={defaultCenter}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                {locations.filter(loc =>
                    loc &&
                    typeof loc.latitude === 'number' &&
                    typeof loc.longitude === 'number' &&
                    !isNaN(loc.latitude) &&
                    !isNaN(loc.longitude)
                ).map((loc) => (
                    <Marker
                        key={loc.id}
                        position={[loc.latitude, loc.longitude]}
                    >
                        <Popup>
                            <div className="text-gray-900">
                                <strong>{loc.plate}</strong><br />
                                Lat: {loc.latitude}<br />
                                Lng: {loc.longitude}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
