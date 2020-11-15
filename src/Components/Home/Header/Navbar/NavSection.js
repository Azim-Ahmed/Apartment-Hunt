import React, { useState } from 'react';
import {
  Navbar,
  Nav, Collapse,
  NavItem,
  Button,
  NavLink, NavbarToggler,
  NavbarBrand,
  Container
} from 'reactstrap';
import logo from '../../../../Assets/logos/Logo.png'
// import './NavArea.css'

const NavSection = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Navbar  className="text-dark navfont bg-warning" light expand="md">
        <NavbarBrand href="/"> <img src={logo} width="30%" alt="Aparment hunt logo"/> </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-info" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav style={{fontSize:"1.3rem"}} className="ml-auto justify-content-around  align-items-center" navbar>
            <NavItem>
              <NavLink className="mr-4 text-dark navfont" href="home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" href="/service">Service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" mr-3 text-dark navfont" href="/concerns">Concerns</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" mr-3 text-dark navfont" href="/event">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" mr-3 text-dark navfont navfont" href="/contact">Contact</NavLink>
            </NavItem>

            <NavItem>
              {
                <Button outline color="info" className="text-center">  <NavLink className="mr-3 text-dark navfont navfont" href="/login">Login</NavLink></Button>
              }
            </NavItem>


          </Nav>

        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavSection;