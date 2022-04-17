import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Place = ({ service }) => {
  const { name, time, description, img } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{time}</Card.Text>
          <Link to="/checkout">CheckOut</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Place;
