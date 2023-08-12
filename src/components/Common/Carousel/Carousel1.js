import React, { Fragment } from "react";
import "./Carousel1.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

const Carousel1 = ({
  id,
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  image1,
  image2,
  image3,
  image4,
  image5,
  para1,
  para2,
}) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        title1: title1,
        title2: title2,
        title3: title3,
        title4: title4,
        title5: title5,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        para1: para1,
        para2: para2,
      },
    });
  };
  return (
    <div className="carousel1 py-md-5">
      <Fragment>
        <Container>
          <div className="d-flex pt-md-4">
            <h2> {title} </h2>
            <hr />
          </div>
        </Container>
        <Carousel className="mt-md-5 mt-3">
          <Carousel.Item>
            <img src={image1} />
            <div className="text">
              <h3> {title1}</h3>
              <p>{para1} </p>
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

export default Carousel1;
