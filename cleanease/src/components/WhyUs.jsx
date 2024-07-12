import React from 'react';
import './css/style.css'
import logo from './Asserts/group.svg'; 
import logo1 from './Asserts/relax.svg'; 
import logo2 from './Asserts/spray.svg'; 

const WhyUs = () => {
  return (


    <section className="why-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="why-content">
              <h6>Why Us</h6>
              <h1 className='kp'>Our professional and efficient <br/>team provides impeccable service, <br/>making life a little easier.</h1>       <br/><br/>
              </div>
            </div>
            <br/><br/>
        <div class="awards-list">
        <div class="col-lg-3">
            <div class="words">
            <img class="card-image" src={logo} alt="alternative"/><br/><br/>
                        <div class="card-body">
                            <h4 class="card-title"> Our Trusted Team</h4>
                            <p>From deep cleaning to decluttering, we <br/>are proven to reduce stress and<br/> improve happiness in your home or<br/> workplace.</p>
                        </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="words">
            <img class="card-image" src={logo1} alt="alternative"/><br/><br/>
            <div class="card-body">
            <h4 class="card-title">Clear your space, Clear your mind</h4>
            <p>Let us make life a little easier for you<br/>with our professional expertise.</p>
                        </div>
            </div>

        </div>
        <div class="col-lg-3">
            <div class="words">
            <img class="card-image" src={logo2} alt="alternative"/><br/><br/>
            <div class="card-body">
            <h4 class="card-title"> CleanEase Satisfaction Guarantee</h4>
            <p>Going above and beyond to achieve <br/>your complete satisfaction.<br/></p>
                        </div>
            </div>
        </div>
    </div>
          </div> 
          </div>
      </section>
  );
}

export default WhyUs;