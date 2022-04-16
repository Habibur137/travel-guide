import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../images/trawell_logo_mini.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink
                className="me-3 text-decoration-none text-dark pb-1"
                to="/"
              >
                Home
              </CustomLink>
              <CustomLink
                className="me-3 text-decoration-none text-dark pb-1"
                to="/services"
              >
                Services
              </CustomLink>
              <CustomLink
                className="me-3 text-decoration-none text-dark pb-1"
                to="/login"
              >
                Sign In
              </CustomLink>
              <CustomLink
                className="pb-1 text-decoration-none text-dark"
                to="/register"
              >
                Sign Up
              </CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
