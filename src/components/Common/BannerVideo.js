import React, { Fragment } from "react";
import "./BannerVideo.css";
import Container from "react-bootstrap/esm/Container";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const BannerVideo = ({ id, title, para, video }) => {
  const addBanner = () => {
    dispatchEvent({
      item: {
        id: id,
        title: title,
        para: para,
        video: video,
      },
    });
  };
  return (
    <div className="banner_video">
      <Fragment>
        <video className="w-100" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <Container className="banner-text">
          <div className="row">
            <div className="col-md-8">
              <h1> {title} </h1>
              <p className="mt-md-4 mt-2">
                {para}
              </p>
            </div>
            <div className="col-md-4">
              <div class="social-media">
                <Link href="">
                  {" "}
                  <BiLogoFacebook />{" "}
                </Link>
                <Link href="">
                  {" "}
                  <BiLogoTwitter />{" "}
                </Link>
                <Link href="">
                  {" "}
                  <BiLogoInstagram />
                </Link>
                <Link href="">
                  {" "}
                  <BiLogoYoutube />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default BannerVideo;
