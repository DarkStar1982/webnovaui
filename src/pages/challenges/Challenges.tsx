import { Col, Row } from 'react-bootstrap';
import { ChallengeItems, challenges } from 'data/challenges';
import { ChallengeItemWrapper } from 'components/webnova/Wrapper/ChallengeItemWrapper';


const Challenges = () => {
    return (
        <>
            <div className="pb-5">
                <Row className="g-4">
                    <Col xs={12} xxl={6} className="mb-8">
                        <div className="mb-8">
                            <h2 className="mb-2">Challenges</h2>
                            <h5 className="text-700 fw-semi-bold">Start your space exploration by selecting a challenge</h5>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col xs={8} xxl={4} className="pr-1">
                        {challenges.map((item) => {
                            return <ChallengeItemWrapper 
                                        name={item.name} 
                                        key={item.name} 
                                        icon={item.icon} 
                                        description={item.description} 
                                        challengeId={item.id}
                                        dataType={item.dataType}
                                        />;
                        })}
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Challenges;
