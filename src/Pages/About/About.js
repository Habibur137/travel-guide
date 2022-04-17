import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutImg from "../../images/habib.jpg";

const About = () => {
  return (
    <Container>
      <h2 className="text-center my-5">About Me</h2>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img height="500" variant="top" src={aboutImg} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0 mt-5">
            <Card.Body>
              <Card.Title>Travel Guide</Card.Title>
              <Card.Text>
                Keeping one’s self going is a difficult thing to do. There are a
                million distractions that occur every day and that can mean that
                we do not stay on track with what we should be doing.
                Self-motivation is something that does not come easy to a lot of
                people and that means that there are some steps that need to be
                taken before you can become motivated to the fullest extent.
              </Card.Text>
              <Card.Text>
                Of course, there are some other matters that first need to be
                taken care of. If there are a lot of distractions that keep you
                from doing what you need to be doing then you need to make some
                changes. This is really the first step towards becoming
                self-motivated in any form.
              </Card.Text>
            </Card.Body>
          </Card>
          <Link to="/blogs" className="btn btn-info ms-3 px-5 text-white">
            Read My Blog
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
