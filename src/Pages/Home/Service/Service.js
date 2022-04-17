import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { name, img, articles, description, link } = service;
  console.log(service);
  return (
    <div className="position-relative mb-4">
      <Col>
        <Card>
          <Link to={link}>
            <div className="overlay d-flex justify-content-center align-items-end">
              <div className="text-white p-3">
                <h1>{name}</h1>
                <p>articles: {articles}</p>
                {/* <button
                  type="button"
                  class="btn btn-outline-primary text-white"
                >
                  See Details
                </button> */}
              </div>
            </div>
            <Card.Img variant="top" src={img} />
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
