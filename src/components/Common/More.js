import React, { Fragment } from "react";
import "./More.css";
import Container from "react-bootstrap/esm/Container";

const More = ({ id, title1, title2, title3, image1, image2, image3 }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title1: title1,
        title2: title2,
        title3: title3,
        image1: image1,
        image2: image2,
        image3: image3,
      },
    });
  };
  return (
    <div className="more py-md-5 pt-4">
      <Fragment>
        <Container>
          <div className="d-flex mt-md-4 pb-md-5">
            <h2>MORE FROM US </h2>
            <hr />
          </div>
          <div className="row pb-md-5 mt-md-0 mt-3">
            <div className="col-md-6">
              <img src={image1} />
              <div className="text">
                <h3> {title1} </h3>
              </div>
            </div>
            <div className="col-md-6">
              <img src={image2} />
              <div className="text">
                <h3> {title2} </h3>
              </div>
            </div>
            <div className="col-md-6 opt">
              <img src={image3} />
              <div className="text">
                <h3> {title3} </h3>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default More;
