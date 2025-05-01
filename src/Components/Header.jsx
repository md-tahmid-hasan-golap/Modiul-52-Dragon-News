import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-3">
      <img className="w-[350px]" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <h6>Sunday, November 27, 2025</h6>
    </div>
  );
};

export default Header;
