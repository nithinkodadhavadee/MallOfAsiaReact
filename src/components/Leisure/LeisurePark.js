import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Carousel3 from "../Common/Carousel/Carousel3";

const LeisurePark = (props) => {
  return (
    <Fragment>
      <div className="leisure_park">
        <Carousel3 image="img/Leisure/upcoming.png" />
      </div>
    </Fragment>
  );
};

export default LeisurePark;
