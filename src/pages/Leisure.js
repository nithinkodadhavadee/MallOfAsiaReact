import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import "./Leisure.css";
import Header from "../components/Common/Navbar";
import Sidebar from "../components/Common/NavbarMob";
import Form1 from "../components/Common/Form1";
import LeisureTab from "../components/Common/TabBanner";

const Leisure = (props) => {
  return (
    <Fragment>
      <div className="leisure">
        <Header />
        <Sidebar />
        <LeisureTab />
        <Form1
          title="Have a question? Connect with us!"
          para="Write to us and we will reach out shortly."
        />
      </div>
    </Fragment>
  );
};

export default Leisure;
