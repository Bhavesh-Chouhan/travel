import React from "react";
import island from "../images/island.jpg";
import waterfall from "../images/waterfall.jpg";
import mountains from "../images/mountains.jpg";
import "./Cards.css";
function Cards() {
  return (
    <div className="places">
      <div className="cards">
        <div className="card">
          <img src={island} alt="where are you" srcset="" />
          <p>
            Travel through the islands of <br />
            Bali in a Private Cruise.
          </p>
        </div>
        <div className="card">
          <img src={waterfall} alt="where are you" srcset="" />
          <p>
            Explore the hidden waterfall deep <br /> inside the amazon jungle.
          </p>
        </div>
        <div className="card">
          <img src={mountains} alt="where are you" />
          <p>
            Explore beautifull Pachmadi
            <br /> mountains.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
