import React, { Fragment } from "react";
import "./Nhance.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Nhance = (props) => {
  return (
    <Fragment>
      <div className="nhance py-md-5">
        <Container className="py-md-4">
          <div className="d-flex">
            <h2> NHANCE </h2>
            <hr />
          </div>
          <div className="mt-md-5">
            <img src="img/nhance.jpeg" className="w-100" />
          </div>
          <div className="text">
            <p>
              Experience the real feeling of magnificence through our NHance <br/>
              Mobile Application. Make your Shopping more rewarding and earn <br/>
              points for every purchase that you make.
            </p>
            <Link> <button type="button"> KNOW MORE </button></Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Nhance;
