import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Inox from "../Home/Inox";
import InoxMob from "../Home/InoxMob";
import "../../pages/Leisure.css";
import Carousel3 from "../Common/Carousel/Carousel3";

const LeisureInox = (props) => {
  return (
    <Fragment>
      <div className="leisure_inox mt-md-5 mt-4">
        <Inox />
        <InoxMob />
        <Carousel3 title="UPCOMING MOVIES" subtitle="Coming to theatres on 25th March 2023" button="PRE-BOOK" image="img/Leisure/upcoming.png" />
      </div>
    </Fragment>
  );
};

export default LeisureInox;
