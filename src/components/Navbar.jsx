import React from "react";
import Style from "../Style/navbar.module.css";
const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <img
          src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-dental-logo-template-dentist-smile-png-image_5120915.png"
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
