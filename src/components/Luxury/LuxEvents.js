import { useState } from "react";
import "./LuxEvents.css";
import Container from "react-bootstrap/esm/Container";
import EventVideo from "../../assets/Home/events.mp4";
import EventImg from "../../assets/Home/events.jpg";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";

const content = [
  [
    <div className="row">
      <div className="col-md-6">
        <img src={EventImg} />
      </div>
      <div className="col-md-6 pt-md-5 mt-md-5">
        <header>
          <h2> EVENTS</h2>
        </header>
        <div className="text mt-md-5">
          <h3>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipi elit consectetur adipi
            elit{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <p>
            {" "}
            <span>Date: </span>2nd Feb. 2023
          </p>
          <p>
            {" "}
            <span>Location: </span> the front foyer
          </p>
        </div>
      </div>
    </div>,
  ],
  [],
  [],
  [],
  [],
  [],
  [],
];

export default function LuxEvents() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="lux_events py-md-0 py-4">
      <Container className="my-md-4">
        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              <div className="dot"></div> Wed - 1 Feb.
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              <div className="dot"></div> Thu - 3 Feb.
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              <div className="dot"></div> Fri - 7 Feb.
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              <div className="dot"></div> Sat - 11 Feb.
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
