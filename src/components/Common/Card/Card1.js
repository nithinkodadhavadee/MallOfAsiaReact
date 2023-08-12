import React, { Fragment } from "react";
import "./Card1.css";
import Container from "react-bootstrap/esm/Container";

const Card1 = ({ id, title, subtitle, para, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        subtitle: subtitle,
        para: para,
        image: image,
      },
    });
  };
  return (
    <div className="card1">
      <Fragment>
        <div className="card">
          <div>
            <img className="img" src={image} />
          </div>
          <div className="text">
            <h4> {title} </h4>
            <h3> {subtitle} </h3>
            <p className="mt-md-2 mt-2">
              <span> Validity: </span> {para}
            </p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card1;
