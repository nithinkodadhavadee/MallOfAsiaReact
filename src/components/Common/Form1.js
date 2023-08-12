import React, { Fragment } from "react";
import "./Form1.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Form1 = ({ id, title, para }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
      },
    });
  };
  return (
    <div className="form1 py-md-5 pt-4 pb-3">
      <Container>
        <Fragment>
          <div className="row py-md-5">
            <div className="col-md-8">
              <div className="mt-md-5">
                <h2> {title}</h2>
                <p>{para}</p>
              </div>
            </div>
            <div className="col-md-4">
              <form>
                <div className="row">
                  <div className="col-md-6 pe-md-1">
                    <input type="text" placeholder="NAME" />
                  </div>
                  <div className="col-md-6 ps-md-1">
                    <input type="text" placeholder="PHONE NO" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" placeholder="EMAIL" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="4"
                      className="w-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <Link>
                    <input type="submit" className="submit_btn" name="SUBMIT" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      </Container>
    </div>
  );
};

export default Form1;
