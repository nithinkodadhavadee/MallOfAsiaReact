import React, { Fragment } from "react";
import "./Card3.css";
import Container from "react-bootstrap/esm/Container";
import { ImLocation } from "react-icons/im";
import { BsStack } from "react-icons/bs";

const Card3 = ({ id, category, location, floor, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        category: category,
        location: location,
        floor: floor,
        image: image,
      },
    });
  };
  return (
    <div className="card3 py-md-5">
      <Fragment>
        <div className="card shadow-sm">
          <div>
            <h3> {category}</h3>
            <img className="img" src={image} />
            <div className="text">
              <h4>
                {" "}
                <ImLocation /> {location}
              </h4>
              <h4>
                {" "}
                <BsStack /> {floor}
              </h4>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Card3;
