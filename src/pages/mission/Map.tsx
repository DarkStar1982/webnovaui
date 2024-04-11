import { MapContainer, TileLayer, Polygon, useMap } from 'react-leaflet';
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import missionStyles from './MissionScreen.module.css';

interface MapProps {
    lat: number;
    lng: number;
    adress: string;
}

function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}
export const Map = () => {
    const [map, setmap] = useState(null);
    if (map) {
        map.flyTo(coords);
    }
    return (
        <MapContainer center={coords} zoom={2} scrollWheelZoom={false} className={`${missionStyles.leaflet}`}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )
}

