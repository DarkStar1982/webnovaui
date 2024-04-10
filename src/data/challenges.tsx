import snapshot from '../assets/img/webnova/img_linkedin.svg';
import airplane from '../assets/img/webnova/img_airplane_yellow_800.svg';
import containerCount from '../assets/img/webnova/img_settings.svg';
import camoObject from '../assets/img/webnova/img_unicon_icon_set_yellow_800.svg';
import changeDetect from '../assets/img/webnova/img_thumbs_up_yellow_800.svg';

export type ChallengeItems = {
    name: string;
    icon: string;
    description: string;
    id: number;
    dataType?: string;
};

export const challenges: ChallengeItems[] = [
    {
        id: 1,
        icon: snapshot,
        name: "Snapshots! (training)",
        description: "Given a location on Earth, schedule taking two photos of it using our UI/API at different times/dates",
        dataType: "RGB",
    },
    {
        id: 2,
        icon: airplane,
        name: "Find that plane!",
        description: "A plane has crashed in the area and it is imperative we find the location of the crash quickly. Compare the difference between two images before and after the event, find the crash location!",
        dataType: "RGB",
    },
    {
        id: 3,
        icon: changeDetect,
        name: "Deforestation challenge",
        description: "Given the satellite imagery of forested area, find amount of trees that has been cut down between two dates.",
        dataType: "RGB",
    },
    {
        id: 4,
        icon: containerCount,
        name: "Count the containers.",
        description: "Given the image of shipping port, estimated how many containers have left or arrived at the port there, in 20TEU units between two dates. Note that containers can be stacked on top of each other.",
        dataType: "RGB",
    },
    {
        id: 5,
        icon: camoObject,
        name: "Find a camouflaged object (Bonus)",
        description: "There is a hidden object somewhere in the area... you don't know what it is and where it is, but you it exists! Find the object, from the imagery before and after object has been present.",
        dataType: "RGB",
    }
]