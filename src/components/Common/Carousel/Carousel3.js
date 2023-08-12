import React, { Fragment } from "react";
import "./Carousel3.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import Button2 from "../Button/Button2";

const Carousel3 = ({ id, title, subtitle, image, button }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        subtitle: subtitle,
        image: image,
        button: button,
      },
    });
  };
  return (
    <div className="carousel3 pt-md-5">
      <Fragment>
        <Container>
          <div className="d-flex pt-md-4">
            <h2> {title} </h2>
            <hr />
          </div>
        </Container>
        <Carousel className="mt-md-5 mt-3">
          <Carousel.Item>
            <img src={image} />
            <div className="text">
              <Container>
                <h3> {subtitle}</h3>
                <a href="">
                  <Button2 title={button} />
                </a>
              </Container>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img src={image2} />
            <h3> {title2}</h3>
            <p>{para2} </p>
          </Carousel.Item> */}
          {/* <Carousel.Item>
            <img src={image3} />
            <h3> {title3}</h3>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image4} />
            <h3> {title4}</h3>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image5} />
            <h3> {title5}</h3>
          </Carousel.Item> */}
        </Carousel>
      </Fragment>
    </div>
  );
};

export default Carousel3;
