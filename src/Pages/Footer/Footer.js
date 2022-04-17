import React from "react";

const Footer = () => {
  return (
    <div className="p-5 m-4 text-center bg-dark text-white">
      <h3>copyright &copy; {new Date().getFullYear()}</h3>
    </div>
  );
};

export default Footer;
