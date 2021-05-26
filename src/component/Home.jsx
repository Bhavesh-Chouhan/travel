import React from "react";
import { Link } from "react-router-dom";
import bg from "../video/bg.mp4";
import Cards from "./Cards";
import Footer from "./Footer";
import "../App.css";
function Home() {
  return (
    <div>
      <div className="home-content">
        <div className="info">
          <h1>We are your travel guide.</h1>
          <Link to="signup">
            <button type="button" class="btn btn-outline-dark">
              Let's go
            </button>
          </Link>
        </div>

        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>
      </div>

      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
