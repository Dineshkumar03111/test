import React from "react";
import logo from "./Asserts/default.svg";
import "./css/style.css";

const Header = ({ scrollToSection, openModal }) => {
  const navItems = [
    { id: "whyUs", label: "Why Us" },
    { id: "services", label: "Services" },
    { id: "prices", label: "Pricing" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <header className="d-flex justify-content-between align-items-center hellowelcome">
      <div className="logo block-element">
        <img src={logo} alt="Cleaning Lady" />
      </div>
      <nav className="nav-right d-flex align-items-center block-element">
        <ul className="nav block-element">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item block-element">
              <button className="nav-link" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={openModal} className="hell">
          Get Quote
        </button>
      </nav>
    </header>
  );
};

export default Header;
