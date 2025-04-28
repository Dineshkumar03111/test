import React, { useState } from 'react';
import './css/style.css';
import ServiceCard from './ServicCard';
import ServicePayment from './Servicepayment'; // Import the modal component

const Prices = () => {
  const [selectedService, setSelectedService] = useState(null); // State to hold selected service data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const prices = [
    {
      ttitle: 'ORGANIZING',
      price: 40,
      unit: 'hour',
      features: [
        'School & Learning Spaces',
        'Basement & Garages',
        'Moving & Relocation',
        'Home Office',
      ],
    },
    {
      ttitle: 'CLEANING',
      price: 40,
      unit: 'hour',
      features: [
        'Disinfect against COVID-19 transmission',
        'Events & Parties',
        'Senior living',
      ],
    },
    {
      ttitle: 'HOUSE SITTING',
      price: 50,
      unit: 'day',
      features: [
        'Home Maintenance & Cleaning',
        'In-Home Plant Care',
        'Feed & Walk Pets',
      ],
    },
  ];

  const handleQuoteClick = (service) => {
    setSelectedService(service); // Set selected service data
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="why-content">
            <h6 className="pp">PRICING</h6>
            <h1 className="kp">
              Affordable Pricing with our Finest<br />
              Services
            </h1>
            <br />
            <br />
          </div>
          <div className="row">
            {prices.map((p, index) => (
              <ServiceCard
                key={index}
                title={p.ttitle}
                price={p.price}
                unit={p.unit}
                feature={p.features}
                onQuoteClick={handleQuoteClick} // Pass callback to ServiceCard
              />
            ))}
          </div>
        </div>
      </div>

      {/* Conditionally render ServicePayment modal */}
      {isModalOpen && (
        <ServicePayment
          closeModal={closeModal}
          serviceData={selectedService}
        />
      )}
    </div>
  );
};

export default Prices;
