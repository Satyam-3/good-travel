import "./styles.css";
import { useState } from "react";
import "./styles.css";
import airplane from "./images/airplane.svg";

var rec = {
  Summer: [
    {
      title: "Goa",
      rating: "4/5"
    },
    {
      title: "Manali",
      rating: "5/5"
    }
  ],

  Rainy: [
    {
      title: "Coorg",
      rating: "4.5/5"
    },
    {
      title: "Shillong",
      rating: "3.5/5"
    }
  ],

  Winter: [
    {
      title: "Shimla",
      rating: "4/5"
    },
    {
      title: "Gulmarg",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedSeason, setSeason] = useState("Winter");
  function seasonClickHandler(season) {
    setSeason(season);
  }
  function Home() {
    return (
      <div>
        <img src={airplane} alt="airplane.svg" />
      </div>
    );
  }
  return (
    <div className="App">
      <nav className="navigation">
        <h1>
          {" "}
          ✈️ good <span style={{ color: "#60a5fa" }}>Travel</span>{" "}
        </h1>
        <p style={{ fontSize: "smaller" }}>
          {" "}
          Checkout my favorite travel destinations. Select a season to get
          started{" "}
        </p>

        <div>
          {Object.keys(rec).map((season) => (
            <button
              onClick={() => seasonClickHandler(season)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {season}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {rec[selectedSeason].map((travel) => (
            <li
              key={travel.title}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "0 auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {travel.title} </div>
              <div style={{ fontSize: "smaller" }}> {travel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
