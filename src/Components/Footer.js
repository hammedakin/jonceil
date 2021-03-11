import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
          <div class="service">
        <div class="container">
          <div class="row text-center white-text py-3 mx-auto justify-content-center">
            <div class="col-md-2 col-6">
              <h6 class="font-weight-bold mt-3">WATER RESISTANT</h6>
            </div>

            <div class="col-md-2 col-6">
              <h6 class="font-weight-bold mt-3">PAINTABLE</h6>
            </div>

            <div class="col-md-3 col-6">
              <h6 class="font-weight-bold mt-3">EASY TO INSTALL</h6>
            </div>

            <div class="col-md-3 col-6">
              <h6 class="font-weight-bold mt-3">SUPERIOR QUALITY</h6>
            </div>

            <div class="col-md-2 col-6">
              <h6 class="font-weight-bold mt-3">FLEXIBLE</h6>
            </div>
          </div>
        </div>
        </div>

        <footer class="page-footer font-small">
          <div class="container black-text text-center text-md-left mb-5 pt-5">
            <div class="row">
              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Services</h6>

                <ul class="list-unstyled ">
                  <li>
                    <a href="#!">Email Marketing</a>
                  </li>
                  <li>
                    <a href="#!"> Campaigns</a>
                  </li>
                  <li>
                    <a href="#!"> Branding</a>
                  </li>
                  <li>
                    <a href="#!"> Offline</a>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-6 mx-auto text-center">
                <h5 class=" mt-3 mb-4">Subscribe to our newsletter</h5>

                <div class="input-group mb-4 subscribe">
                    
                    <div class="row align-items-center mx-auto">
                    <div class="col-md-9">
                    <input
                    type="email"
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder="example@email.com"
                  />
                        </div>
                        <div class="col-3 col-md-3 mx-auto">
                <button class="btn"> 
                <box-icon
                        name="envelope"
                        class="box-icon "
                        size="1.5rem"
                        color="#fff"
                       
                      ></box-icon></button>
                        
                        </div>
                    </div>
                
                </div>

                <div class="text-center mb-3">
                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon px-2"
                    size="2rem"
                    color=" #000"
                    type="logo"
                    name="facebook"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon px-2"
                    size="2rem"
                    color=" #000"
                    name="instagram"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon px-2"
                    size="2rem"
                    color=" #000"
                    name="twitter"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="#" target="_blank">
                  <box-icon
                    class="box-icon px-2"
                    size="2rem"
                    color=" #000"
                    name="linkedin-square"
                    type="logo"
                  ></box-icon>
                </a>

              </div>

              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Help</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!"> FAQs </a>
                  </li>
                  <li>
                    <a href="#!"> Contact Us </a>
                  </li>
                  <li>
                    <a href="#!"> Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#!"> Privacy Policy </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            Copyright © 2020
            <a href="!#"> @jonceil.com</a>. All Rights Reserved
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
