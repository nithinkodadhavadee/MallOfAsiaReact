import React, { Fragment } from "react";
import "./Collection.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

const Collection = ({ props }) => {
  return (
    <div className="collection py-md-5 py-4">
      <Fragment>
        <Container>
          <div className="d-flex mt-md-3">
            <h2> NEW COLLECTIONS </h2>
            <hr />
          </div>
        </Container>
        <Carousel className="mt-md-5">
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 px-1">
                <div className="sect1">
                  <img src="img/category1.jpg" />
                  <h3> Spring collection by Gucci - Explore now!! </h3>
                </div>
                <div className="sect2 mt-md-1">
                  <img src="img/category1.jpg" />
                  <h3> Winter collection by Nike - Check it out!! </h3>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="sect3">
                  <img src="img/category1.jpg" />
                  <h3> Femme collection by Dior - Explore!! </h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 px-1">
                <div className="sect1">
                  <img src="img/category1.jpg" />
                  <h3> Spring collection by Gucci - Explore now!! </h3>
                </div>
                <div className="sect2 mt-md-1">
                  <img src="img/category1.jpg" />
                  <h3> Winter collection by Nike - Check it out!! </h3>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="sect3">
                  <img src="img/category1.jpg" />
                  <h3> Femme collection by Dior - Explore!! </h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
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

export default Collection;
