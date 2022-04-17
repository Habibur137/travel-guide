import React from "react";
import { Col, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center my-3">Authentication vs. Authorization</h1>
        <Row>
          <Col>
            <h3>Authentication</h3>
            <p>Authentication verifies who the user is.</p>
            <p>
              Authentication works through passwords, one-time pins, biometric
              information, and other information provided or entered by the
              user.
            </p>
            <p>
              Authentication is the first step of a good identity and access
              management process.
            </p>
            <p>
              Authentication is visible to and partially changeable by the user.
            </p>
            <p>
              Example: By verifying their identity, employees can gain access to
              an HR application that includes their personal pay information,
              vacation time, and 401K data.
            </p>
          </Col>
          <Col>
            <h3>Authorization</h3>
            <p>Authorization determines what resources a user can access.</p>
            <p>
              Authorization works through settings that are implemented and
              maintained by the organization.
            </p>
            <p>Authorization always takes place after authentication.</p>
            <p>Authorization isn’t visible to or changeable by the user.</p>
            <p>
              Example: Once their level of access is authorized, employees and
              HR managers can access different levels of data based on the
              permissions set by the organization.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <h3 className="mt-5">Why Choose Firebase ?</h3>
        <p>
          Firebase is originally developed by Firebase inc and later acquired by
          Google. It provides different kinds of services that help you to
          develop high-quality mobile and web applications to grow your
          business. It is compatible with Web, iOS, Android, and OS X clients.
          With Firebase, developers don’t need to worry about the backend
          programming, Authentication, API development, database (real-time
          cloud-hosted NoSQL database and cloud firestore), File storage, etc.
          Firebase provides all the services with very efficient and fast
          performance.
        </p>
        <h2>Other Authentication</h2>
        <p>MFA</p>
        <p>
          Firebase is a full package that can help in developing your mobile or
          web applications faster with fewer resources and more efficiency.
        </p>
      </div>
      <div>
        <h3 className="mt-5">
          There are many services which Firebase provides, Most useful of them
          are:
        </h3>
        <p>Cloud Firestore</p>
        <p>Authentication</p>
        <p>Hosting</p>
        <p>Cloud Storage</p>
        <p>Google Analytics</p>
        <p>Cloud Messaging</p>
        <p>Dynamic Links</p>
        <p>Remote Config</p>
      </div>
    </div>
  );
};

export default Blogs;
