/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Col, Row, Form, Table, Button, Dropdown } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { ExodusMap } from './ExodusMap';
import { challenges } from 'data/challenges';
import { hours } from 'data/hours';
import missionStyles from './MissionScreen.module.css';
import { ConfigureMission } from 'types/ConfigureMission';
import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

interface Item {
    lat: string;
    lng: string;
    address: string;
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

    const latSelected = useRef(43.7);
    const lngSelected = useRef(-79.6);
    const autocompleteVisible = useRef(false);
    const timesOnTarget = useRef([]);

    const [satellites, setSatelliteList] = useState([]);
    const [instruments, setInstrumentList] = useState([]);
    const [theInstrument, setTheInstrument] = useState("SENSOR");
    const [startDate, setStartDate] = useState('START DATE');
    const [endDate, setEndDate] = useState('END DATE');
    const [startHour, setStartHour] = useState('00:00');
    const [endHour, setEndHour] = useState('23:59');
    const [lat, setLat] = useState(43.7);
    const [lng, setLng] = useState(-79.6);
    const [locationName, setLocationName] = useState("Toronto");
    const [geoResults, setGeoResults] = useState(Array<any>);
    const [timeTarget, setTimeTarget] = useState(Array<any>);

    const id = pathname.substring(pathname.lastIndexOf('/') + 1)
    const challenge = challenges[Number(id)]

    let timesTarget: Array<Array<string>> = [];

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<Item[]>([]);

    const handleSearch = (term: string) => {
        setIsLoading(true);
        const url = process.env.REACT_APP_ARCGIS_URL + "" + process.env.REACT_APP_ARCGIS_KEY + "&singleLine=" + term;
        fetch(url)
            .then((resp) => resp.json())
            .then((response) => {
                const gr: any[] = [];
                response.candidates.map((candidate: any) => {
                    gr.push({ lat: candidate.location.y, lng: candidate.location.x, address: candidate.address });
                });
                autocompleteVisible.current = true;
                setGeoResults(gr);
                setOptions(gr);
                setLocationName(term);
                setIsLoading(false);
            });
    };

    const filterBy = () => true;

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
        fetch(process.env.REACT_APP_API_URL +
            'times_on_target?norad_id=' + noradId.current +
            '&instrument_id=' + instrumentId.current +
            '&net=' + startDateSelected.current + ' ' + startHour + ":00" +
            '&nlt=' + endDateSelected.current + ' ' + endHour + ":00" +
            '&lat=' + latSelected.current +
            '&lng=' + lngSelected.current
        )
            .then(response => response.json())
            .then(response => {
                timesOnTarget.current = response.target_passes;
                setTimeTarget(response.target_passes);
            })
            .catch(err => console.error(err));
    }

    const setLatLng = (lat: number, lng: number, name: string) => {
        setLat(lat);
        setLng(lng);
        latSelected.current = lat;
        lngSelected.current = lng;
        setGeoResults([]);
        setLocationName(name);
        autocompleteVisible.current = false;
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
        fetchTimesOnTarget();
    }

    const configureMission = () => {
        let configureMissionData: ConfigureMission = {
            satellite: noradId.current,
            instrument: instrumentId.current.toString(),
            loc_lat: latSelected.current,
            loc_lon: lngSelected.current.toString(),
            start_date: startDateSelected.current,
            mission_type: "RGB",
            description: challenge.name,
            passes: timesTarget
        };
        const blob = new Blob([JSON.stringify(configureMissionData)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "configureMission.json");
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
                                <AsyncTypeahead className={missionStyles.asyncGeoSearchLocation}
                                    filterBy={filterBy}
                                    id="async-geo-search-location"
                                    isLoading={isLoading}
                                    labelKey="address"
                                    minLength={3}
                                    onSearch={handleSearch}
                                    options={options}
                                    onChange={(selected: Array<any>) => {
                                        selected[0] && selected[0].lat && selected[0].lng &&
                                        setLatLng(selected[0].lat, selected[0].lng, selected[0].address);
                                    }}
                                    placeholder="Search for a location"
                                />
                                <ExodusMap lat={latSelected.current} lng={lngSelected.current} zoom={9} />
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                </Table>
                                <Table hover size="sm" id="passTimesList" className={missionStyles.missionListTbody} style={{ backgroundColor: "#0F111A" }}>
                                    <tbody>
                                        {timesOnTarget.current && timesOnTarget.current.map((times) => {
                                            return (<tr key={Math.random()}>
                                                <td>{times[0]}</td>
                                                <td>{times[1]}</td>
                                                <td>
                                                    <Form.Check // prettier-ignore
                                                        className={missionStyles.passTimeCheckbox}
                                                        key={Math.random()}
                                                        type="checkbox"
                                                        onClick={(e) => {
                                                            timesTarget.push([times[0], times[1]]);
                                                        }}
                                                    />
                                                </td>
                                            </tr>);
                                        })}
                                        {!timesOnTarget.current &&
                                            <tr>
                                                <td></td>
                                                <td>Please select a valid time range.</td>
                                                <td></td>
                                            </tr>
                                        }
                                    </tbody>
                                </Table>
                                <Row style={{ paddingBottom: "3vh" }}>
                                    <Col xs={3} xxl={3}>
                                        <Button size="lg" className={`${missionStyles.configureMissionButton}`} onClick={configureMission}>Configure Mission</Button>
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
