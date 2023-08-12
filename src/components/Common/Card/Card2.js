import React, { Fragment } from "react";
import "./Card2.css";
import Container from "react-bootstrap/esm/Container";

const Card2 = ({ id, title, para, image }) => {
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
    <div className="card2">
      <Fragment>
        <div className="card">
          <img className="img" src={image} />
          <div className="text">
            <h3>{title}</h3>
            <p>{para}</p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card2;
