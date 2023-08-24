import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import "./BrandsCategory.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Card3 from "../Common/Card/Card3";
import Brand1 from "../../assets/Brands/i1.png";
import Brand2 from "../../assets/Brands/i2.png";
import Brand3 from "../../assets/Brands/i3.png";
import Brand4 from "../../assets/Brands/i4.png";
import Button1 from "../Common/Button/Button1";

const BrandsCategory = ({ props }) => {
  const [data, setData] = useState([]);
  const serverURL = "https://moa-admin-backend.onrender.com";
  useEffect(() => {
    // Make the API call
    axios.get(serverURL+'/brands/list')
      .then(response => {
        console.log("header data")
        console.log("brands")
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div className="brands_category py-md-5 pb-3">
      <Fragment>
        <Container>
          <div className="row px-md-0 px-2">
            {data.map(item => (
              <div className="col-md-3 col-6 px-md-3 px-1">
                <a href={"brand-detail/?module=brands&title="+item.title}>
                  <Card3 category={item.category} image={item.logo} location={item.email} floor={item.floor}  />
                </a>
              </div>
            ))}
            <div className="col-md-3 col-6 px-md-3 px-1">
                <Card3 category="FASHION" image={Brand1} location="The Abcd Zone" floor="First Floor"  />
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
                <Card3 category="FASHION" image={Brand2} location="The Abcd Zone" floor="First Floor"  />
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
                <Card3 category="FASHION" image={Brand3} location="The Abcd Zone" floor="First Floor"  />
            </div>
            <div className="col-md-3 col-6 px-md-3 px-1">
                <Card3 category="FASHION" image={Brand4} location="The Abcd Zone" floor="First Floor"  />
            </div>  
          </div>
          <Nav.Link href="/brand-detail"> <Button1 title="VIEW MORE" /> </Nav.Link>
        </Container>
      </Fragment>
    </div>
  );
};

export default BrandsCategory;
