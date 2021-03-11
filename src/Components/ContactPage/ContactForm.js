import React, { useState } from "react";

const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section class="contactform">
        <div class="container">
          <div class="mt-5">
            <section class="">
              <div class="container">
                <div class=" mb-5">
                  <div class=" mt-5">
                    <h6>
                      <span class="font-weight-bold ">
                        Do you have any question or need some advise?{" "}
                      </span>{" "}
                      Please, fill out the form below so we can provide quick
                      and efficient service !{" "}
                    </h6>
                  </div>
                </div>
                <div class="">
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <label> Profile </label>

                        <div class="input-group mb-4">
                          <select class="browser-default custom-select">
                            <option selected>-- Please select--</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> First Name</label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inlineFormInputGroup"
                            name="firstname"
                            value={firstname}
                            onChange={(event) =>
                              setFirstname(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <label> Last Name </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inlineFormInputGroup"
                            name="lastname"
                            value={lastname}
                            onChange={(event) =>
                              setLastname(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <label> Company Name </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inlineFormInputGroup"
                            name="company-name"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Phone Number </label>

                        <div class="input-group mb-4">
                          <input
                            type="number"
                            class="form-control"
                            id="inlineFormInputGroup"
                            name="phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <label> E-mail </label>

                        <div class="input-group mb-4">
                          <input
                            type="email"
                            class="form-control"
                            id="inlineFormInputGroup"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Street </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inlineFormInputGroup"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Postcode </label>

                        <div class="input-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="inlineFormInputGroup"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Country </label>

                        <div class="input-group mb-4">
                          <select class="browser-default custom-select">
                            <option selected>--Select Country-- </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <label> Message </label>

                        <div class=" mb-4">
                          <textarea
                            type="text"
                            id="materialContactFormMessage"
                            class="form-control md-textarea"
                            rows="4"
                            placeholder="MESSAGE"
                            name=""
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class=" mb-4">
                          <div id="feedback">
                            <h5>
                              <strong>Keep me informed?</strong>
                            </h5>
                          </div>

                          <div class="form-check mb-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="radio1"
                              name="cmethod"
                              value="yes"
                              checked
                            />
                            <label class="form-check-label" for="radio1">
                              Yes, Keep me Informed
                            </label>
                          </div>

                          <div class="form-check mb-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              id="radio2"
                              name="cmethod"
                              value="no"
                            />
                            <label class="form-check-label" for="radio2">
                              No, Thank you
                            </label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        name="submit"
                        class="btn px-5 mx-auto btn-dark  shadow"
                      >
                        {" "}
                        <h5>SUBMIT </h5>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
