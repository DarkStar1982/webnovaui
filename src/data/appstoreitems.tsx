
import wairplane from '../assets/img/webnova/icons/whitePlane.png';
import wfire from '../assets/img/webnova/icons/whiteFire.png';
import whalfandhalf from '../assets/img/webnova/icons/whiteHalfAndHalf.png';
import wlocator from '../assets/img/webnova/icons/whiteLocatorTarget.png';
import wcloud from '../assets/img/webnova/icons/whiteCloudExclamation.png';
import wship from '../assets/img/webnova/icons/whiteShip.png';
import wsignal from '../assets/img/webnova/icons/whiteSignal.png';
import wtraffic from '../assets/img/webnova/icons/whiteTrafficLight.png';

export type AppStoreItems = {
    name: string;
    icon: string;
    description: string;
    id: number;
    dataType?: string;
};

export const apps: AppStoreItems[] = [
    {
        id: 1,
        icon: wairplane,
        name: "ADS-B Monitoring",
        description: "",
        dataType: "RGB",
    },
    {
        id: 2,
        icon: wship,
        name: "AIS Monitoring",
        description: "",
        dataType: "RGB",
    },
    {
        id: 3,
        icon: wfire,
        name: "Wildfire Detection",
        description: "",
        dataType: "RGB",
    },
    {
        id: 4,
        icon: wtraffic,
        name: "Traffic Analysis",
        description: "",
        dataType: "RGB",
    },
    {
        id: 5,
        icon: wcloud,
        name: "Polution Monitoring",
        description: "",
        dataType: "RGB",
    },
    {
        id: 6,
        icon: wlocator,
        name: "Object Detection",
        description: "",
        dataType: "RGB",
    },
    {
        id: 7,
        icon: whalfandhalf,
        name: "Change Detection",
        description: "",
        dataType: "RGB",
    },
    {
        id: 8,
        icon: wsignal,
        name: "Signal Processing",
        description: "",
        dataType: "RGB",
    }
]