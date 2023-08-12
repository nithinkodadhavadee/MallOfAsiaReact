import React, { Fragment } from "react";
import "./Help.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";

const Help = (props) => {
  return (
    <Fragment>
      <div className="help pt-md-0 py-4">
        <Container className="pt-md-4">
          <div className="d-flex">
            <h2> NEED HELP? </h2>
            <hr />
          </div>
          <div className="row mt-md-3 mt-4 mb-md-4">
            <div className="col-md-6">
              <img src="img/help.jpg" />
              <div className="gborder"></div>
            </div>
            <div className="col-md-6">
              <div className="text">
                <div>
                  <h3>A Personal Guide on your Smartphone </h3>
                  <p>
                    {" "}
                    The Mall of Asia Digital Concierge service is your personal
                    secretary. It will assist you in making informed shopping
                    decisions and notifies you of any limited-time offers and
                    new arrivals at the mall. It also helps you choose the ideal
                    gift for your loved ones for any occasion. All you need to
                    do is type in your query and relax as our concierge answers
                    your queries. Just scan the QR code to start using the
                    Digital Concierge.
                  </p>
                  <Link>
                    <Button1 title="CHAT WITH CONCIERGE" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Help;
