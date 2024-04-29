import { Col, Row } from 'react-bootstrap';
import { AppStoreItems, apps } from 'data/appstoreitems';
import { AppstoreItemWrapper } from 'components/webnova/AppstoreItem/AppstoreItemWrapper';
import appstoreStyle from "./Appstore.module.css";


const Appstore = () => {
    return (
        <>
            <div className={`pb-5 ${appstoreStyle.challengesList}`}>
                <Row className="g-4">
                    <Col xs={12} xxl={6} className="mb-8">
                        <div className="mb-6">
                            <h2 className="mb-2 challengesTitle">App Store</h2>
                            <h5 className={`text-700 fw-semi-bold ${appstoreStyle.challengeSub}`}>Start your space exploration by selecting an app</h5>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {apps.map((item) => {
                        return <>
                                <Col xs={3} xxl={3}>
                                    <AppstoreItemWrapper
                                        name={item.name}
                                        key={item.name}
                                        icon={item.icon}
                                        description={item.description}
                                        challengeId={item.id}
                                        dataType={item.dataType}
                                    />
                                </Col>
                            </>
                    })}
                </Row>
            </div>
        </>
    );
};

export default Appstore;
