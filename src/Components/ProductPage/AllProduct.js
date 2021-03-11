import React from "react";
import { Link } from "react-router-dom";
import img1 from "./img/Rectangle 7.png";

const AllProduct = () => {
  return (
    <>
      <section class="allproduct">
        <div class="container-fluid">
          <div class="mt-5">
            <div class="row">
              {/* AllProducts */}

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-md-4 col-6 mb-3">
              <Link to="/product1" >
                <div class="card h-100">
           
                  <img src={img1} width="50%" alt="" />

                  <div class="card-footer black-text">
                    <h5 class="font-weight-bold "> CONICE MOULDING </h5>
                    <p> 1200 X 400 X 200L</p>
                    <p> Puratouch</p>
                  </div>
                </div>
                </Link>
              </div>

              

            
              {/* AllProducts */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
