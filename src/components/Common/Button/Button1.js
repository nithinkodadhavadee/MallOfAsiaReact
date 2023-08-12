import React, { Fragment } from "react";
import "./Button1.css";
import Container from "react-bootstrap/esm/Container";

const Button1 = ({ id, title }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
      },
    });
  };
  return (
    <div className="button1">
      <Fragment>
        <button> {title} </button>
      </Fragment>
    </div>
  );
};

export default Button1;
