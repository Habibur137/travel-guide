import React from "react";
import { Container, Row } from "react-bootstrap";
import useTravels from "../../../Hooks/useTravels";
import Service from "../Service/Service";

const Services = () => {
  const [places] = useTravels();
  const services = places.filter((service) =>
    service?.category.includes("services")
  );
  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Top Services</h1>
      <Row xs={1} md={3} className="g-4">
        {services?.map((place, index) => (
          <Service key={index} place={place} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
