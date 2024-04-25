import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { topButtons, TopButtonItems } from 'exodussitemap';
import { Link, useLocation } from 'react-router-dom';
import { Frame3880} from '../../webnova/Wrapper/Frame3880/Frame3880';
// import { Frame3881 } from 'components/webnova/Wrapper/Frame3881/Frame3881';
const ExodusNavbarTopNav = () => {
  const { pathname } = useLocation();
  
  let style = {};
  if (pathname == "/") {
    style = {display: "none"};
  }
  return (
    <Nav className="navbar-nav-top pb-4 pb-lg-0 scrollbar">
      <Frame3880 label={topButtons[0].key} url={topButtons[0].route} style={style}/>
      {/* <Frame3881 label={topButtons[1].key} url={topButtons[1].route} style={style}/> */}
      {/* {topButtons.map(route => (
        <ExodusNavbarTopNavItem route={route} key={route.key}/>
      ))} */}
    </Nav>
  );
};

const ExodusNavbarTopNavItem = ({ route }: { route: TopButtonItems }) => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  
  let style = {};
  if (pathname == "/") {
    style = {display: "none"};
  }

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, [pathname]);

  return (
    <Link to={route.route} className='btn btn-large' style={style}>{route.key}</Link>
  );
};

export default ExodusNavbarTopNav;
