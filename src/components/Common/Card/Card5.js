import React, { Fragment } from "react";
import "./Card5.css";
import Container from "react-bootstrap/esm/Container";
import { ImLocation } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import Button2 from "../Button/Button2";

const Card5 = ({ id, title, para, button, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        button: button,
        image: image,
      },
    });
  };
  return (
    <div className="card5 py-md-5 pt-3">
      <Fragment>
        <div className="row">
          <div className="col-md-7">
            <img src={image} />
          </div>
          <div className="col-md-5">
            <div className="text">
              <h2> {title}</h2>
              <p>{para} </p>
              <a href="">
                <Button2 title={button} />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card5;
