import React, { Fragment } from "react";
import "../../pages/EventMain.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Card6 from "../Common/Card/Card6";

const EventCard = (props) => {
  return (
    <div className="event_card pt-md-5 pt-3 mt-md-4">
      <Fragment>
        <Container>
          <div className="d-flex">
            <h2> COMING TO YOU THIS MONTH </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <a href="/event-details">
                <Card6
                  title="Rock and roll fest"
                  para="March 1st | 5PM - 9PM Onwards &nbsp; The ABCD Zone"
                  small="100 people have liked this event"
                  image="img/Events/event1.png"
                />
              </a>
            </div>

            <div className="col-md-4">
              <a href="/event-details">
                <Card6
                  title="Rock and roll fest"
                  para="March 1st | 5PM - 9PM Onwards &nbsp; The ABCD Zone"
                  small="100 people have liked this event"
                  image="img/Events/event2.png"
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="/event-details">
                <Card6
                  title="Rock and roll fest"
                  para="March 1st | 5PM - 9PM Onwards &nbsp; The ABCD Zone"
                  small="100 people have liked this event"
                  image="img/Events/event3.png"
                />
              </a>
            </div>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default EventCard;
