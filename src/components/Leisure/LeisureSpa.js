import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import BrandsCategory from "../Brands/BrandsCategory";
import Card3 from "../Common/Card/Card3";
import Brand1 from "../../assets/Brands/i1.png";
import Brand2 from "../../assets/Brands/i2.png";
import Brand3 from "../../assets/Brands/i3.png";
import Brand4 from "../../assets/Brands/i4.png";
import Carousel3 from "../Common/Carousel/Carousel3";

const LeisureSpa = (props) => {
  return (
    <Fragment>
      <div className="leisure_spa mt-md-4 mt-3">
        <Container>
          <div className="row px-md-0 px-2">
            <div className="col-md-4 col-6 px-md-3 px-1">
              <Card3
                image={Brand1}
                location="The Abcd Zone"
                floor="First Floor"
              />
            </div>
            <div className="col-md-4 col-6 px-md-3 px-1">
              <Card3
                image={Brand2}
                location="The Abcd Zone"
                floor="First Floor"
              />
            </div>
            <div className="col-md-4 col-6 px-md-3 px-1">
              <Card3
                image={Brand3}
                location="The Abcd Zone"
                floor="First Floor"
              />
            </div>
          </div>
        </Container>
        <Carousel3 image="img/Leisure/spa.png" />
      </div>
    </Fragment>
  );
};

export default LeisureSpa;
