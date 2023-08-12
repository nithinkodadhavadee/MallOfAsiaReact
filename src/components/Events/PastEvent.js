import React, { Fragment } from "react";
import "../../pages/EventMain.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const PastEvents = (props) => {
  return (
    <div className="past_events py-md-5 pt-3 mt-md-4">
      <Fragment>
        <Container>
          <div className="">
            <h2 className="w-100"> EXPLORE OUR PAST EVENTS </h2>
          </div>
          <div className="row my-md-5">
            <div className="col-md-3 px-1">
                <img src="img/Events/p1.png" />
            </div>
            <div className="col-md-3 px-1">
                <img src="img/Events/p2.png" />
            </div>
            <div className="col-md-3 px-1">
                <img src="img/Events/p3.png" />
            </div>
            <div className="col-md-3 px-1">
                <img src="img/Events/p4.png" />
            </div>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default PastEvents;
