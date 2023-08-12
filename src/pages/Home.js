import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./responsive.css";
import "./Home.css";
import Header from "../components/Common/Navbar";
import Panache from "../components/Home/Panache";
import Inox from "../components/Home/Inox";
import BannerV from "../assets/Home/Banner-video.mp4";
import Grandeur from "../components/Home/Grandeur";
import Categories from "../components/Home/Categories";
import Offers from "../components/Home/Offers";
import Events from "../components/Home/Events";
import Memoirs from "../components/Home/Memoirs";
import StayConnect from "../components/Home/StayConnect";
import Help from "../components/Home/Help";
import Nhance from "../components/Home/Nhance";
import InoxMob from "../components/Home/InoxMob";
import Sidebar from "../components/Common/NavbarMob";
import BannerVideo from "../components/Common/BannerVideo";

import Connect1 from "../assets/Home/panache1.jpg";

const Home = (props) => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <BannerVideo
        video={BannerV}
        title="CALL OF INDULGENCE "
        para="Extravagance now has a place to call home. Welcome to Bangalore’s
              first of its kind premium luxury lifestyle destination – a retail
              atmosphere like no other. An exhilarating environment and mecca of
              shopping, dining and leisure. And that’s not all."
      />
      <Panache />
      <Grandeur />
      <Categories />
      <Inox />
      <InoxMob />
      <Offers />
      {/* <Nhance /> */}
      <Events />
      <Memoirs />
      <StayConnect image1={Connect1} />
      <Help />
    </Fragment>
  );
};

export default Home;
