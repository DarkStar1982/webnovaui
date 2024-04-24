import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import sidiusLogo from '../../assets/img/webnova/sidiusLogo.svg';
import parsimoniLogo from '../../assets/img/webnova/parsimoniLogo.svg';

interface FooterProps {
    className?: string;
}

const ExodusFooter = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(className, 'footer')}>
            <Row className="g-1 justify-content-between align-items-center h-100">
                <Col xs={6} sm="auto" className="text-center">
                    <p className="mb-0 mt-2 mt-sm-0 text-900" style={{color: "#edeef7"}}>
                        <span className="d-none d-sm-inline-block" style={{color: "#edeef7"}}/>
                        <a style={{color: "#9f9fbc"}} className="d-sm-inline-block" href="https://exodusorbitals.com" target="_blank" rel="noreferrer">&copy;{' '} {new Date().getFullYear()} - Exodus Orbitals</a> 
                    </p>
                </Col>
                <Col xs={6} sm="auto" className="text-center" style={{color: "#edeef7"}}>
                    Sponsors: <img className="sponsorLogoFooter" src={sidiusLogo}/><img className="sponsorLogoFooter" src={parsimoniLogo}/>
                </Col>
            </Row>
        </footer>
    );
};

export default ExodusFooter;
