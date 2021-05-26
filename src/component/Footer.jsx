import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <h4 to="/" class="navbar-brand">
        TRVL
      </h4>
      <p className="copyright">TRVL © 2021</p>
      <div className="icon">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Footer;
