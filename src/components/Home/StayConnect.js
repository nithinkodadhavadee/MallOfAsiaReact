import React, { Component, Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./StayConnect.css";
import Container from "react-bootstrap/esm/Container";

export class StayConnect extends Component {
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
      <Fragment>
        <div className="connect pt-md-4 pb-md-0 py-4">
          <Container>
            <div class="container-fluid pt-md-4">
              <div className="d-flex">
                <h2> STAY CONNECTED </h2>
                <hr />
              </div>
              <OwlCarousel
                items={3}
                className="owl-theme mt-md-5 mt-4"
                loop
                nav
                autoplay
                margin={5}
                responsive={this.state.responsive}
              >
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect1.jpg"} />
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect2.jpg"} />
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect3.jpg"} />
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect4.jpg"} />
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect5.jpg"} />
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img className="img" src={"img/connect6.jpg"} />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default StayConnect;
