export type ConfigureMission = {
    satellite:number;
    instrument: string;
    loc_lat:number;
    loc_lon: string;
    start_date: string;
    mission_type: string;
    description: string;
    passes: Array<Array<string>>;
};