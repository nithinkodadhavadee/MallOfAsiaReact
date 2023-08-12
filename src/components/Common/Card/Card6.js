import React, { Fragment } from "react";
import "./Card6.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillLike } from "react-icons/ai";

const Card6 = ({ id, title, para, small, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        small: small,
        image: image,
      },
    });
  };
  return (
    <div className="card6 py-md-5 pt-3">
      <Fragment>
        <div className="card shadow">
          <img src={image} />
          <div className="icons">
            <AiOutlineHeart className="me-md-2 me-2" />
            <AiOutlineShareAlt />
          </div>
          <div className="text">
            <h3> {title}</h3>
            <p>{para} </p>
            <div className="d-flex">
              <AiFillLike />
              <small>{small}</small>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card6;
