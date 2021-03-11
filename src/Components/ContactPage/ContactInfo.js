import React from "react";

const ContactInfo = () => {
  return (
    <>
      <section class="contactinfo">
        <div class="container mt-5">
          <div class="">
            <div class="card mb-3 py-3">
              <div class="row">
                <div class="col-3 m-auto align-self-center">
                <box-icon
                        name="phone-call"
                        class="box-icon px-4  "
                        size="4rem"
                        color="#000"
                       
                      ></box-icon>
                </div>
                <div class="col-9">
                  <h4> Call Us </h4>
                  <h6> +2348012345678</h6>
                  <p> Monday - Friday : (08:00 - 16:30) </p>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="card mb-3 py-3">
              <div class="row">
                <div class="col-3 m-auto align-self-center">
                <box-icon
                        name="envelope"
                        class="box-icon px-4  "
                        size="4rem"
                        color="#000"
                        
                      ></box-icon>
                </div>
                <div class="col-9">
                  <h4> Send us an email </h4>
                  <h6> jonceil@gmail.com</h6>
               
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="card mb-3 py-3">
              <div class="row">
                <div class="col-3 align-self-center">
                <box-icon
                        name="buildings"
                        class="box-icon px-4  "
                        size="4rem"
                        color="#000"
                        
                      ></box-icon>
                </div>
                <div class="col-9">
                  <h4> Head Office </h4>
                  <h6> Bodija, Ibadan </h6>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
