import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const ServicePayment = ({ closeModal, serviceData }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle payment submission
  const handlePayment = async () => {
    if (!serviceData) return;

    setLoading(true);
    setPaymentStatus(null);

    try {
      // Log data for debugging
      console.log("Sending payment payload:", {
        service: serviceData.title, // ✅ Ensure correct property
        price: serviceData.price,
        unit: serviceData.unit,
      });

      const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: serviceData.title,
          price: serviceData.price,
          unit: serviceData.unit,
        }),
      });

      if (response.ok) {
        setPaymentStatus("success");
        setTimeout(() => closeModal(), 3000);
      } else {
        const errorData = await response.json();
        setPaymentStatus(`Error: ${errorData.message || 'Payment failed. Please try again.'}`);
      }
    } catch (err) {
      console.error("Payment Error:", err);
      setPaymentStatus("Error: Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!serviceData) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Service: {serviceData.title}</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body">
            <p>
              <strong>Price:</strong> ${serviceData.price}/{serviceData.unit}
            </p>
            <ul>
              {serviceData.features?.map((item, i) => (
                <li key={i}>✔️ {item}</li>
              ))}
            </ul>

            <button
              className="btn btn-success w-100 mt-3"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

            {paymentStatus && (
              <div
                className={`alert mt-3 ${
                  paymentStatus.includes("success") ? "alert-success" : "alert-danger"
                }`}
              >
                {paymentStatus === "success" ? "Payment Successful!" : paymentStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePayment;
