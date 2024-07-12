import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                    <li>Phone: 416-428-9409</li>
                    <li>Email: <a href="mailto:contact@cleanease.ca">contact@cleanease.ca</a></li>
                </ul>
            </div>
            <div className="col-md-6 follow-us-left">
                <h5>Follow Us</h5>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.facebook.com/cleanease">Facebook</a></li>
                    <li className="list-inline-item"><a href="https://www.twitter.com/cleanease">Twitter</a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/cleanease">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col text-center text-md-left">
                <p>&copy; 2024 CleanEase. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>


  );
}

export default Footer;