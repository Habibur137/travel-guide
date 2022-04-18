import React from "react";
import { Container, Row } from "react-bootstrap";
import useTravels from "../../../../Hooks/useTravels";
import Place from "../Place/Place";

const Asia = () => {
  const [services] = useTravels();
  const asiaPlace = services?.filter((service) =>
    service.category.includes("asia")
  );
  return (
    <div>
      <Container>
        <h2 className="text-center mt-5 mb-4">Asia Services</h2>
        <Row xs={1} md={2} className="g-4">
          {asiaPlace?.map((service, index) => (
            <Place service={service} key={index} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Asia;
