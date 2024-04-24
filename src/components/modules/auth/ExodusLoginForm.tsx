// import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Button from 'components/base/Button';
import { PhoenixButtonsDark_TypeDashing } from 'components/webnova/Wrapper/PhoenixButtonsDark_TypeDashing/PhoenixButtonsDark_TypeDashing';
// import AuthSocialButtons from 'components/common/AuthSocialButtons';
import { Col, Form, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import  InputDark_StateDefaultCaptionIcSS from 'components/webnova/Wrapper/InputDark_StateDefaultCaptionI/InputDark_StateDefaultCaptionI.module.css';

const ExodusLoginForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  return (
    <>
      <div className="text-center mb-7">
        {/* <h3 className="text-1000">Sign In</h3> */}
        <p className="text-700"></p>
      </div>
      {/* <AuthSocialButtons title="Sign in" />
      <div className="position-relative">
        <hr className="bg-200 mt-5 mb-4" />
        <div className="divider-content-center">or use email</div>
      </div> */}
      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="email"></Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="email"
            type="email"
            className={`${InputDark_StateDefaultCaptionIcSS.root}`}
            placeholder="ENTER YOUR EMAIL"
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="password"></Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="password"
            type="password"
            className={`${InputDark_StateDefaultCaptionIcSS.root}`}
            placeholder="PASSWORD"
          />
        </div>
      </Form.Group>
      {/* <Row className="flex-between-center mb-7">
        <Col xs="auto">
          <Form.Check type="checkbox" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              defaultChecked
            />
            <Form.Check.Label htmlFor="remember-me" className="mb-0">
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col xs="auto">
          <Link
            to={`/pages/authentication/${layout}/forgot-password`}
            className="fs-9 fw-semi-bold"
          >
            Forgot Password?
          </Link>
        </Col>
      </Row> */}
      {/* <Button variant="primary" className="w-100 mb-3">Sign In</Button> */}
      <PhoenixButtonsDark_TypeDashing className="w-100 mb-3" text={{label: "Sign In"}}/>
      {/* <div className="text-center">
        <Link
          to={`/pages/authentication/${layout}/register`}
          className="fs-9 fw-bold"
        >
          Create an account
        </Link>
      </div> */}
    </>
  );
};

export default ExodusLoginForm;
