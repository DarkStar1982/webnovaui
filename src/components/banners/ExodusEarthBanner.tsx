import { Col, Row } from 'react-bootstrap';
import earth from '../../assets/img/webnova/earth_bg.svg';
import earthLogin from '../../assets/img/webnova/earthBgLogin.svg';
import { useLocation } from 'react-router-dom';


const ExodusEarthBanner = () => {
    const location = useLocation();
    const { hash, pathname, search } = location;
    let heightTopBanner = "30vh";
    let bgImage = earth;
    if (pathname == "/") {
        heightTopBanner = "114vh";
        bgImage = earthLogin;
    }
    let banerStyle = {
        height: heightTopBanner,
        paddingTop: "35vh",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: "flex"
    };
    if (pathname.startsWith("/pages/mission")) {
        banerStyle.display = "none";
    }

    return (
        <div className="best-in-market-banner d-flex h-100 px-4 px-sm-7 py-5 px-md-11 rounded-3">
            <div
                className="bg-holder banner-bg"
                style={banerStyle}
            />
            {/* <Row className="position-relative align-items-center w-sm-100 h-sm-100">
                <Col xs={12} style={{height:"30vh"}}>{' '}</Col>
            </Row> */}
        </div>
    );
};

export default ExodusEarthBanner;
