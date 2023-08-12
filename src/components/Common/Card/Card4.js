import React, { Fragment } from "react";
import "./Card4.css";
import Container from "react-bootstrap/esm/Container";
import { ImLocation } from "react-icons/im";
import { BsStack } from "react-icons/bs";

const Card4 = ({ id, category, title, location, floor, image }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        category: category,
        title: title,
        location: location,
        floor: floor,
        image: image,
      },
    });
  };
  return (
    <div className="card4 py-md-5">
      <Fragment>
        <div className="card">
          <div>
            <h5> {category}</h5>
            <img className="img" src={image} />
            <div className="text text-center pt-md-4 pt-3 w-75 mx-auto">
              <h3>{title}</h3>
              <h4 className="mt-md-3">
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

export default Card4;
