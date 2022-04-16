import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/trawell_logo_mini.png";

const Register = () => {
  return (
    <div>
      <div className="w-25 border-1 mx-auto container  text-center mt-4  p-4 shadow-lg">
        <div>
          <img className="mb-3" src={logo} alt="" />
          <form className="d-flex flex-column ">
            <input
              className="mb-3 bg-light p-2 border-0"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="mb-3 bg-light p-2 border-0"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="mb-3 bg-light p-2 border-0"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <button className="mb-3 bg-info p-2 border-0 text-white">
              Sign In
            </button>
          </form>
          <p style={{ color: "gray" }}>
            Already Have An Account ?{" "}
            <Link className="text-info" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
