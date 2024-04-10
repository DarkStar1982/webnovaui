import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ChallengeItems, challenges } from 'data/challenges';

import ChallengeListItem from "../../components/webnova/ChallengeListItem";

import "../../assets/styles/tailwind.css";
import "../../assets/styles/index.css";

const Deployments = () => {
    return (
        <>
            <div className="pb-5">
                <Row className="g-4">
                    <Col xs={12} xxl={6}>
                        <div className="mb-8">
                            <h2 className="mb-2">Deployments</h2>
                            <h5 className="text-700 fw-semi-bold">
                                
                            </h5>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Deployments;
