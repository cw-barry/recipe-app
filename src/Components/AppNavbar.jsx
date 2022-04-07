import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
const AppNavbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand to="/" tag={RRNavLink}>
          Recipe App
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Nav navbar>
              <NavItem>
                <NavLink to="/login" tag={RRNavLink}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
