import { useEffect, useState } from 'react';
import { Col, Row, Form, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputDark_StateFilledCaptionIn } from 'components/webnova/Wrapper/InputDark_StateFilledCaptionIn/InputDark_StateFilledCaptionIn';
import { Map } from './Map';
import missionStyles from './MissionScreen.module.css';
import { ChallengeItems, challenges } from 'data/challenges';
import { useSearchParams, useLocation } from "react-router-dom";

const Mission = () => {
    const options = [
        'one', 'two', 'three'
    ];

    const location = useLocation();
    const { hash, pathname, search } = location;

    let id = pathname.substring(pathname.lastIndexOf('/') + 1)

    let bgButtonColor = { backgroundColor: "#1A1724", border: "1px #373E53", marginBottom: "2vh", width: "100%" };
    const defaultOption = options[0];
    
    let challenge = challenges[Number(id)]

    
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
                                    <Dropdown.Toggle variant="success" id="landsat" style={bgButtonColor}>
                                        LANDSAT
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">LANDSAT</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={6} xxl={6}>
                                <label htmlFor="imagery">Imagery Type</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="imagery" style={bgButtonColor}>
                                        LOW RESOLUTION
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">LOW RESOLUTION</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} xxl={12} >
                                <Map />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} xxl={6} style={{paddingTop: "2vh"}}>
                        <Row className="missionDetails">
                            <Col xs={3} xxl={3}>
                                <label htmlFor={"dateStart"}>Mission start and end</label>
                                <Form.Control type="date" />
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Form.Control type="date" style={{ marginTop: "2vh" }} />
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Dropdown style={{ marginTop: "2vh" }}>
                                    <Dropdown.Toggle variant="success" id="landsat" style={bgButtonColor}>
                                        Action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xs={3} xxl={3}>
                                <Dropdown style={{ marginTop: "2vh" }}>
                                    <Dropdown.Toggle variant="success" id="landsat" style={bgButtonColor}>
                                        TIME
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
