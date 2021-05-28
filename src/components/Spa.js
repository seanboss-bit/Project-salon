import React from "react";

import { Link } from "react-router-dom";
import spa1 from '../images/spa1.jpg'
import spa2 from '../images/spa2.jpg'
import spa3 from '../images/spa3.jpg'
import spa4 from '../images/spa4.jpg'
import spa5 from '../images/spa5.jpg'
import spa9 from '../images/spa9.jpg'
import spa7 from '../images/spa7.jpg'
import spa8 from '../images/spa8.jpg'

const Spa = () => {
  return (
    <div>
      <section className="header5">
        <div className="container header-inner5">
          <h1>
            <Link to="/">Project</Link>
          </h1>
          <div className="bars5">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul className="links5">
              <li>
                <Link to="/" className='a'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='a'>About Us</Link>
              </li>
              <li>
                <Link to="/contact" className='a'>Contact</Link>
              </li>
              <li>
                <Link to="/services" className='a'>Services</Link>
              </li>
              <li>
                <Link to="/spa" className="active5 mt-3 a">
                  Spa
                </Link>
              </li>
              <li>
                <Link to="/booknow" target='_blank' className='a'>Book Now</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container showcase-text5">
          <h3 className="mt-5 text-center">Spa</h3>
          <p className="text-center mt-3">Feel Ease and Comfort</p>
        </div>
      </section>
      {/* Picture Display */}
      <div className="pic mt-3">
        <div className="container pt-3 pb-3 grid">
          <img src={spa1} alt="#" className="img-fluid" />
          <img src={spa2} alt="#" className="img-fluid" />
          <img src={spa3} alt="#" className="img-fluid" />
          <img src={spa4} alt="#" className="img-fluid" />
          <img src={spa5} alt="#" className="img-fluid" />
          <img src={spa9} alt="#" className="img-fluid" />
          <img src={spa7} alt="#" className="img-fluid" />
          <img src={spa8} alt="#" className="img-fluid" />
        </div>
      </div>
      {/* Service Display */}
      <div className="service">
        <div className="container grid-2">
          <div>
            <h2>Eyelash Extensions</h2>
            <p>
              Wake up to longer, thicker and more beautiful lashes every day!
              Enjoy the benefits of our lashes with little or no need to adjust
              your lifestyle. You can swim, shower, exercise and sleep worry
              free. Perfect for special occasions or simply for day to day wear
              you will love your new vibrant, long and luscious lashes. Call us
              today to schedule an appointment!
            </p>
            <div className="para">
              <p>Full Set of Volume Eyelashes – $275</p>
              <p>Volume Eyelash Fill – $85</p>
              <p>Full Set of Classic Eyelashes – $200</p>
              <p>Touch-up Classic Eyelashes – $65</p>
              <p>30 Minute Classic Fill – $30</p>
            </div>
          </div>
          <div>
            <h2>Microblading</h2>
            <p>
              Illusions Color Spa is now offering microblading, the
              semi-permanent makeup treatment for natural looking brows. You can
              say goodbye to penciling, dusting and drawing in your brows. And
              say hello to waking up with perfectly shaped and shaded brows.
            </p>
            <div className="para">
              <p>Microblading - $400</p>
            </div>
          </div>
          <div>
            <h2>Lash Lift </h2>
            <p>
              Keratin Lash Lift is Link lash enhancement treatment that turns your
              natural lashes upwards, gives them length, height, and volume.
              When adding Link tint to the treatment, it gives Link thicker, mascara
              look, for an alternative to makeup. This advanced technique is Link
              potential alternative to lash extensions. It may also compliment
              the application of lash extensions for those whose lashes are too
              straight or too curly.
            </p>
            <div className="para">
              <p>Lash Lift - $100</p>
            </div>
          </div>
          <div>
            <h2>CBD Massage</h2>
            <div className="para">
              <p>Upper Body (30 Minutes) - $65</p>
              <p>Full Body (60 Minutes) $95</p>
              <p>Full Body (90 Minutes) $140</p>
            </div>
          </div>
          <div>
            <h2>Swedish Massage</h2>
            <div className="para">
              <p>Full Body (60 Minutes) - $75</p>
              <p>Full Body (90 Minutes) - $95</p>
              <p>Upper Body (30 Minutes) - $45</p>
              <p>Couples Massage (60 Minutes) - $140</p>
              <p>Pregnancy Massage - $75</p>
            </div>
          </div>
          <div>
            <h2>Deep Tissue Massage</h2>
            <div className="para">
              <p>Full Body (90 Minutes) - $140</p>
              <p>Full Body (60 Minutes) - $85</p>
              <p>Upper Body (30 Minutes) - $55</p>
            </div>
          </div>
          <div>
            <h2>Hot Stone Massage</h2>
            <div className="para">
              <p>Full Body (60 Minutes) - $85</p>
              <p>Upper Body (30 Minutes) - $60</p>
            </div>
          </div>
          <div>
            <h2>Dermaplaning</h2>
            <p>
              Dermaplaning is a physical exfoliation that utilizes a specialized
              instrument designed to scrape away accumulated dead skin cells and
              vellous hair. It is a comfortable, relaxing procedure that can be
              combined with other services like to improve their efficacy.
            </p>
            <div className="para">
              <p>Dermaplane Facial (1 Hour) - $100</p>
              <p>Dermaplane Express (30-45 mins - $75</p>
              <p>Add On To Any Facial - $40 </p>
            </div>
          </div>
          <div>
            <h2>Skin Care</h2>
            <p>
              Image Skincare is an evidence-based clinical skin care company,
              providing professional skincare products and effective skincare
              solutions. The most innovative brand in the industry, Image
              Skincare consistently produces the latest anti-aging, balancing,
              hydrating, and illuminating technologies to further its mission of
              helping the world to Age Later™
            </p>
            <div className="para">
              <p>Acne Lift Peel - $95</p>
              <p>Signature Facelift Peel - $120</p>
              <p>Lightening Lift Peel - $100</p>
              <p>Wrinkle Lift Peel - $110</p>
              <p>Ormedic Lift Peel - $100</p>
              <p>Max Stem Cell Facial - $125</p>
              <p>Perfection Lift Peel $125</p>
              <p>Illuminating Facial - $100</p>
            </div>
          </div>
          <div>
            <h2>Nail Services</h2>
            <div className="para">
              <p>Manicure - $25</p>
              <p>Pedicure - $40</p>
              <p>French Manicure - $35</p>
              <p>French Pedicure - $45</p>
              <p>Shellac Manicure - $35</p>
              <p>Shellac Pedicure - $55</p>
              <p>File & Polish - $20</p>
              <p>Nail Removal - $15</p>
            </div>
          </div>
          <div>
            <h2>Waxing Services</h2>
            <div className="para">
              <p>Lips - $10</p>
              <p>Eyebrows - $20</p>
              <p>Face - $25</p>
            </div>
          </div>
        </div>
      </div>
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
            <Link to="">
              <i className="fab fa-facebook fa-2x"></i>{" "}
            </Link>
            <Link to="">
              <i className="fab fa-instagram fa-2x"></i>{" "}
            </Link>
            <Link to="">
              <i className="fab fa-twitter fa-2x"></i>{" "}
            </Link>
            <Link to="">
              <i className="fab fa-github fa-2x"></i>{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Spa;
