import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ place }) => {
  const { name, img, articles, description, link } = place;
  return (
    <div>
      <Col>
        <Card>
          <Link to={link}>
            <Card.Img variant="top" src={img} />
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
