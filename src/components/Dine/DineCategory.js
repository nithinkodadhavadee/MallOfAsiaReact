import React, { Fragment,  useState, useEffect } from "react";
import axios from 'axios';
import "./DineCategory.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Card4 from "../Common/Card/Card4";
import Dine1 from "../../assets/Dine/dine1.png";
import Dine2 from "../../assets/Dine/dine2.png";
import Dine3 from "../../assets/Dine/dine3.png";
import Button1 from "../Common/Button/Button1";

const DineCategory = ({ props }) => {
  const [data, setData] = useState([]);
  const serverURL = "https://moa-admin-backend.onrender.com";
  useEffect(() => {
    // Make the API call
    axios.get(serverURL+'/api/dine')
      .then(response => {
        console.log("dine data")
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div className="dine_category py-md-5 pb-4">
      <Fragment>
        <Container>
          <div className="row">
            {data.map(item => (
             <div className="col-md-4">
                <a href={"dine-detail/?module=brands&title="+item.title}>
                  <Card4 category={item.category} title={item.title} image={item.image} location="The Abcd Zone" floor={item.floor}  />
                </a>
                
            </div>
            ))}
            <div className="col-md-4">
                <Card4 category="CAFE" title="CAFE TESU" image={Dine1} location="The Abcd Zone" floor="First Floor"  />
            </div>
            <div className="col-md-4">
                <Card4 category="RESTAURANT" title="BUKHARA" image={Dine2} location="The Abcd Zone" floor="First Floor"  />
            </div>
            <div className="col-md-4">
                <Card4 category="FINE-DINE" title="ANARDANA" image={Dine3} location="The Abcd Zone" floor="First Floor"  />
            </div>
          </div>
          <Nav.Link href="/dine-detail"> <Button1 title="VIEW MORE" /> </Nav.Link>
        </Container>
      </Fragment>
    </div>
  );
};

export default DineCategory;
