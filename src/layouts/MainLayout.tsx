import classNames from 'classnames';
// import ChatWidget from 'components/common/chat-widget/ChatWidget';
// import Footer from 'components/footers/Footer';
import ExodusFooter from 'components/footers/ExodusFooter';
import NavbarDual from 'components/navbars/navbar-dual/NavbarDual';
// import NavbarTopHorizontal from 'components/navbars/navbar-horizontal/NavbarTopHorizontal';
import ExodusNavbarTopHorizontal from 'components/navbars/navbar-horizontal/ExodusNavbarTopHorizontal';
// import NavbarTopDefault from 'components/navbars/navbar-top/NavbarTopDefault';
import ExodusNavbarTopDefault from 'components/navbars/navbar-top/ExodusNavbarTopDefault';
import NavbarVertical from 'components/navbars/navbar-vertical/NavbarVertical';
import { useAppContext } from 'providers/AppProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import ExodusEarthBanner from 'components/banners/ExodusEarthBanner';
import { useLocation } from 'react-router-dom';
// import { bg } from '@fullcalendar/core/internal-common';

const MainLayout = () => {
  const {
    config: { navbarPosition }
  } = useAppContext();

  const location = useLocation();
  const { hash, pathname, search } = location;
  const { contentClass, footerClass } = useMainLayoutContext();

  
  let marginTopContain = "10vh";
  let containerStyle = {marginTop: marginTopContain};
  if (pathname == "/") {
    marginTopContain = "-10vh";
    //  skip login
    // return <Navigate replace to="/pages/challenges" />;
  }
  containerStyle = {marginTop: marginTopContain};

  if (pathname.startsWith("/pages/mission")) {
    marginTopContain = "-10vh";
    containerStyle = {marginTop: marginTopContain};
  }

  
  return (
    <>
    <ExodusEarthBanner/>
    <Container fluid className="px-0">
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (pathname != "/") && (
        <NavbarVertical />
      )}
      {navbarPosition === 'vertical' && (pathname == "/") && <ExodusNavbarTopDefault />}
      {(navbarPosition === 'horizontal' || navbarPosition === 'combo') && (pathname != "/") &&  (
        <ExodusNavbarTopHorizontal />
      )}
      {navbarPosition === 'dual' && <NavbarDual />}

      <div className={classNames(contentClass, 'content')} style={containerStyle}>
        <Outlet />
        <ExodusFooter className={classNames(footerClass, 'position-absolute')} />
      </div>
    </Container>
    </>
  );
};

export default MainLayout;
