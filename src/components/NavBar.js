import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);

  const handleBookSessionClick = () => {
    navigate("/book-session");
  };
  return (
    <React.Fragment>
      <Navbar expand="lg">
        <NavbarBrand href="/" className="nav-logo">
          <img alt="logo" src="/assets/company-logo.svg" height={70} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleOffcanvas} />
        <Collapse navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <NavLink href="/" className="nav-font">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us" className="nav-font">
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <button
                className="mx-3 nav_button"
                onClick={handleBookSessionClick}
              >
                Book a Session
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Offcanvas
        isOpen={offcanvasOpen}
        toggle={toggleOffcanvas}
        direction="end"
      >
        <OffcanvasHeader toggle={toggleOffcanvas}>
          Power Over Pain
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav vertical>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </React.Fragment>
  );
};

export default NavBar;
