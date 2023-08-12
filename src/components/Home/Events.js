import { useState } from "react";
import "./Events.css";
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
      <div className="col-md-6">
        <video className="w-100" loop autoPlay muted>
          <source src={EventVideo} type="video/mp4" />
        </video>
        <div className="text">
          <h3>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipi elit consectetur adipi
            elit{" "}
          </h3>
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
  [
    <div className="row">
      <div className="col-md-6">
        <img src={EventImg} />
      </div>
      <div className="col-md-6">
        <video className="w-100" loop autoPlay muted>
          <source src={EventVideo} type="video/mp4" />
        </video>
        <div className="text">
          <h3>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipi elit consectetur adipi
            elit{" "}
          </h3>
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
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="events pt-md-4 pb-md-0 py-4">
      <Container className="mt-md-4">
        <header>
          <div className="d-flex">
            <h2> EVENTS & ENTERTAINMENT &nbsp; </h2>
            <hr />
          </div>
        </header>

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
            <button
              className={activeContentIndex === 4 ? "active" : ""}
              onClick={() => setActiveContentIndex(4)}
            >
              <div className="dot"></div> Sun - 13 Feb.
            </button>
            <button
              className={activeContentIndex === 5 ? "active" : ""}
              onClick={() => setActiveContentIndex(5)}
            >
              <div className="dot"></div> Mon - 15 Feb.
            </button>
            <button
              className={activeContentIndex === 6 ? "active" : ""}
              onClick={() => setActiveContentIndex(6)}
            >
              <div className="dot"></div> Tue - 17 Feb.
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
      <div className="view-btn mt-md-4">
        <Link>
          <Button1 title="EXPLORE" />
        </Link>
      </div>
    </div>
  );
}
