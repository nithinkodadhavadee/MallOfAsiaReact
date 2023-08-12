import React, { Fragment } from "react";
import "./Brands.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Banner from "../components/Common/Banner";
import LaunchBanner from "../assets/Home/panache1.jpg";
import BrandsCategory from "../components/Brands/BrandsCategory";
import BrandHead from "../components/Brands/BrandHead";
import Carousel2 from "../components/Common/Carousel/Carousel2";
import Container from "react-bootstrap/esm/Container";
import Nhance from "../components/Home/Nhance";
import Notes from "../components/Brands/Notes";
import Form1 from "../components/Common/Form1";
import Dlogo from "../assets/Dine/dlogo.png";
import d1 from "../assets/Dine/d1.png";
import d2 from "../assets/Dine/d2.png";
import d3 from "../assets/Dine/d3.png";
import More from "../components/Common/More";

const DineDetails = (props) => {
  return (
    <Fragment>
      <div className="dine_detail">
        <Header />
        <Sidebar />
        <Banner
          title="A selection that leaves you spoilt for choice"
          para="Choose from a massive catalogue of the most well-known brands"
          image={LaunchBanner}
        />
        <BrandHead
          title="JAMIE OLIVER’s PIZZA"
          sub1="Ground Floor"
          sub2="Serves Alcohol"
          box="RESERVE A TABLE"
          logo={Dlogo}
          subtitle="About Jamie Oliver’s Pizza"
          para="Jamie's Pizzeria is all about fresh ingredients and bold flavours, served up in a buzzing, authentic and family-friendly environment. Jamie’s Pizzeria offers delicious artisan pizzas, garlic bread, appetisers, al Forno dishes and a few tasty extras, all made with superb produce, sourced as locally as possible. Our pizza dough is made fresh on-site, hand stretched, topped with the best ingredients and baked to perfection. Enjoy a range of classic Italian pizzas and local Indian-inspired favourites, all served with your choice of a classic or deep-pan crust. Whether you're looking for a quick and easy lunch, or somewhere to relax with friends and family, Jamie’s Pizzeria is comfortable, convenient and affordable. "
          t1="97143415590"
          t2="jamieolivers@gmail.com90"
          t3="10:00 - 23:00"
        />
        <Container>
          <div className="d-flex mt-md-5 mt-3">
            <h2> Additional Information </h2>
            <hr />
          </div>
        </Container>
        <More
          className="dine-d-more"
          image1={d2}
          image2={d1}
          image3={d3}
          title1="FOOD"
          title2="AMBIENCE"
          title3="MENU"
        />
        <Container>
          <div className="d-flex mt-md-4 mt-3 mb-md-0 mb-3">
            <h2> More Like This </h2>
            <hr />
          </div>
        </Container>
        <BrandsCategory />
        {/* <Nhance /> */}
        <Form1
          title="Have any questions about this restaurant?"
          para="Ask us and we'll be happy to help you!"
        />
      </div>
    </Fragment>
  );
};

export default DineDetails;
