import React, { Fragment } from "react";
import "./Brands.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import More1 from "../assets/Home/panache1.jpg";
import Help from "../components/Home/Help";
import BrandsCategory from "../components/Brands/BrandsCategory";
import Mall from "../components/Brands/Mall";
import More from "../components/Common/More";
import Form1 from "../components/Common/Form1";

const Brands = (props) => {
  return (
    <Fragment>
      <div className="brands">
        <Header />
        <Sidebar />
        <Banner
          title="A selection that leaves you spoilt for choice"
          para="Choose from a massive catalogue of the most well-known brands"
          image={LaunchBanner}
        />
        <BrandsCategory />
        <Mall />
        <More
          title1="OUR SERVICES"
          title2="DINING OPTIONS"
          image1={More1}
          image2={More1}
        />
        <Help />
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default Brands;
