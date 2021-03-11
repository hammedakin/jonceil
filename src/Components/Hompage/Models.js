import React from "react";
import img from "./images/Rectangle 8.png";
import img1 from "./images/Rectangle 11.png";
import img2 from "./images/Rectangle 9.png";
import img3 from "./images/Rectangle 10.png";
import img4 from "./images/Rectangle 12.png";
import img5 from "./images/Rectangle 13.png";
import img6 from "./images/Rectangle 14.png";
import img7 from "./images/Rectangle 17.png";

const Models = () => {
  return (
    <>
      <section class="model">
        <div class="mt-5 upper-model">
          <div class="row justify-content-center">
            <div class="col-md-3 py-5 mx-2">
              <div class="container text-center aa">
                <h5 class="">CHAIR 112 MODEL</h5>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud re
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <img src={img} alt="chair" width="100%" />
            </div>
            <div class="col-md-3 py-5 mx-2">
              <div class="container text-center aa">
                <h5 class="">CHAIR 112 MODEL</h5>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud re
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="mt-5">
          <div class="row">
            <div class="col-md-3">
              <div class="">
                <img src={img1} alt="chair" width="100%" />
              </div>

              <div style={{ display: "flex" }} class="container">
                {/* <hr/> */}
                <div class="container text-center aa" style={{ height: "13rem" }}>
                  <h5 class="mt-5">CHAIR 112 MODEL</h5>
                  <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud re
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-6">
              <img src={img2} alt="chair" width="100%" />
            </div>

            <div class="col-md-3 col-6">
              <img src={img3} alt="chair" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="">
          <div class="row">
            <div class="col-md-6 col-6">
              <div class="">
                <img src={img4} alt="boot" width="100%" />
              </div>
            </div> 

            <div class="col-md-6 col-6">
              <img src={img5} alt="chair" width="100%" />
              <div class="showcase">
                <div class="container text-center bb">
                  <hr/>
                  <h5>
                    Your <span class="h4">PERSONALITY </span> like your{" "}
                    <span class="h4"> INTERIOR!. </span>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="">
        <div class="">
          <div class="row">
            <div class="col-md-7 col-7">
              <div class="">
                <img src={img6} alt="wall" width="100%" />
              </div>
            </div>

            <div class="col-md-5 col-5">
              <img src={img7} alt="wall" width="100%" />
        
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Models;
