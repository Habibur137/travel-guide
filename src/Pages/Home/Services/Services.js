import React from "react";
import { Container, Row } from "react-bootstrap";
import useTravels from "../../../Hooks/useTravels";
import Service from "../Service/Service";

const Services = () => {
  const [places] = useTravels();
  const services = places.filter((service) =>
    service?.category.includes("services")
  );
  if (!services.length) {
    return <p>Loading.....</p>;
  }
  return (
    <Container>
      <h2 className="text-center mt-5 mb-4">Top Services</h2>
      <Row xs={1} md={3} className="g-4">
        {services?.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
