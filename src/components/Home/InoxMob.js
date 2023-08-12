import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";
import { Cont, NavigationContainer, Img } from "./elements";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import "./Inox.css";

class InoxMob extends React.Component {
  render() {
    return (
      <div className="inox d-block d-sm-none">
        <div className="container w-100">
          <h2> INOX MOVIES</h2>
          <div className="row align-items-center w-100ms-0 justify-content-center">
            <Cont>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="img/inox1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="img/inox2.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="img/inox3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="img/inox4.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="img/inox5.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Cont>
          </div>
          <div className="check-btn">
            <Link>
              {" "}
              <button type="button"> CHECK OUT ALL SHOWS </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default InoxMob;
