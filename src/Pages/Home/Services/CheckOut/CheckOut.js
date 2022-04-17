import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import logo from "../../../../images/trawell_logo_mini.png";

const CheckOut = () => {
  const [user] = useAuthState(auth);
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
            <button className="mb-3 bg-info p-2 border-0 text-white">
              Check Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
