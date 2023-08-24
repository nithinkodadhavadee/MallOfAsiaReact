import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
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
  
  let params = new URLSearchParams(window.location.search);
  let module = params.get('module');
  let title = params.get('title')
  console.log("module:", module)
  console.log("title:", title)
  console.log("woh din bhi kya din the")

  const [data, setData] = useState([]);
  const serverURL = "https://moa-admin-backend.onrender.com";
  useEffect(() => {
    // Make the API call
    axios.get(serverURL+'/?module=brands&title='+title)
      .then(response => {
        console.log("two days seriously thinking")
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount


  return (
    <Fragment>
      <div className="brand_detail">
        <Header />
        <Sidebar />
        <Banner
          title="A selection that leaves you spoilt for choice"
          para="Choose from a massive catalogue of the most well-known brands"
          image={data.background}
        />
        <BrandHead
          title={data.title}
          sub1={data.floor}
          sub2="ABCD Zone"
          box={data.category}
          logo={data.logo}
          subtitle={"About "+data.title}
          para={data.about}
          t1={data.contact}
          t2={data.email}
          t3={data.timings}
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
