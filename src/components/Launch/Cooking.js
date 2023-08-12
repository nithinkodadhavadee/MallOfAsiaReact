import React, { Fragment } from "react";
import "./Cooking.css";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Button2 from "../Common/Button/Button2";

const Cooking = ({ props }) => {
  return (
    <div className="cooking py-md-5 py-4">
      <Fragment>
        <Container>
          <div className="d-flex mt-md-3">
            <h2> WHAT’s COOKING </h2>
            <hr />
          </div>
        </Container>
        <Carousel className="mt-md-5 mt-2">
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 px-1">
                <div className="">
                  <img src="img/launch/cook1.jpg" />
                  <div className="text">
                    <h3> Hasselback Tomato Caprese </h3>
                  </div>
                  <Link>
                    {" "}
                    <Button2 title="CHECK OUT !" />{" "}
                  </Link>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="">
                  <img src="img/launch/cook2.jpg" />
                  <div className="text">
                    <h3> Endives with Shrimp Salad </h3>
                  </div>
                  <Link>
                    {" "}
                    <Button2 title="CHECK OUT !" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 px-0">
                <div className="">
                  <img src="img/launch/cook1.jpg" />
                  <div className="text">
                    <h3> Hasselback Tomato Caprese </h3>
                  </div>
                  <Link>
                    {" "}
                    <Button2 title="CHECK OUT !" />{" "}
                  </Link>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div className="">
                  <img src="img/launch/cook2.jpg" />
                  <div className="text">
                    <h3> Endives with Shrimp Salad </h3>
                  </div>
                  <Link>
                    {" "}
                    <Button2 title="CHECK OUT !" />{" "}
                  </Link>
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

export default Cooking;
