import React, { Fragment } from "react";
import "./Categories.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button1 from "../Common/Button/Button1";

function Categories() {
  return (
    <Fragment>
      <div className="categories pt-md-0 pb-md-4 py-4 mt-md-4">
        <Container>
          <div className="d-flex pb-md-3">
            <h2> CATEGORIES </h2>
            <hr />
          </div>

          <div className="row w-100 mt-md-5 mt-3 ms-0">
            <div className="col-md-4">
              <img className="main_img" src="img/category1.jpg" />
              <div className="category-text">
                <h3> Fashionista’s Paradise </h3>
              </div>
            </div>
            <div className="col-md-8 pe-md-0 mt-md-0 mt-4 ">
              <div className="row w-100 ms-0">
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i1.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i2.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i3.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i4.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i5.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i6.png" />
                  </div>
                </div>
              </div>
              <Link>
                {" "}
                <button> SEE MORE </button>{" "}
              </Link>
            </div>
          </div>
          <div className="row w-100 mt-md-5 pt-md-5 mt-4 ms-0 row-reverse">
            <div className="col-md-8 ps-0">
              <div className="row w-100 ms-0 mt-md-0 mt-4">
                <div className="col-md-4  col-6">
                  <div className="card">
                    <img src="img/i7.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i8.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i9.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i10.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i11.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i12.png" />
                  </div>
                </div>
              </div>
              <Link>
                {" "}
                <button> SEE MORE </button>{" "}
              </Link>
            </div>
            <div className="col-md-4">
              <img className="main_img" src="img/category2.jpg" />
              <div className="category-text">
                <h3> Walk In Style</h3>
              </div>
            </div>
          </div>
          <div className="row w-100 mt-md-5 mt-4 py-md-5 ms-0">
            <div className="col-md-4">
              <img className="main_img w-100" src="img/category3.jpg" />
              <div className="category-text">
                <h3> Dine In Elegance </h3>
              </div>
            </div>
            <div className="col-md-8 pe-md-0 mt-md-0 mt-4">
              <div className="row w-100 ms-0">
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i13.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i14.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i15.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i16.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i17.png" />
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="card">
                    <img src="img/i18.png" />
                  </div>
                </div>
              </div>
              <Link>
                {" "}
                <button> SEE MORE </button>{" "}
              </Link>
            </div>
          </div>
          <div className="view-btn">
            <Link> <Button1 title="VIEW ALL BRANDS" /></Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default Categories;
