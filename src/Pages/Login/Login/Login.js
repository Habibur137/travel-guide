import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/trawell_logo_mini.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    toast("Login Successfully");
  };
  return (
    <div className="w-25 border-1 mx-auto container  text-center mt-4  p-4 shadow-lg">
      <div>
        <img className="mb-3" src={logo} alt="" />
        <form onSubmit={handleLogin} className="d-flex flex-column ">
          <input
            className="mb-3 bg-light p-2 border-0"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="mb-3 bg-light p-2 border-0"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <button className="mb-3 bg-info p-2 border-0 text-white">
            Sign In
          </button>
          <ToastContainer />
        </form>
        <button className="mb-3 px-4 py-2 w-100 border-0 bg-white shadow-sm">
          <span className="text-success">Google </span>
          <span className="text-danger"> Sign In</span>
        </button>
        <p style={{ color: "gray" }}>
          Need An Account ?{" "}
          <Link className="text-info" to="/register">
            Sign Up
          </Link>
        </p>
        <p style={{ cursor: "pointer" }} className="text-info">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
