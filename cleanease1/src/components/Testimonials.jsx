import React, { useState } from "react";
import "./css/style.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Testimonials() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    shift: "",
    date: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation
    const { name, email, phone, service, shift, date } = formData;
    if (!name || !email || !phone || !service || !shift || !date) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/get-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          shift: "",
          date: "",
        });

        setTimeout(() => setShowSuccess(false), 3000); // Auto-hide after 3s
      } else {
        const result = await response.json();
        alert(`Submission failed: ${result.message || "Try again later."}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h6 className="text-center">TESTIMONIALS</h6>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              {/* Slides */}
              <SwiperSlide>
                <div className="slide-content">
                  <p>
                    I use CleanEase a few times a month for my at home office.
                    This service has given me less stress and confidence!
                  </p>
                  <h5>Nadia Powell - Mississauga</h5>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide-content">
                  <p>
                  I use CleanEase a few times a month for my at home office. This service has given me less stress and confidence!
Nadia Powell - Mississauga
What an enormous difference my sessions with Gina went! It was so overwhelming for me but she knew exactly where to start and finish. My 2 bedroom home before and after was life changing. She left us with tasks and tools to keep up with the changes. So grateful for her dedication and constant follow-up.
                  </p>
                  <h5>Olga Agapov - Toronto</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <p>
She took my business to an whole new level! What a difference organization makes in saving time and making money!
                  </p>
                  <h5>Arjun Patel - Toronto</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-content">
                  <p>
She took my business to an whole new level! What a difference organization makes in saving time and making money!
                  </p>
                  <h5>Arjun Patel - Toronto</h5>
                </div>
              </SwiperSlide> 
<SwiperSlide>
                <div className="slide-content">
                  <p>
                  We were with a different cleaning service and now with CleanEase. They are efficient, reliable and get the job done! So happy we switched! A few times a month makes a huge difference in our lives!
                  </p>
                  <h5>Elizabeth Morrison - Etobicoke</h5>
                </div>
              </SwiperSlide> 
       
            </Swiper>
          </div>

          <div className="col-md-12 mt-5">
            <div className="testmonials-content text-center">
              <h1>Get Quote</h1>
              <h4>
                Reach us at <span className="highlights">4164289409</span> or{" "}
                <a href="mailto:contact@cleanease.ca" className="koop">
                  contact@cleanease.ca
                </a>
              </h4>
              <p className="mt-3">Please fill the form below for your free quote!</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control-input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control-input"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-control-input"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Organizing">Organizing</option>
                    <option value="House-Sitting">House-Sitting</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    id="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="form-control-input"
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control-input"
                    required
                  />
                </div>

                <button type="submit" className="hel btn btn-primary mt-3">
                  Get Quote
                </button>
              </form>

              {/* ✅ Success Message */}
              {showSuccess && (
                <div className="alert alert-success mt-4" role="alert">
                  Your quote has been submitted successfully! 🎉
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
