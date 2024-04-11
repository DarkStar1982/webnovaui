/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Col, Row, Form, Table, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Map } from './Map';
import { challenges } from 'data/challenges';
import { hours } from 'data/hours';
import "leaflet/dist/leaflet.css";
import missionStyles from './MissionScreen.module.css';


interface Geo {
    address: string;
    lat: number;
    lng: number;
}
const Mission = () => {

    const location = useLocation();
    const { pathname } = location;
    const initialized = useRef(false);
    const selectedSatellite = useRef("SATELLITE");
    const selectedInstrument = useRef("SENSOR");
    const noradId = useRef(0);
    const instrumentId = useRef(0);

    const startDateSelected = useRef('START DATE');
    const endDateSelected = useRef('END DATE');
    const startHourSelected = useRef('START TIME');
    const endHourSelected = useRef('END TIME');

    const [satellites, setSatelliteList] = useState([]);
    const [instruments, setInstrumentList] = useState([]);

    const [theInstrument, setTheInstrument] = useState("SENSOR");

    const [startDate, setStartDate] = useState('START DATE');
    const [endDate, setEndDate] = useState('END DATE');

    const [startHour, setStartHour] = useState('START TIME');
    const [endHour, setEndHour] = useState('END TIME');

    const [lat, setLat] = useState(-79.6);
    const [lng, setLng] = useState(43.7);
    const [locationName, setLocationName] = useState("Toronto");

    const [coordinates, setCoordinates] = useState([]);
    const [geoResults, setGeoResults] = useState(Array<any>);

    const id = pathname.substring(pathname.lastIndexOf('/') + 1)
    const challenge = challenges[Number(id)]

    const getDefaultDate = () => {
        const today = new Date();

        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let d = dd.toString();
        let m = mm.toString();
        if (dd < 10) {
            d = '0' + dd;
        }
        if (mm < 10) {
            m = '0' + mm;
        }

        const defaultDate = today.getFullYear() + "-" + m + "-" + d;
        return defaultDate;
    }

    const fetchSats = async () => {
        const satData = await fetch(process.env.REACT_APP_API_URL + 'satellites');
        const satDataJson = await satData.json();
        setSatelliteList(satDataJson);
    }

    const fetchInstruments = async (noradId: number) => {
        const satData = await fetch(process.env.REACT_APP_API_URL + 'instruments?norad_id=' + noradId);
        const satDataJson = await satData.json();
        setInstrumentList(satDataJson[0].instruments);
    }

    const fetchTimesOnTarget = async () => {
        const satData = await fetch(process.env.REACT_APP_API_URL +
            'times_on_target?norad_id=' + noradId.current +
            '&instrument_id=' + instrumentId.current +
            '&net=' + startDateSelected.current +
            '&nlt=' + endDateSelected.current +
            '&lat=' + lat +
            '&lng=' + lng
        );
        const satDataJson = await satData.json();
        setInstrumentList(satDataJson[0].instruments);
    }

    const geoLookup = async (term: string) => {
        const url = process.env.REACT_APP_ARCGIS_URL + "" + process.env.REACT_APP_ARCGIS_KEY + "&singleLine=" + term;
        const geoData = await fetch(url);
        const jsonGeo = await geoData.json();
        const gr:any[] = [];
        jsonGeo.candidates.map((candidate: any) => {
            gr.push({lat: candidate.location.x, lng: candidate.location.y, address: candidate.address});
        });
        setGeoResults(gr);
        setLocationName(term);
        console.log(geoResults);
    }

    const setLatLng = (lat: number, lng: number, name: string) => {
        setLat(lat);
        setLng(lng);
        setGeoResults([]);
        setLocationName(name);
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            fetchSats();
            startDateSelected.current = getDefaultDate();
            endDateSelected.current = getDefaultDate();
        }
        setLat(-79.6);
        setLng(43.7);
    }, []);

    const clickAndSelectSatelitte = (noradIdSelected: number, name: string) => {
        noradId.current = noradIdSelected;
        selectedSatellite.current = name;
        fetchInstruments(noradIdSelected);
    }

    const clickAndSelectInstrument = (instrumentIdSat: number, instrumentName: string) => {
        selectedInstrument.current = instrumentName;
        setTheInstrument(instrumentName);
        instrumentId.current = instrumentIdSat;
    }

    const clickAndSelectStartDate = (date: string) => {
        setStartDate(date);
        startDateSelected.current = date;
    }

    const clickAndSelectEndDate = (date: string) => {
        setEndDate(date);
        endDateSelected.current = date;
    }

    const clickAndSelectStartHour = (hour: string) => {
        setStartHour(hour);
        startHourSelected.current = hour;
    }

    const clickAndSelectEndHour = (hour: string) => {
        setEndHour(hour);
        endHourSelected.current = hour;
    }

    return (
        <>
            <div className="pb-1 missionContainer" style={{ marginLeft: "-2vw" }}>
                <Row className="g-4 darkBg">
                    <Col xs={6} xxl={6} style={{ backgroundColor: "#0d0d0d", paddingLeft: "3vw", paddingTop: "2vh", paddingRight: "2vw" }}>
                        <Row className="missionName">
                            <Col xs={12} xxl={6}>
                                <div>
                                    <h2 className="mb-2">{challenge.name}</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="missionDropDowns">
                            <Col xs={6} xxl={6}>
                                <label htmlFor="landsat">Satellite</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="landsat" className={`${missionStyles.dropDown}`}>
                                        {selectedSatellite.current}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {satellites.map((satellite: any) =>
                                            <Dropdown.Item href="#" key={satellite.norad_id} onClick={(e) => clickAndSelectSatelitte(satellite.norad_id, satellite.name)}>
                                                {satellite && satellite.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={6} xxl={6}>
                                <label htmlFor="imagery">Imagery Type</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="imagery" className={`${missionStyles.dropDown}`}>
                                        {theInstrument}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {instruments.map((instrument: any) =>
                                            <Dropdown.Item href="#" key={instrument.id + '_' + instrument.d} onClick={(e) => clickAndSelectInstrument(instrument.id, instrument.type)}>
                                                {instrument.type}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} xxl={12} >
                                <Form.Control type="text" placeholder="Location" className={`${missionStyles.mapSearch}`} onChange={(e) => geoLookup(e.target.value)} />
                                <Row className="geoResults">
                                    <Col xs={12} xxl={12} className="geoResList">
                                        {geoResults.map((result) =>
                                            <Link to="#" onClick={(e) => setLatLng(result.lat, result.lng, result.address)} key={"geos_" + Math.random()}>
                                                {result.address}
                                            </Link>
                                        )}
                                    </Col>
                                </Row>
                                <Map />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} xxl={6} style={{ paddingTop: "2vh" }}>
                        <Row className="missionDetails">
                            <Col xs={3} xxl={3}>
                                <label htmlFor={"dateStart"}>Mission start and end</label>
                                <Form.Control type="date" value={startDateSelected.current} onChange={(e) => clickAndSelectStartDate(e.target.value)} />
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Form.Control type="date" style={{ marginTop: "2vh" }} value={endDateSelected.current} onChange={(e) => clickAndSelectEndDate(e.target.value)} />
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Dropdown style={{ marginTop: "2vh" }}>
                                    <Dropdown.Toggle variant="success" id="landsat" className={`${missionStyles.dropDown}`}>
                                        {startHourSelected.current}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {hours.map((hour: string) =>
                                            <Dropdown.Item href="#" key={"startHour-" + hour} onClick={(e) => clickAndSelectStartHour(hour)} >
                                                {hour}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Dropdown style={{ marginTop: "2vh" }}>
                                    <Dropdown.Toggle variant="success" id="landsat" className={`${missionStyles.dropDown}`}>
                                        {endHourSelected.current}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {hours.map((hour: string) =>
                                            <Dropdown.Item href="#" key={"endHour-" + hour} onClick={(e) => clickAndSelectEndHour(hour)}>
                                                {hour}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row className="missionPassTimes">
                            <Col xs={12} xxl={12}>
                                <Table hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>START TIME</th>
                                            <th>END TIME</th>
                                            <th>DURATION</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                                <Table hover size="sm" id="passTimesList" className={missionStyles.missionListTbody} style={{ backgroundColor: "#0F111A" }}>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Row style={{ paddingBottom: "3vh" }}>
                                    <Col xs={3} xxl={3}>
                                        <Button size="lg" className={`${missionStyles.configureMissionButton}`}>Configure Mission</Button>
                                    </Col>
                                    <Col xs={9} xxl={9}>
                                        Then, add your code to the template, and publish your solution via Docker. The last active deployment is your final solution.
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Mission;
