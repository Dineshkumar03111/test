import React, { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import GetQuoteModal from "./components/GetQuoteModal";

function App() {
  // Refs for scrolling to sections
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const pricesRef = useRef(null);
  const testimonialsRef = useRef(null);

  // State for modal visibility and selected service details
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    const sectionRefs = {
      whyUs: whyUsRef,
      services: servicesRef,
      prices: pricesRef,
      testimonials: testimonialsRef,
    };

    const sectionRef = sectionRefs[section];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to handle opening modal with selected service
  const handleOpenModal = (service) => {
    setSelectedService(service); // Set the selected service for modal content
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div>
      {/* Header Component with Scroll and Modal Trigger */}
      <Header scrollToSection={scrollToSection} openModal={handleOpenModal} />

      {/* Main Content Section */}
      <Maincontent />

      {/* Scrollable Sections with References */}
      <div ref={whyUsRef}>
        <WhyUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>

      {/* Prices Section with Modal Trigger */}
      <div ref={pricesRef}>
        <Prices openModal={handleOpenModal} />
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      {/* Footer Component */}
      <Footer />

      {/* Conditionally render Modal for Quote Request */}
      {isModalOpen && (
        <GetQuoteModal
          closeModal={() => setIsModalOpen(false)} // Close modal function
          preselectedService={selectedService}  // Pass selected service to modal
        />
      )}
    </div>
  );
}

export default App;
