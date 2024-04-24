import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/img/icons/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="bg-1100 dark__bg-1000">
      <div className="container-small px-lg-7 px-xxl-3">
        <Row className="gx-xxl-8 gy-5 align-items-center mb-5">
          <Col xl="auto" className="text-center">
            <Link to="/">
              <img src={logo} alt="" height={48} />
            </Link>
          </Col>
          <Col xl="auto" className="flex-1">
            <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-0 border-end-xl border-dashed border-800 gap-3 gap-xl-8 pe-xl-5 pe-xxl-8 w-75 w-md-100 mx-auto">
              {[
                'Contact us',
                'Newsroom',
                'Opportunities',
                'Login',
                'Sign Up',
                'Support',
                'FAQ'
              ].map(item => (
                <li key={item}>
                  <a href="#!" className="text-300 dark__text-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xl="auto">
            <div className="d-flex align-items-center justify-content-center gap-8">
              <Link to="#!" className="text-white dark__text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="#!" className="text-white dark__text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="#!" className="text-white dark__text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </Col>
        </Row>
        <hr className="text-800" />
        <div className="d-sm-flex flex-between-center text-center">
          <p className="text-600 mb-0">Copyright © Company Name</p>
          <p className="text-600 mb-0">
            Made with love by{' '}
            <Link to="https://themewagon.com">ThemeWagon</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
