import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTravels from "../../../../Hooks/useTravels";
import Place from "../Place/Place";

const Africa = () => {
  const [services] = useTravels();
  const africasPlace = services?.filter((service) =>
    service.category.includes("africa")
  );
  console.log(africasPlace);
  return (
    <div>
      <Link to="/checkout">CheckOut</Link>
      <Container>
        <h2 className="text-center mt-5 mb-4">Africa Services</h2>
        <Row xs={1} md={2} className="g-4">
          {africasPlace?.map((service, index) => (
            <Place service={service} key={index} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Africa;
