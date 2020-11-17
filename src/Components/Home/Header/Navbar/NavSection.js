import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Nav,
  Collapse,
  NavItem,
  Button,
  NavbarToggler,
  NavbarBrand,
  Container,
} from "reactstrap";
import { UserContext } from "../../../../App";
import logo from "../../../../Assets/logos/Logo.png";

// import './NavArea.css'

const NavSection = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [loggingUser, setLoggingUser] = useContext(UserContext);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Navbar className="text-dark navfont" light expand="md">
        <NavbarBrand href="/">
          {" "}
          <img src={logo} width="30%" alt="Aparment hunt logo" />{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-info" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav
            style={{ fontSize: "1.5rem" }}
            className="ml-auto justify-content-around  align-items-center"
            navbar
          >
            <NavItem>
              <NavLink className="mr-4 text-dark navfont" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mr-3 text-dark navfont" to="/service">
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" mr-3 text-dark navfont" to="/concerns">
                Concerns
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className=" mr-3 text-dark navfont" to="/event">
                Event
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className=" mr-3 text-dark navfont navfont"
                to="/contact"
              >
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              {loggingUser.email ? (
                <Button outline color="info" className="text-center">
                  {" "}
                  <NavLink
                    className="mr-3 text-dark navfont navfont"
                    to="/myRent"
                  >
                    Profile
                  </NavLink>
                </Button>
              ) : (
                <Button outline color="info" className="text-center">
                  {" "}
                  <NavLink
                    className="mr-3 text-dark navfont navfont"
                    to="/login" style={{ fontSize: "1.5rem" }}
                  >
                    Login
                  </NavLink>
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavSection;
