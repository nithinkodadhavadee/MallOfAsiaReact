import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";
import { Cont, NavigationContainer, Img } from "./elements";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Inox.css";
import Button1 from "../Common/Button/Button1";

class Inox extends React.Component {
  state = {
    active: 2,
  };

  onNext = () => {
    const { active } = this.state;
    const { images } = this.props;
    if (active < images.length - 1) {
      this.setState({
        active: active + 1,
      });
    }
  };

  onPrev = () => {
    const { active } = this.state;
    if (active > 0) {
      this.setState({
        active: active - 1,
      });
    }
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="inox d-none d-sm-block pt-md-4 pb-md-5">
        <div className="container w-100">
          <div className="d-flex">
            <h2> INOX MOVIES</h2>
            <hr />
          </div>
          <div className="row align-items-center w-100 justify-content-center">
            <Cont>
              <Coverflow
                width={500}
                height={800}
                displayQuantityOfSide={2}
                enableHeading={false}
                active={active}
                currentFigureScale={1.9}
                otherFigureScale={1.4}
              >
                {images.map(({ id, url, price }, key) => (
                  <Img src={url} alt="card" data-action={url} />
                ))}
              </Coverflow>
              <NavigationContainer>
                {active !== 0 && (
                  <div className="nav-btn" onClick={this.onPrev}>
                    <BsArrowLeft />
                  </div>
                )}

                {active < images.length - 1 && (
                  <div className="nav-btn" onClick={this.onNext}>
                    <BsArrowRight />
                  </div>
                )}
              </NavigationContainer>
            </Cont>
          </div>
          <div className="check-btn">
            <Link>
              <Button1 title=" CHECK OUT ALL SHOWS" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Inox.defaultProps = {
  images: [
    {
      id: "23123",
      url: "https://demowebs.in/wp-content/uploads/2023/06/2-6.jpg",
      price: "5454",
    },
    {
      id: "2313",
      url: "https://demowebs.in/wp-content/uploads/2023/06/3-4.jpg",
      price: "5454",
    },
    {
      id: "3123",
      url: "https://demowebs.in/wp-content/uploads/2023/06/2-6.jpg",
      price: "5454",
    },
    {
      id: "2323",
      url: "https://demowebs.in/wp-content/uploads/2023/06/3-4.jpg",
      price: "5454",
    },
    {
      id: "2123",
      url: "https://demowebs.in/wp-content/uploads/2023/06/3-4.jpg",
      price: "5454",
    },
    {
      id: "3101",
      url: "https://demowebs.in/wp-content/uploads/2023/06/2-6.jpg",
      price: "5454",
    },
  ],
};

export default Inox;
