import { GoogleMap, useJsApiLoader, Marker, OverlayView } from '@react-google-maps/api';
import { useState, useCallback } from 'react';
import type { VehicleLocation } from "../../types/vehicle";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -23.550520,
    lng: -46.633308
};

const mapOptions = {
    styles: [
        { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a8ebff" }] },
        { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#f1f4f5" }] },
        { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#f1f4f5" }] },
        { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#d9ead3" }] },
        { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] },
        { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#cbd5e0" }] },
        { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] },
        { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] },
        { "elementType": "labels.text.fill", "stylers": [{ "color": "#4a5568" }] },
        { "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "weight": 2 }] },
        { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": 50 }] }
    ],
    disableDefaultUI: true,
    zoomControl: true,
};

interface VehicleMapProps {
    locations: VehicleLocation[];
}

export function VehicleMap({ locations }: VehicleMapProps) {
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleLocation | null>(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
    });

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds();
        if (locations.length > 0) {
            let hasValidBounds = false;
            locations.forEach(loc => {
                if (typeof loc.lat === 'number' && typeof loc.lng === 'number' && !isNaN(loc.lat) && !isNaN(loc.lng)) {
                    bounds.extend({ lat: loc.lat, lng: loc.lng });
                    hasValidBounds = true;
                }
            });
            if (hasValidBounds) {
                map.fitBounds(bounds);
            }
        }
    }, [locations]);

    if (!isLoaded) return <div className="h-full w-full bg-[#001E2E] animate-pulse rounded-lg" />;

    return (
        <div className="rounded-lg overflow-hidden h-full w-full relative">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                options={mapOptions}
            >
                {locations.filter(loc => loc && !isNaN(loc.lat) && !isNaN(loc.lng)).map((loc, index) => {
                    const colors = ['#0ea5e9', '#22c55e', '#f97316', '#eab308'];
                    const color = colors[index % colors.length];

                    return (
                        <Marker
                            key={loc.id}
                            position={{ lat: loc.lat, lng: loc.lng }}
                            onClick={() => setSelectedVehicle(loc)}
                            icon={{
                                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                                    <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C8.95 0 0 8.95 0 20C0 35 20 50 20 50C20 50 40 35 40 20C40 8.95 31.05 0 20 0Z" fill="${color}" stroke="white" stroke-width="2"/>
                                        <circle cx="20" cy="20" r="14" fill="${color}"/>
                                        <path d="M26 21H24V17H16V23H14M26 21L28 23V25H26M26 21V25H14V17H12V25H14M16 25V26C16 26.5523 16.4477 27 17 27C17.5523 27 18 26.5523 18 26V25M22 25V26C22 26.5523 22.4477 27 23 27C23.5523 27 24 26.5523 24 26V25M16 19H18M16 21H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                `)}`,
                                scaledSize: new window.google.maps.Size(32, 40),
                                anchor: new window.google.maps.Point(16, 40)
                            }}
                        />
                    );
                })}

                {selectedVehicle && (
                    <OverlayView
                        position={{ lat: selectedVehicle.lat, lng: selectedVehicle.lng }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-[calc(100%+50px)] animate-in fade-in zoom-in duration-200">
                            <div className="bg-[#001622] text-white p-4 rounded-xl shadow-2xl border border-gray-800 min-w-[200px] relative">
                                <button
                                    onClick={() => setSelectedVehicle(null)}
                                    className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 1L13 13M1 13L13 1" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <div className="flex flex-col items-center text-center space-y-1 mt-1">
                                    <h4 className="text-xs text-gray-300 font-bold uppercase tracking-wider">Placa {selectedVehicle.plate}</h4>
                                    <p className="text-[11px] text-gray-400 font-medium">Frota {selectedVehicle.fleet || '-'}</p>
                                    <p className="text-[11px] text-gray-400 pt-1">
                                        {new Date(selectedVehicle.updatedAt || selectedVehicle.createdAt!).toLocaleString('pt-BR', {
                                            day: '2-digit', month: '2-digit', year: 'numeric',
                                            hour: '2-digit', minute: '2-digit'
                                        }).replace(',', ' -')}
                                    </p>
                                    <p className="text-[11px] text-cyan-400 font-mono font-bold mt-2">
                                        {selectedVehicle.lat.toFixed(6)}, {selectedVehicle.lng.toFixed(6)}
                                    </p>
                                </div>

                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#001622]"></div>
                            </div>
                        </div>
                    </OverlayView>
                )}
            </GoogleMap>
        </div>
    );
}
