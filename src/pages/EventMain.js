import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./EventMain.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import EventCard from "../components/Events/EventCard";
import Nhance from "../components/Home/Nhance";
import PastEvents from "../components/Events/PastEvent";
import Form1 from "../components/Common/Form1";

const EventMain = (props) => {
  return (
    <Fragment>
      <div className="event_main">
        <Header />
        <Sidebar />
        <Banner
          title="ALL ABOUT MUSIC - ITS ALL HERE"
          para="Turn on the feeling with all music event "
          image={LaunchBanner}
        />
        <EventCard />
        {/* <Nhance /> */}
        <PastEvents />
        <Form1 title="Do you have any queries about the events?" para="Write to us and we’ll get back to you!" />
      </div>
    </Fragment>
  );
};

export default EventMain;
