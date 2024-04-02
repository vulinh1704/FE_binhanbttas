import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" width={50} height={50} className="" />
        <h2 className="heading-5 font-varela font-semibold">Bình An BT</h2>
      </div>
    </Link>
  );
};

export default Logo;
