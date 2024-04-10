import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import ExodusNavItems from '../nav-items/ExodusNavItems';
import ExodusNavItemsSlim from '../nav-items/ExodusNavItemsSlim';
import ExodusNavbarTopNav from './ExodusNavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const ExodusNavbarTopHorizontal = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarTopShape,
      navbarTopAppearance
    }
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      className={classNames('navbar-top fixed-top', {
        'navbar-slim': navbarTopShape === 'slim',
        'navbar-darker': navbarTopAppearance === 'darker'
      })}
      expand="lg"
      variant=""
    >
      <NavbarBrand />
      {!(navbarPosition === 'combo' && breakpoints.down('lg')) && (
        <Navbar.Collapse
          className="navbar-top-collapse order-1 order-lg-0 justify-content-center pb-0"
          in={openNavbarVertical}
        >
          <ExodusNavbarTopNav/>
        </Navbar.Collapse>
      )}
      {navbarTopShape === 'default' ? <ExodusNavItems /> : <ExodusNavItemsSlim />}
    </Navbar>
  );
};

export default ExodusNavbarTopHorizontal;
