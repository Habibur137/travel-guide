import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/trawell_logo_white.png";

const Footer = () => {
  return (
    <Row
      style={{ backgroundColor: "#098DA3" }}
      className="pt-5 px-5 pb-4 d-flex justify-content-between text-white"
    >
      <Col>
        <img src={logo} alt="" />
        <h4>copyright &copy; {new Date().getFullYear()}</h4>
      </Col>
      <Col>
        <h4 className="text-white">DESTINATIONS</h4>
        <div className="d-flex flex-column">
          <Link className="text-white text-decoration-none fs-5" to="africa">
            Africa
          </Link>
          <Link className="text-white text-decoration-none fs-5" to="asia">
            Africa
          </Link>
          <Link className="text-white text-decoration-none fs-5" to="europe">
            Europe
          </Link>
        </div>
      </Col>
      <Col>
        <h4>NEWSLETTER</h4>
        <p>
          Make sure to subscribe to our newsletter and be the first to know the
          news.
        </p>
        <input
          className="mb-3 bg-light px-2 border-0"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <button className="mb-3 shadow-lg  px-3 text-dark py-1 border-0">
          Subscribe
        </button>
      </Col>
    </Row>
  );
};

export default Footer;
