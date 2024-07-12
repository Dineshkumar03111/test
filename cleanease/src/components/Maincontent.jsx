import React from 'react';
//import { Container, Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap for styling
import logo from './Asserts/final.png'; 
import './css/style.css';

const Maincontent = () => {
    return (
      <headerf>
        <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h1 className='ppk'>Cleaning and Organizing <span className="highlight">FOR YOU</span></h1>
                <p>You deserve to surround yourself with clarity and cleanliness. Where there is order, there is tranquility.</p>
                <button variant="primary" className="hell" > Get Quote</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                <img src={logo} alt="Cleaning Lady" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </headerf>
      
    );
};

export default Maincontent;