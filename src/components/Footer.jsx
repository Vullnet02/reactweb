// Footer.js
import React from "react";
import Style from "../Style/general.module.css"; // Importimi i stilizimeve të jashtme

const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.footercontent}>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
          <ul className={Style.footerlinks}></ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
