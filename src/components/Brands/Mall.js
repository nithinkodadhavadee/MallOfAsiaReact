import { useState } from "react";
import "./Mall.css";
import Container from "react-bootstrap/esm/Container";
import MapImg from "../../assets/Brands/map.png";

const content = [
  [
    <div className="row mall">
      <div className="col-md-12">
        <img src={MapImg} />
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

export default function Mall() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="mall py-md-5 py-4">
      <Container className="my-md-4">
        <header>
          <div className="d-flex">
            <h2> FIND YOUR WAY AROUND THE MALL </h2>
            <hr />
          </div>
        </header>

        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              <div className="dot"></div> LOWER GROUND FLOOR
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              <div className="dot"></div> GROUND FLOOR
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              <div className="dot"></div> FIRST FLOOR
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              <div className="dot"></div> SECOND FLOOR
            </button>
            <button
              className={activeContentIndex === 4 ? "active" : ""}
              onClick={() => setActiveContentIndex(4)}
            >
              <div className="dot"></div> THIRD FLOOR
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
