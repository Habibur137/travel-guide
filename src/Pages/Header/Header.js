import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../firebase.init";
import logo from "../../images/trawell_logo_mini.png";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      </div>
    );
  }
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

              {user ? (
                <CustomLink
                  onClick={() => signOut(auth)}
                  style={{
                    borderTop: "1px solid red",
                    borderBottom: "1px solid #0DCAF0",
                  }}
                  className="me-3 text-decoration-none text-dark pb-1"
                  to="/login"
                >
                  Sign Out
                </CustomLink>
              ) : (
                <div className="d-flex">
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
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
