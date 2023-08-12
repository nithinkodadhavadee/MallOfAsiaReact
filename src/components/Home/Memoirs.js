import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Memoirs.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";
import Card2 from "../Common/Card/Card2";

export class Memoirs extends Component {
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
      <div className="memoirs pt-md-5 pb-md-0 py-4">
        <Container>
          <div class="container-fluid pt-md-4">
            <div className="d-flex">
              <h2> MEMOIRS </h2>
              <hr />
            </div>
            <OwlCarousel
              items={3}
              className="owl-theme mt-md-5 mt-3"
              loop
              nav
              autoplay
              margin={25}
              responsive={this.state.responsive}
            >
              <div>
                <Card2
                  image={"img/memoirs1.jpg"}
                  title="Lorem ipsum dolor sit amet, consectetur ipsum adipiscing
                      elit, sed do eiusmod tempor"
                  para="6 Min. read"
                />
              </div>
              <div>
                <Card2
                  image={"img/memoirs2.jpg"}
                  title="Lorem ipsum dolor sit amet, consectetur ipsum adipiscing
                      elit, sed do eiusmod tempor"
                  para="6 Min. read"
                />
              </div>
              <div>
                <Card2
                  image={"img/memoirs3.jpg"}
                  title="Lorem ipsum dolor sit amet, consectetur ipsum adipiscing
                      elit, sed do eiusmod tempor"
                  para="6 Min. read"
                />
              </div>
              <Card2
                image={"img/memoirs2.jpg"}
                title="Lorem ipsum dolor sit amet, consectetur ipsum adipiscing
                      elit, sed do eiusmod tempor"
                para="6 Min. read"
              />
            </OwlCarousel>
          </div>
          <div className="view-btn">
            <Link>
              <Button1 title="READ MORE" />
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default Memoirs;
