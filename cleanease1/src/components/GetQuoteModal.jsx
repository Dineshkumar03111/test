import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const GetQuoteModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    shift: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Validation logic for the form
  const validate = () => {
    let newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.shift) newErrors.shift = "Please select a shift";
    if (!formData.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handling change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/api/get-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          closeModal();
        }, 3000); // Close popup and modal after 3 seconds
      } else {
        alert(`Error: ${result.message || "Submission failed."}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={closeModal}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content p-4">
            <div className="modal-header">
              <h5 className="modal-title">Get a Free Quote</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="modal-body">
                {/* Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                {/* Service */}
                <div className="mb-3">
                  <select
                    name="service"
                    className={`form-select ${errors.service ? "is-invalid" : ""}`}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select Service</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Organizing">Organizing</option>
                    <option value="House-Sitting">House-Sitting</option>
                  </select>
                  {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                </div>

                {/* Shift */}
                <div className="mb-3">
                  <select
                    name="shift"
                    className={`form-select ${errors.shift ? "is-invalid" : ""}`}
                    value={formData.shift}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                  {errors.shift && <div className="invalid-feedback">{errors.shift}</div>}
                </div>

                {/* Date */}
                <div className="mb-3">
                  <input
                    type="date"
                    name="date"
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="position-fixed top-50 start-50 translate-middle p-4 bg-success text-white rounded shadow-lg z-1050">
          <strong>Success!</strong> Your quote has been submitted.
        </div>
      )}
    </>
  );
};

export default GetQuoteModal;
