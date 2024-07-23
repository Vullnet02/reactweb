import React from "react";
import Style from "../Style/navbar.module.css";
const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <img
          src="https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png"
          alt="Logo"
        />
      </div>
      <div className={Style.menu}>
        <a href="#footi">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
