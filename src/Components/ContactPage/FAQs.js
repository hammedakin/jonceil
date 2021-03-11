import React from "react";

const FAQs = () => {
  return (
    <>
      <section class="faqs">
        <div class="container mt-5 text-center">
          <div class="pt-5  ">
            <h4 class="font-weight-bold "> FAQ </h4>
          </div>

          <div class="row mt-5">

            <div class="col-md-3 col-6">
              <div class="">
                <box-icon
                  name="globe"
                  class="box-icon px-4  "
                  size="4rem"
                  color="#000"
                ></box-icon>
              </div>
              <h6 class="font-weight-bold mt-3">
                Installation
              </h6>
            </div>

            <div class="col-md-3 col-6">
              <div class="">
                <box-icon
                  name="globe"
                  class="box-icon px-4  "
                  size="4rem"
                  color="#000"
                ></box-icon>
              </div>
              <h6 class="font-weight-bold mt-3">
               Product Information
              </h6>
            </div>

            <div class="col-md-3 col-6">
              <div class="">
                <box-icon
                  name="globe"
                  class="box-icon px-4  "
                  size="4rem"
                  color="#000"
                ></box-icon>
              </div>
              <h6 class="font-weight-bold mt-3">
               Indirect Lightening
              </h6>
            </div>

            <div class="col-md-3 col-6">
              <div class="">
                <box-icon
                  name="globe"
                  class="box-icon px-4  "
                  size="4rem"
                  color="#000"
                ></box-icon>
              </div>
              <h6 class="font-weight-bold mt-3">
                General
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
