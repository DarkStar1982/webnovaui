import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import ExodusNavItems from '../nav-items/ExodusNavItems';
import ExodusNavItemsSlim from '../nav-items/ExodusNavItemsSlim';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const ExodusNavbarTopDefault = () => {
  const {
    config: { navbarTopShape, navbarTopAppearance }
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      className={classNames('navbar-top fixed-top', {
        'navbar-slim': navbarTopShape === 'slim',
        'navbar-darker': navbarTopAppearance === 'darker'
      })}
      expand
      variant=""
    >
      <div className="navbar-collapse justify-content-between">
        <NavbarBrand />

        {navbarTopShape === 'default' ? (
          <>
            {breakpoints.up('lg') && (
              <DropdownSearchBox
                className="navbar-top-search-box"
                inputClassName="rounded-pill"
                size="sm"
                style={{ width: '25rem' }}
              >
                <SearchResult />
              </DropdownSearchBox>
            )}
            <ExodusNavItems />
          </>
        ) : (
          <ExodusNavItemsSlim />
        )}
      </div>
    </Navbar>
  );
};

export default ExodusNavbarTopDefault;
