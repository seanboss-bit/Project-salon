import React , {useEffect}from "react";

import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500})
  }, []);
  return (
    <div>
      {/* Header */}
      <section className="header3">
        <div className="container header-inner3">
          <h1>
            <Link to="/">Project</Link>
          </h1>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul className="links3">
              <li>
                <Link to="/" className="active3">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/spa">Spa</Link>
              </li>
              <li>
                <Link to="/booknow" target='_blank'>Book Now</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container showcase-text3">
          <h3 className="mt-5 text-center"></h3>
          {/* eslint-disable-next-line  */}
          <p className="text-center mt-3">
            Best Salon In The Financial District Of Wuse
          </p>
        </div>
      </section>
      <section className="about p-5 text-center">
        <div className="container">
          <h2>
            Our Hair salons specialize in balayage, curly hair, lived-in
            hairstyles, and vibrant color.
          </h2>
        </div>
        <Link to="/about" className="btn button mt-4">
          About Us
        </Link>
      </section>
      <section className="portfolio padding">
        <Link to="/services" className="box-one" data-aos="zoom-in">
          Treatment
        </Link>
        <Link to="/booknow" className="box-one" data-aos="zoom-in">
          Book Now
        </Link>
        <Link to="/spa" className="box-one" data-aos="zoom-in">
          Spa
        </Link>
        <Link to="/about" className="box-one" data-aos="zoom-in">
          About Us
        </Link>
        <Link to="/contact" className="box-one" data-aos="zoom-in">
          Contact
        </Link>
        <Link to="/services" className="box-one" data-aos="zoom-in">
          Services
        </Link>
      </section>
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

export default Home;