import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/moa-logo.png";
import "./Navbar.css";
import { Fragment } from "react";
import { BsSearch, BsHeartFill, BsFillHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [data, setData] = useState([]);
  const serverURL = "https://moa-admin-backend.onrender.com";
  useEffect(() => {
    // Make the API call
    axios.get(serverURL+'/header-footer/getHeader')
      .then(response => {
        console.log("header data")
        console.log(response.data.titleBarMenu)
        setData(response.data.titleBarMenu);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <Navbar className=" pt-md-5 d-none d-sm-block">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mt-md-4 ms-md-3">
            {data.map(item => (
              <Nav.Link href={item.link} key={item.id}>{item.name}</Nav.Link>
            ))}
            {/* <Nav.Link href="/launch">NEWLY LAUNCHED</Nav.Link>
            <Nav.Link href="/brands">BRANDS</Nav.Link>
            <Nav.Link href="/dine">DINE</Nav.Link>
            <Nav.Link href="/leisure">LEISURE</Nav.Link>
            <Nav.Link href="/luxury">LUXURY</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
        </Navbar.Collapse>
        <Navbar className="justify-content-end search-wish-bag">
            <Nav.Link href="#" className="mx-auto">
              {" "}
              Sign In / Register{" "}
            </Nav.Link>

            <NavbarBrand className="d-flex mx-auto">
              <Link href="#">
                {" "}
                <BsSearch />{" "}
              </Link>
              <Link href="#">
                {" "}
                <BsHeartFill />{" "}
              </Link>
              <Link href="#">
                {" "}
                <BsFillHandbagFill />
              </Link>
            </NavbarBrand>
          </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;
