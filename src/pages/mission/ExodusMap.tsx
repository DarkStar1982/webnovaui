import { MapContainer, TileLayer, useMap, useMapEvents, Rectangle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import missionStyles from './MissionScreen.module.css';

interface MapProps {
    lat: number;
    lng: number;
    adress?: string;
    zoom?: number;
}

export const LocationMarker = ({ lat, lng, adress }: MapProps) => {
    const map = useMapEvents({
        locationfound(e) {
            map.setView([lat, lng], map.getZoom());
        },
    });

    return (
        <>
        </>
    )
}
export const ExodusMap = ({ lat, lng, zoom, adress}: MapProps) => {
    return (
        <MapContainer 
            center={[lat, lng]} 
            zoom={zoom}
            zoomControl={false} 
            scrollWheelZoom={true} 
            className={`${missionStyles.leaflet}`}
            key={Math.random()}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Rectangle bounds={[[lat - 0.2, lng - 0.5], [lat + 0.2, lng + 0.5]]} />
            <LocationMarker lat={lat} lng={lng} zoom={zoom} />
        </MapContainer>
    )
}

