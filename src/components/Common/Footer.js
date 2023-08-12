import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Footer.css";
import Flogo from "../../assets/flogo.png";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
  
  const [col1Data, setCol1Data] = useState([]);
  const [col2Data, setCol2Data] = useState([]);
  const [col3Data, setCol3Data] = useState([]);
  
  const serverURL = "https://moa-admin-backend.onrender.com";
  useEffect(() => {
    // Make the API call
    axios.get(serverURL+'/header-footer/getFooter')
      .then(response => {
        console.log("Can you see this")
        console.log(response.data)
        
        const { menu1, menu2, menu3 } = response.data;
        setCol1Data(menu1);
        setCol2Data(menu2);
        setCol3Data(menu3);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <Fragment>
      <div className="footer py-md-5 py-4">
        <Container className="pt-md-4">
          <div className="row mb-md-4">
            <div className="col-md-3">
              <img className="mt-md-5" src={Flogo} />
            </div>
            <div className="col-md-6">
              <div className="row my-md-0 mt-4 mb-3">
                <div className="col-md-4 col-6">
                  {col1Data.map(item => (
                    <Link to={item.link} key={item.id}>
                      {}
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
                <div className="col-md-4 col-6">
                {col2Data.map(item => (
                    <Link to={item.link} key={item.id}>
                      {}
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
                <div className="col-md-4">
                {col3Data.map(item => (
                    <Link to={item.link} key={item.id}>
                      {}
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6252894084078!2d77.6963968!3d12.995801699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110b04a3be4b%3A0xcffb252dab2e9643!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1689326543450!5m2!1sen!2sin"
            
                className="mb-md-3 mb-3 w-100"
                height="150"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <label>
                Island Star Mall Developers Pvt. Ltd. ,<br /> Phoenix Marketcity
                Bangalore, Whitefield Main Road,
                <br /> Mahadevpura, Bangalore - 560048
              </label>
            </div>
          </div>
          <hr />
          <div className="subscribe d-flex">
            <h3>SUBSCRIBE TO OUR NEWSLETTER FOR OFFERS AND MORE</h3>
            <div className="d-flex ">
              <input type="text" className="form-control" />
              <Link>
                {" "}
                <button type="button">
                  {" "}
                  <BsChevronRight />{" "}
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Footer;
