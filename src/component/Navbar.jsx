import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href>
            TRVL
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/services"
                  class="nav-link active"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/signup" class="nav-link active" aria-current="page">
                  <button type="button" class="btn btn-outline-light">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link active " aria-current="page">
                  <button type="button" class="btn btn-outline-light">
                    Log In
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
