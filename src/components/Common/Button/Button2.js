import React, { Fragment } from "react";
import "./Button2.css";
import Container from "react-bootstrap/esm/Container";

const Button2 = ({ id, title }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
      },
    });
  };
  return (
    <div className="button2">
      <Fragment>
        <button> {title} </button>
      </Fragment>
    </div>
  );
};

export default Button2;
