import React from "react";
import img1 from "./images/Rectangle 5.png";
import img2 from "./images/Rectangle 6.png";
import img3 from "./images/Rectangle 4.png";
import img4 from "./images/Rectangle 7.png";

const Showcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="row">
        <div class="col-sm-5 col-5">
          <img src={img3} alt="" width="100%" />
          <div class="container text-center aa">
              <h5>Your <br/> <span class="h4">PERSONALITY </span> <br/> like your  <span class="h4"> <br/> INTERIOR!. </span> </h5>
          </div>

          
        </div>

        <div class="col-sm-4 col-4">
          <img src={img1} alt="" width="100%" />
          <img src={img4} alt="" width="100%" />
        </div> 

        <div class="col-sm-3 col-3">
          <img src={img2} alt="" width="100%" />
        </div>

        </div>
        
      </section>


      
    </>
  );
};
export default Showcase;
