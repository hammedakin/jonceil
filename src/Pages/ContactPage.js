import React from "react";
import ContactForm from "../Components/ContactPage/ContactForm";
import ContactInfo from "../Components/ContactPage/ContactInfo";
import FAQs from "../Components/ContactPage/FAQs";

const ContactPage = () => {
  return (
    <>
      <>
        <section class="contact">
          <div class="container ">
            <div class="text-center mt-5 ">
              <h4 class="font-weight-bold "> CONTACT </h4>
            </div>
          </div>
        </section>

       
          <div class="row" style={{  marginRight: "0px"}}>
            <div class="col-md-8">
              <ContactForm />
            </div>
            <div class="col-md-4">
              <ContactInfo />
            </div>
          </div>
        

        <FAQs />
      </>
    </>
  );
};

export default ContactPage;
