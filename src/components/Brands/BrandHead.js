import React, { Fragment } from "react";
import "./BrandHead.css";
import Container from "react-bootstrap/esm/Container";
import Carousel2 from "../Common/Carousel/Carousel2";

const BrandHead = ({ id, title, sub1, sub2, subtitle, para, logo, box, t1,t2,t3 }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        sub1:sub1,
        sub2:sub2,
        subtitle:subtitle,
        para: para,
        logo:logo,
        box:box,
        t1:t1,
        t2:t2,
        t3:t3,
      },
    });
  };  
  return (
    <Fragment>
      <div className="brand_detail_head pt-md-5">
        <Container>
          <div className="row mt-md-4">
            <div className="col-md-7">
              <div className="">
                <h2>{title} </h2>
                <div className="d-flex mt-md-3 mt-2">
                  <h4> {sub1} </h4><span> | </span><h4> {sub2} </h4>
                </div>
                <h5 className="mt-md-4 mt-3"> {box} </h5>
              </div>
            </div>
            <div className="col-md-5">
              <div className="logo-card">
                <img src={logo} />
              </div>
            </div>
          </div>
          <div className="d-flex mt-md-4 pt-md-5 mt-4">
            <h3> {subtitle} </h3>
            <hr />
          </div>
          <p className="mt-md-3 mt-">
            {para}
          </p>
          <div className="row w-75 mx-auto text-center mt-md-5 mt-4">
            <div className="col-md-4">
              <h6> Contact Info </h6>
              <a href="">
                <p> {t1} </p>
              </a>
            </div>
            <div className="col-md-4">
              <h6>E-mail</h6>
              <a href="">
                <p> {t2} </p>
              </a>
            </div>
            <div className="col-md-4">
              <h6> Store Timings</h6>
              <p className="text-center"> {t3} </p>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default BrandHead;
