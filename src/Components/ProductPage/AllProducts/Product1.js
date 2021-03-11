import React from "react";
import img1 from "../img/Rectangle 7.png"
import img2 from "../img/Rectangle 8.png"
import img3 from "../img/Rectangle 9.png"

const Product1 = () => {
  return (
    <>
      <section class="product">
        <div class="container">
          <div class="row">
            <div class="col-6 text-centerddd">
              <img src={img1} width="50%" alt="" />
            </div>
            <div class="col-6 mt-5">
              <h4 class="font-weight-bold "> CONICE MOULDING </h4>

              <p> 1200 X 400 X 200L</p>

              <p> Skip to the bewgining</p>

              <div class="row">
              <button class="btn py-2"> Add to Wishlist</button>

              <button class="btn py-2"> Add to Wishlist</button>
                
                
            </div>
            </div>
          </div>
        </div>
          </section>

        <div class="home">
           

            <div class="row">
            <div class="col-md-6 col-6">
              <div class="">
                <img src={img2} alt="boot" width="100%" />
              </div>
            </div>

            <div class="col-md-6 col-6">
              <img src={img3} alt="chair" width="100%" />
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Product1;
