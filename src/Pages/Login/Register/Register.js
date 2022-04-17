import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/trawell_logo_mini.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  // user creation hook
  const [createUserWithEmailAndPassword, user, loading, creationError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // user extra information collect hook
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // New User Creator Function
  // any auth error
  let authError;
  if (creationError || updateError) {
    authError = (
      <p className="text-danger">
        Error: {creationError?.message} {updateError?.message}
      </p>
    );
  }
  if (user) {
    navigate("/login");
  }
  //loading
  if (loading || updating) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      </div>
    );
  }
  const handleRegistration = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast("Accounted Created");
    }
  };
  return (
    <div>
      <div className="w-25 border-1 mx-auto container  text-center mt-4  p-4 shadow-lg">
        <div>
          <img className="mb-3" src={logo} alt="" />
          <form className="d-flex flex-column " onSubmit={handleRegistration}>
            <input
              className="mb-3 bg-light p-2 border-0"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
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
            <input
              className="mb-3 bg-light p-2 border-0"
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirm Password"
              required
            />
            <button className="mb-3 bg-info p-2 border-0 text-white">
              Sign In
            </button>
            <ToastContainer />
          </form>
          {authError}
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
