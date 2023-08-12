import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image1 from "../../../assets/Brands/image1.png";
import "./Carousel2.css";
import Container from "react-bootstrap/esm/Container";

export class Carousel2 extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3.5,
      },
    },
  };
  render() {
    return (
      <div className="carousel2 py-md-5 py-4">
          <div class="pt-md-4">
            <OwlCarousel
              className="owl-theme"
              loop
              nav
              autoplay
              margin={15}
              center="true"
              responsive={this.state.responsive}
            >
              <div>
                <img src={Image1} />
              </div>
              <div>
                <img src={Image1} />
              </div>
              <div>
                <img src={Image1} />
              </div>
              <div>
                <img src={Image1} />
              </div>
              <div>
                <img src={Image1} />
              </div>
            </OwlCarousel>
          </div>
      </div>
    );
  }
}

export default Carousel2;
