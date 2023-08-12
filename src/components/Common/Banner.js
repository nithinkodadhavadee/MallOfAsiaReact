import React, { Fragment } from "react";
import "./Banner.css";
import Container from "react-bootstrap/esm/Container";

const Banner = ({ id, title, para, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        image: image,
      },
    });
  };
  return (
    <div className="banner">
      <Fragment>
        <img src={image} />
        <div className="overlay"></div>

        <Container className="banner-text">
          <div className="row">
            <div className="col-md-12">
              <h1>{title}</h1>
              <p className="mt-md-4 mt-2">{para}</p>
            </div>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default Banner;
