import React from "react";

import { Link } from "react-router-dom";
const Services = () => {
  
  return (
    <div>
      <section className="header4">
        <div className="container header-inner4">
          <h1>
            <Link to="/">Project</Link>
          </h1>
          <div className="bars4">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul className="links4">
              <li>
                <Link to="/" className='a'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='a'>About Us</Link>
              </li>
              <li>
                <Link to="about" className='a'>Contact</Link>
              </li>
              <li>
                <Link to="/services" className="active mt-3 a">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/spa" className='a'>Spa</Link>
              </li>
              <li>
                <Link to="/booknow" target='_blank' className='a'>Book Now</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container showcase-text4">
          <h3 className="mt-5 text-center">Services</h3>
          <p className="text-center mt-3">Everything At Your Finger Tips</p>
        </div>
      </section>
      {/* Content */}
      <section className="content">
        <div className="container flex">
          {/* BOX CONTENT */}
          <div className="cuts">
            <h1>Cuts</h1>
            <div className="box">
              <h3>Owner Cut</h3>
              <p>$165</p>
            </div>
            <div className="box">
              <h3>Stylist Cut</h3>
              <p>$105-130</p>
            </div>
            <div className="box">
              <h3>Junior Stylist</h3>
              <p>$100</p>
            </div>
          </div>
          <div className="styling">
            <h1>Styling</h1>
            <div className="box">
              <h3>Updo</h3>
              <p>$165</p>
            </div>
            <div className="box">
              <h3>Blowout</h3>
              <p>$105-130</p>
            </div>
          </div>
          <div className="color">
            <h1>Color</h1>
            <div className="box">
              <h3>Single Process</h3>
              <p>$165</p>
            </div>
            <div className="box">
              <h3>Double Process</h3>
              <p>$105-130</p>
            </div>
          </div>
          <div className="highlights">
            <h1>Highlights</h1>
            <div className="box">
              <h3>Full Head</h3>
              <p>$165</p>
            </div>
            <div className="box">
              <h3>Half Head</h3>
              <p>$105-130</p>
            </div>
            <div className="box">
              <h3>Face Frame</h3>
              <p>$105-130</p>
            </div>
            <div className="box">
              <h3>Add Gloss</h3>
              <p>$105-130</p>
            </div>
          </div>
          <div className="highlights">
            <h1>Nail Art</h1>
            <div className="box">
              <h3>Clean N Simple</h3>
              <p>$165</p>
            </div>
            <div className="box">
              <h3>All Out</h3>
              <p>$105-130</p>
            </div>
            <div className="box">
              <h3>Face Frame</h3>
              <p>$105-130</p>
            </div>
            <div className="box">
              <h3>Add Gloss</h3>
              <p>$105-130</p>
            </div>
          </div>
          <div className="highlights">
            <h1>The Soak Off</h1>
            <div className="box">
              <h3>Full Body</h3>
              <p>$165</p>
            </div>
          </div>
        </div>
        <div className="container but-box">
          <Link to="/booknow" target='_blank' className="btn button">
            {" "}
            Book Apointment Now
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer mt-2">
        <div className="container grid-3">
          <div className="address">
            <div>
              <h4>Adress</h4>
              <p>Address</p>
            </div>
            <h4>Project</h4>
            <div>
              <h4>Book online</h4>
              <p>@website link</p>
              <p>@something@gmail.com</p>
            </div>
            <div>
              <h4>Phones</h4>
              <p>09047892847</p>
              <p>08175839499</p>
            </div>
          </div>
          <div className="hours">
            <h4>Opening Hours</h4>
            <p>Monday: Closed</p>
            <p>Tuesday: 10–8pm</p>
            <p>Wednesday: 10–8pm</p>
            <p>Thursday: 10–9pm</p>
            <p>Friday: 10–9pm</p>
            <p>Saturday: 9–8pm</p>
            <p>Sunday: 10–6pm</p>
          </div>
          <div className="social">
            <h5>Follow our Social Media</h5>
            <Link to="#">
              <i className="fab fa-facebook fa-2x"></i>{" "}
            </Link>
            <Link to="#">
              <i className="fab fa-instagram fa-2x"></i>{" "}
            </Link>
            <Link to="#">
              <i className="fab fa-twitter fa-2x"></i>{" "}
            </Link>
            <Link to="#">
              <i className="fab fa-github fa-2x"></i>{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
