import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Luxury.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import Form1 from "../components/Common/Form1";
import LuxuryBanner from "../assets/Home/panache1.jpg";
import LuxCategory from "../components/Luxury/LuxCategory";
import Carousel1 from "../components/Common/Carousel/Carousel1";
import LuxEvents from "../components/Luxury/LuxEvents";

const Luxury = (props) => {
  return (
    <Fragment>
      <div className="luxury">
        <Header />
        <Sidebar />
        <Banner
          title="Unveil Magnificence through Affluence"
          para="A Sight to Behold for our Esteemed Visitors"
          image={LuxuryBanner}
        />
        <LuxCategory />
        <div className="jewellery_watch">
          <img src="img/Luxury/jw.png" />
          {/* <h2>JEWELLERY AND <br/> WATCHES</h2> */}
        </div>
        <Carousel1
          title1="BOUGIE CAFE"
          para1="A Bohemian paradise serving Global cuisine"
          image1="img/Luxury/boug-cafe.png"
        />
        <LuxEvents />
        <Form1
          title="Luxury is a part of our identity."
          para="If you have any questions, ask us here!"
        />
      </div>
    </Fragment>
  );
};

export default Luxury;
