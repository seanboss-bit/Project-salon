import React from "react";
import { useState, useEffect } from "react";
import "../about.css";
import { Link } from "react-router-dom";
import people from "../images/people.jpg";
import people2 from "../images/people2.jpg";
import people3 from "../images/people3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // NavBar Open Close
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <section className="header1">
        <div className="header-inner32">
          <div className="container header-inner1">
            <h1>
              <Link to="/">Looks & Skin</Link>
            </h1>
            <div
              className="bars1"
              id={toggle ? "activeless" : ""}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav onClick={handleClick}>
              <ul className={"links1"} id={toggle ? "activenow" : ""}>
                <li>
                  <Link to="/" className="a">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="active1 a">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="a">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="a">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/spa" className="a">
                    Spa
                  </Link>
                </li>
                <li>
                  <Link to="/booknow" target="_blank" className="a">
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container showcase-text1">
          <h3 className="mt-5 text-center">About Us</h3>
          <p className="text-center mt-3">Get To Know Us More</p>
        </div>
      </section>
      <section className="people">
        <div className="container">
          <div className="persons">
            <div data-aos="fade-right">
              <h2>Head of Salon Main District</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur molestias, in quibusdam expedita sapiente officiis
                magni minus aliquid impedit ea ipsam neque ipsum eum reiciendis
                est. Nihil iusto, nobis et atque distinctio provident modi
                consectetur suscipit accusantium ipsa mollitia sunt porro quis
                nesciunt eum laborum omnis doloremque blanditiis laboriosam eos!
              </p>
            </div>
            <img src={people} alt="#" data-aos="fade-left" />
          </div>
          <div className="persons">
            <img src={people2} alt="#" data-aos="fade-left" />
            <div data-aos="fade-left">
              <h2>Our Director</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur molestias, in quibusdam expedita sapiente officiis
                magni minus aliquid impedit ea ipsam neque ipsum eum reiciendis
                est. Nihil iusto, nobis et atque distinctio provident modi
                consectetur suscipit accusantium ipsa mollitia sunt porro quis
                nesciunt eum laborum omnis doloremque blanditiis laboriosam eos!
              </p>
            </div>
          </div>
          <div className="persons">
            <div data-aos="fade-left">
              <h2>Our Founder</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur molestias, in quibusdam expedita sapiente officiis
                magni minus aliquid impedit ea ipsam neque ipsum eum reiciendis
                est. Nihil iusto, nobis et atque distinctio provident modi
                consectetur suscipit accusantium ipsa mollitia sunt porro quis
                nesciunt eum laborum omnis doloremque blanditiis laboriosam eos!
              </p>
            </div>
            <img src={people3} alt="#" data-aos="fade-right" />
          </div>
          <div className="history">
            <h1 className="text-center mb-5">
              <span className="active2">Our History</span>
            </h1>
            <p className="lead mt-5 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              doloribus maiores facere distinctio voluptates id, necessitatibus
              reprehenderit harum soluta magnam. Reiciendis ut a, nostrum hic
              adipisci eaque quisquam laborum nam? Ab voluptas blanditiis
              officia recusandae quasi, architecto quaerat ea dolore odio totam
              omnis facilis dolor vitae explicabo ullam aut fuga saepe magnam
              nulla atque, deleniti quod. Deserunt ipsam assumenda doloremque ab
              eius iusto excepturi est nesciunt impedit architecto voluptatibus,
              eum dignissimos adipisci exercitationem non quas illum, ipsa
              laborum consequuntur molestiae accusantium saepe. Sunt
              reprehenderit accusantium qui alias, dolorum quae earum provident!
              Neque modi quo dolor minima quis, ullam tempore officiis?
            </p>
          </div>
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
            <Link to="">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="">
              <i className="fab fa-github fa-2x"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
