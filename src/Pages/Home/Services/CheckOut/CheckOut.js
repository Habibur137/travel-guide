import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import logo from "../../../../images/trawell_logo_white.png";
import tour from "../../../../images/travel-and-tours.png";
import { Col, Row } from "react-bootstrap";

const CheckOut = () => {
  const [user] = useAuthState(auth);
  return (
    <div className=" bg-dark py-5">
      <div className="container">
        <Row>
          <Col className="w-25  text-center mt-4  p-4 shadow-lg">
            <div>
              <img className="mb-3" src={logo} alt="" />
              <form className="d-flex flex-column ">
                <input
                  className="mb-3 bg-light p-2 border-0"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={user?.displayName}
                  required
                />
                <input
                  className="mb-3 bg-light p-2 border-0"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user?.email}
                  required
                />
                <input
                  className="mb-3 bg-light p-2 border-0"
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                />
                <input
                  className="mb-3 bg-light p-2 border-0"
                  type="text"
                  name="address"
                  id=""
                  placeholder="Address"
                  required
                />
                <button
                  style={{ backgroundColor: "#098DA3" }}
                  className="mb-3 p-2 border-0 text-white"
                >
                  Check Out
                </button>
              </form>
            </div>
          </Col>
          <Col className="img">
            <h3 className="text-white text-center mt-4 mb-0">Book Your Tour</h3>
            <img style={{ height: "450px" }} src={tour} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckOut;
