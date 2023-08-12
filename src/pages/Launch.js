import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./responsive.css";
import "./Launch.css";
import Header from "../components/Common/Navbar";
import BannerVideo from "../assets/Home/Banner-video.mp4";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Dummy from "../assets/Launch/coming.jpg";
import Carousel1 from "../components/Common/Carousel/Carousel1";
import Collection from "../components/Launch/Collection";
import Cooking from "../components/Launch/Cooking";
import Form1 from "../components/Common/Form1";

const Launch = (props) => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Banner
        title="BURBERRY"
        para="Coming soon to Mall of Asia. Stay tuned..."
        image={LaunchBanner}
      />
      <Carousel1
        title="NEWLY LAUNCHED"
        title1="Louis Vuitton opens its one of a kind store in Mall of Asia"
        image1={Dummy}
      />
      <Collection />
      <Carousel1
        title="COMING SOON"
        title1="Louis Vuitton opens its one of a kind store in Mall of Asia"
        image1={Dummy}
      />
      <Cooking />
      <Form1
        title="Have a question? Connect with us!"
        para="Write to us and we will reach out shortly."
      />
    </Fragment>
  );
};

export default Launch;
