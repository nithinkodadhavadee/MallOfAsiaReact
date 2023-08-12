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
import Brand1 from "../assets/Brands/brooks-logo.png";

const BrandDetails = (props) => {
  return (
    <Fragment>
      <div className="brand_detail">
        <Header />
        <Sidebar />
        <Banner
          title="A selection that leaves you spoilt for choice"
          para="Choose from a massive catalogue of the most well-known brands"
          image={LaunchBanner}
        />
        <BrandHead
          title=" BROOKS BROTHERS"
          sub1="Ground Floor"
          sub2="ABCD Zone"
          box="BRAND CATALOGUE"
          logo={Brand1}
          subtitle="About Brooks Brothers"
          para="Established in 1818, Brooks Brothers was the first to offer
          ready-to-wear clothing and has continued throughout history with
          iconic product introductions including: seersucker, madras, original
          button-down collar and the non-iron shirt. Two centuries later,
          Brooks Brothers is proud to uphold the same traditions and values
          and to be the destination for ladies and gentlemen from every
          generation. Since its founding 200 years ago in New York, Brooks
          Brothers has become a legendary retailer with over 500 stores
          worldwide while maintaining a steadfast commitment to exceptional
          service, quality, style and value."
          t1="97143415590"
          t2="help@brooksbrothers.com"
          t3="10:00 - 23:00"
        />
        <Carousel2 />
        <Container>
          <div className="d-flex mt-md-4 mt-0">
            <h2> More Like This </h2>
            <hr />
          </div>
        </Container>
        <BrandsCategory />
        {/* <Nhance /> */}
        <Notes />
        <Form1 title="Want to know more about this brand?" />
      </div>
    </Fragment>
  );
};

export default BrandDetails;
