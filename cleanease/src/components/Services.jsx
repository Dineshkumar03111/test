import React from 'react';
import logo from './Asserts/aunty.png';

const Service = () => {
  return (
 <section className="Service-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="Service-content">
          <h6 className='Servies'>SERVICES</h6>
          <h1 className='kp'>What we do for you?</h1> 
          <p>Improving your quality of life!</p>
          </div>
        </div>
        <div className="row align-items-center">
        <div className="container">
        <div className="col-md-12">
        <ul className="nav nav-tabs" id="servicesTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="organizing-tab" data-toggle="tab" href="#organizing" role="tab" aria-controls="organizing" aria-selected="true">Organizing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="cleaning-tab" data-toggle="tab" href="#cleaning" role="tab" aria-controls="cleaning" aria-selected="true">Cleaning</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="house-sitting-tab" data-toggle="tab" href="#house-sitting" role="tab" aria-controls="house-sitting" aria-selected="false">House Sitting</a>
          </li>
        </ul>
        </div>

        <div className="tab-content" id="servicesTabContent">
          <div className="tab-pane fade show active" id="organizing" role="tabpanel" aria-labelledby="organizing-tab">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={logo} alt="Organizing Lady" className="img-fluid"/>
              </div>
              <div className="col-md-6">
                <h3>Prime Organizing Services:</h3>
                <ul>
                  <li>School & Learning Spaces</li>
                  <li>Basement & Garages</li>
                  <li>Moving & Relocation</li>
                  <li>Party Preparation</li>
                  <li>Residential Homes</li>
                  <li>Corporate Offices</li>
                  <li>Home Office</li>
                </ul>
                <button variant="primary" className="hel" > Get Quote</button>
              </div>
            </div>
            </div>
          </div>
          </div>

          {/* <div className="tab-content" id="servicesTabContent">
          <div className="tab-pane fade show active" id="cleaning" role="tabpanel" aria-labelledby="cleaning-tab">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={logo} alt="Organizing Lady" className="img-fluid"/>
              </div>
              <div className="col-md-6">
                <h3>Prime Organizing Services:</h3>
                <ul>
                  <li>School & Learning Spaces</li>
                  <li>Basement & Garages</li>
                  <li>Moving & Relocation</li>
                  <li>Party Preparation</li>
                  <li>Residential Homes</li>
                  <li>Corporate Offices</li>
                  <li>Home Office</li>
                </ul>
                <button className="btn btn-primary">Get Quote</button>
              </div>
            </div>
          </div>
          </div> */}
        

        </div>


</div>
        </div>

      </div> 
  </section>
  );
}

export default Service;