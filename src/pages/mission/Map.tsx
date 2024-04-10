import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { LatLng } from "leaflet";
// import { OpenStreetMapProvider } from "react-leaflet-geosearch";
// import SearchControl from "./SearchControl";
import "leaflet/dist/leaflet.css";
import missionStyles from './MissionScreen.module.css';


export const Map = () => {
    return (
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} className={`${missionStyles.leaflet}`}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )
}

