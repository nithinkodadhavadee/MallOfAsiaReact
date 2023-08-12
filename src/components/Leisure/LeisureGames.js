import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Help from "../Home/Help";
import Card5 from "../Common/Card/Card5";

const LeisureGames = (props) => {
  return (
    <Fragment>
      <div className="leisure_games mt-md-4">
        <div className="main">
          <Container>
            <Card5
              title="FUNCITY"
              para="Fun City forms an integral part of the society by providing a platform to children from 1-12 years old for social interactions and active play in a safe, secure and conveniently accessed location. Fun City has a simple invitation to one and all; Come, play!"
              button="KNOW MORE"
              image="img/Leisure/game1.png"
            />
            <div className="reverse">
              <Card5
                title="TIMEZONE"
                para="Fun City forms an integral part of the society by providing a platform to children from 1-12 years old for social interactions and active play in a safe, secure and conveniently accessed location. Fun City has a simple invitation to one and all; Come, play!"
                button="KNOW MORE"
                image="img/Leisure/game2.png"
              />
            </div>
            <Card5
              title="HAMLEYS"
              para="Fun City forms an integral part of the society by providing a platform to children from 1-12 years old for social interactions and active play in a safe, secure and conveniently accessed location. Fun City has a simple invitation to one and all; Come, play!"
              button="KNOW MORE"
              image="img/Leisure/game1.png"
            />
          </Container>
        </div>
        {/* <Nhance /> */}
        <Help />
      </div>
    </Fragment>
  );
};

export default LeisureGames;
