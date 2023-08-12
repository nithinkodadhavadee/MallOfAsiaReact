import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Note1 from "../../assets/Brands/note1.png";
import Note2 from "../../assets/Brands/note2.png";
import "./Notes.css";

function Notes() {
  return (
    <Fragment>
      <div className="notes pb-md-5 pb-4">
        <Container className="py-md-4">
          <div className="d-flex ">
            <h2> Notes from the Brands </h2>
            <hr />
          </div>
          <div className="row mt-md-5 mt-2">
            <div className="col-md-4 col-12">
              <img src={Note1} />
            </div>
            <div className="col-md-8 col-12">
              <div className="text">
                <div>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed
                    do{" "}
                  </h3>

                  <div className="d-flex mt-md-3 mt-2">
                    <label>02 December 2022 </label>
                    <span> | </span>
                    <label> 3 min. to read</label>
                  </div>
                  <p className="mt-md-4 mt-3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit. <a href="">READ MORE</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-5 mt-2">
            <div className="col-md-4">
              <img src={Note2} />
            </div>
            <div className="col-md-8">
              <div className="text">
                <div>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed
                    do{" "}
                  </h3>

                  <div className="d-flex  mt-md-3 mt-2">
                    <label>02 December 2022 </label>
                    <span> | </span>
                    <label> 3 min. to read</label>
                  </div>
                  <p className="mt-md-4 mt-3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit. <a href="">READ MORE</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Notes;
