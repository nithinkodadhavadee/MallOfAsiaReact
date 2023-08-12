import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
// import "./EventMain.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import EventCard from "../components/Events/EventCard";
import Nhance from "../components/Home/Nhance";
import PastEvents from "../components/Events/PastEvent";
import Form1 from "../components/Common/Form1";
import EventInfo from "../components/Events/EventInfo";

const EventDetails = (props) => {
  return (
    <Fragment>
      <div className="event_details">
        <Header />
        <Sidebar />
        <Banner
          title="ALL ABOUT MUSIC - ITS ALL HERE"
          para="Turn on the feeling with all music event "
          image={LaunchBanner}
        />
        <EventInfo />
        {/* <Nhance /> */}
        <Container>
            <h2 className="w-100 mt-md-4 mt-4"> UPCOMING EVENTS </h2>
        </Container>
        <EventCard />
        <Form1 title="Do you have any queries about the events?" para="Write to us and we’ll get back to you!" />
      </div>
    </Fragment>
  );
};

export default EventDetails;
