import React from 'react';
import logo from './Asserts/default.svg'
import './css/style.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center hellowelcome">
      <div className="logo block-element">
      <img src={logo} alt="Cleaning Lady"/>
      </div>
      <nav className="nav-right d-flex align-items-center block-element ">
        <ul className="nav block-element">
          <li className="nav-item block-element"><a className="nav-link" href="#why-us">Why Us</a></li>
          <li className="nav-item block-element"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item block-element"><a className="nav-link" href="#pricing">Pricing</a></li>
          <li className="nav-item block-element"><a className="nav-link" href="#testimonials">Testimonials</a></li>
        </ul>
        <button variant="primary" className="hell" > Get Quote</button>
      </nav>
    </header>
  );
}

export default Header;