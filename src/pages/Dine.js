import React, { Fragment } from "react";
import "./Dine.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import Foodthopia from "../assets/Dine/foodthopia.png";
import More1 from "../assets/Home/panache1.jpg";
import Help from "../components/Home/Help";
import More from "../components/Common/More";
import Form1 from "../components/Common/Form1";
import DineCategory from "../components/Dine/DineCategory";

const Dine = (props) => {
  return (
    <Fragment>
      <div className="dine">
        <Header />
        <Sidebar />
        <Banner
          title="Satisfy your Exquisite Palette"
          para="The most diverse selection of dining options that appeal to the most sophisticated connoisseurs"
          image={LaunchBanner}
        />  
        <DineCategory />
        <div className="foodthopia">
            <img src={Foodthopia} />
            <h2>FOODTHOPIA - THE FOOD COURT </h2>
        </div>
        <More
          title1="OUR SERVICES"
          title2="BRANDS"
          image1={More1}
          image2={More1}
        />
        <Help />
        <Form1 title="Are you having trouble deciding where to eat? " para="Ask us and we'll be happy to help you choose!" />
      </div>
    </Fragment>
  );
};

export default Dine;
