import React from "react";
import "./css/style.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Testimonials() {
    const handleModalClose = () => {
        var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
      };
  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="why-content">
              <h6>TESTIMONIALS</h6>
            </div>
            <div className="swiper-container">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="slide-content">
                    <p>
                      I use CleanEase a few times a month for my at home
                      office.This service has given me less stress and
                      confidence!
                    </p>
                    <h5 className="textvalue">Nadia Powell - Mississauga</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <p>
                      She took my business to an whole new level! What a
                      difference organizing makes in save time and making money!
                    </p>
                    <h5 className="textvalue">Arjun Patel - Toronto</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <p>
                      we are with a different cleaning service and now with
                      CleanEase. They are efficient, reliable and get the job
                      done! So happy we
                      <br />
                      switched! A few times a month makes a huge difference in
                      our lives
                    </p>
                    <h5 className="textvalue">
                      Elizabeth Morrison - Etobicoke
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <p>
                      What an enormous difference my sessions with Gina went! It
                      was so overwhelming for me but she knew exactly where to
                      start and <br />
                      finish. My 2 bedroom home before and after was life
                      changing. She left us with tasks and tools to keep up with
                      the changes. So
                      <br /> grateful for her dedication and constant follow-up.
                    </p>
                    <h5 className="textvalue">Olga Agapov - Torontoe</h5>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <br />
          <br />
          <div className="col-md-12">
            <div className="testmonials-content">
              <h1 className="kp">Get Quote</h1>
              <br />
              <h4>
                You can reach us at{" "}
                <span className="highlights">4164289409</span>
                <br />
                or{" "}
                <span className="koop">
                  <a href="contact@cleanease.ca<">contact@cleanease.ca</a>
                </span>
              </h4>
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />

          <div className="col-md-12">
            <div className="why-content">
              <p>Please fill the form below for your free quote!</p>
              <br />
              <form>
                <div className="form-group">
                  {/* <label className="label-control">Name</label> */}
                  <input
                    type="text"
                    className="form-control-input"
                    id="name"
                    placeholder="name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in this field.
                  </div>
                </div>
                <div className="form-group">
                  {/* <label className="label-control">Email</label> */}
                  <input
                    type="email"
                    className="form-control-input"
                    id="email"
                    placeholder="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in this field.
                  </div>
                </div>
                <div className="form-group">
                  {/* <label className="label-control">Phone:</label> */}
                  <input
                    type="tel"
                    className="form-control-input"
                    id="phone"
                    placeholder="phone"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in this field.
                  </div>
                </div>
                <div className="form-group">
                  {/* <label className="label-control">Select Serivce:</label> */}
                  <select
                    name="service"
                    className="form-control-input"
                    id="type"
                  >
                    <option selected>Select Service</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Organizing">Organizing</option>
                    <option value="House">House-Sitting</option>
                  </select>
                </div>

                <div className="form-group">
                  {/* <label className="label-control">Time:</label> */}
                  <select
                    name="shift"
                    className="form-control-input"
                    id="shift"
                  >
                    <option selected>Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                <div className="form-group">
                  {/* <label className="label-control">Date:</label> */}
                  <input
                    type="date"
                    className="form-control-input"
                    id="date"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in this field the value
                  </div>
                </div>

                <br />
                <button type="submit"  onClick={handleModalClose} className="hel">Get Quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="id01" className="modal" onClick={handleModalClose}>
        <div className="modal-content">
          <span className="close" title="Close Modal">&times;</span>
          <form>
            <div className="form-group">
              <label className="label-control">Name</label>
              <input
                type="text"
                className="form-control-input"
                id="name"
                placeholder="Name"
                required
              />
              <div className="invalid-feedback">
                Please fill in this field.
              </div>
            </div>
            <div className="form-group">
              <label className="label-control">Email</label>
              <input
                type="email"
                className="form-control-input"
                id="email"
                placeholder="Email"
                required
              />
              <div className="invalid-feedback">
                Please fill in this field.
              </div>
            </div>
            <div className="form-group">
              <label className="label-control">Phone</label>
              <input
                type="tel"
                className="form-control-input"
                id="phone"
                placeholder="Phone"
                required
              />
              <div className="invalid-feedback">
                Please fill in this field.
              </div>
            </div>
            <div className="form-group">
              <label className="label-control">Select Service</label>
              <select className="form-control-input" id="service" required>
                <option value="">Select a service</option>
                <option value="cleaning">Cleaning</option>
                <option value="organizing">Organizing</option>
                <option value="house-sitting">House-Sitting</option>
              </select>
              <div className="invalid-feedback">
                Please select a service.
              </div>
            </div>
            <div className="form-group">
              <label className="label-control">Time</label>
              <select className="form-control-input" id="time" required>
                <option value="">Select a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              <div className="invalid-feedback">
                Please select a time.
              </div>
            </div>
            <div className="form-group">
              <label className="label-control">Date</label>
              <input
                type="date"
                className="form-control-input"
                id="date"
                required
              />
              <div className="invalid-feedback">
                Please select a date.
              </div>
            </div>
            <br />
            <button type="button" className="btn btn-primary" onClick={handleModalClose}>
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );

}

export default Testimonials;

