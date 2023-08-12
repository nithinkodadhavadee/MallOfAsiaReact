import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Offers.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";
import Card1 from "../Common/Card/Card1";

export class Offers extends Component {
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
        items: 3,
      },
    },
  };
  render() {
    return (
      <div className="offers pb-md-2 pt-md-0 py-4">
        <Container>
          <div class="container-fluid pt-md-4">
            <div className="d-flex">
              <h2> OFFERS </h2>
              <hr />
            </div>
            <OwlCarousel
              items={3}
              className="owl-theme mt-md-5 pt-md-3 mt-3"
              loop
              nav
              autoplay
              margin={25}
              responsive={this.state.responsive}
            >
              <div>
                <Card1
                  image={"img/offers1.jpg"}
                  title=" Brand Name "
                  subtitle="SALE UPTO 50% OFF"
                  para="20 Jan 2023 to 31 Jan 2023"
                />
              </div>

              <div>
                <Card1
                  image={"img/offers2.jpg"}
                  title=" Brand Name "
                  subtitle="SALE UPTO 50% OFF"
                  para="20 Jan 2023 to 31 Jan 2023"
                />
              </div>
              <div>
                <Card1
                  image={"img/offers3.jpg"}
                  title=" Brand Name "
                  subtitle="SALE UPTO 50% OFF"
                  para="20 Jan 2023 to 31 Jan 2023"
                />
              </div>
              <div>
                <Card1
                  image={"img/offers4.jpg"}
                  title=" Brand Name "
                  subtitle="SALE UPTO 50% OFF"
                  para="20 Jan 2023 to 31 Jan 2023"
                />
              </div>
              <div>
                <Card1
                  image={"img/offers5.jpg"}
                  title=" Brand Name "
                  subtitle="SALE UPTO 50% OFF"
                  para="20 Jan 2023 to 31 Jan 2023"
                />
              </div>
            </OwlCarousel>
          </div>
          <div className="view-btn">
            <Link>
              <Button1 title="EXPLORE ALL OFFERS" />
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default Offers;
