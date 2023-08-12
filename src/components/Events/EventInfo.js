import React, { Fragment } from "react";
import "./EventInfo.css";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Button2 from "../Common/Button/Button2";

const EventInfo = (props) => {
  return (
    <div className="event_info py-md-5 pt-3 mt-md-4">
      <Fragment>
        <Container>
          <div className="top d-flex w-100">
            <div>
              <h3> AC/DC & Guns N Roses tribute FT. The Rock Riders </h3>
              <p> Music Shows | English | 21yrs + | 2hrs </p>
            </div>
            <div className="ms-auto">
              <a>
                <Button2 title="BOOK" />
              </a>
            </div>
          </div>
          <div className="card shadow">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="img/Events/date.png" />
                <p className="mt-md-4 mt-3"> 25th Feb.2023 </p>
              </div>
              <div className="col-md-4 text-center">
                <img src="img/Events/time.png" />
                <p className="mt-md-4 mt-3"> 07:00pm</p>
              </div>
              <div className="col-md-4 text-center">
                <img src="img/Events/location.png" />
                <p className="mt-md-4 mt-3"> ABCD Zone </p>
              </div>
            </div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia
          </p>
          <div className="row my-md-5">
            <div className="col-md-4 px-1">
              <img src="img/Events/p1.png" />
            </div>
            <div className="col-md-4 px-1">
              <img src="img/Events/p2.png" />
            </div>
            <div className="col-md-4 px-1">
              <img src="img/Events/p3.png" />
            </div>
          </div>
          <div className="tc">
            <h3> Terms and Conditions</h3>
            <ul className="mt-md-4 mt-3">
              <li>
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              </li>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              </li>
            </ul>
          </div>
        </Container>
      </Fragment>
    </div>
  );
};

export default EventInfo;
