import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
  // Loading Screen
  const [loading, setLoading] = useState(false);
  // Toggle of NavBar
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const [form, setForm] = useState({
    email: "",
    name: "",
    textarea: "",
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://looksndskin.herokuapp.com/message/locally",
        {
          name: form.name,
          email: form.email,
          message: form.textarea,
        }
      );
      const payload = response.data;
      console.log(response);
      toast.success(`${payload.message}`, {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.BOTTOM_CENTER,
      });
      if (payload.message === "Message Sent") {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
        form.name.value = null;
        form.email.value = null;
        form.textarea.value = null;
      }
    } catch (error) {
      const err = error.error;
      toast.error(err, {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <div>
      <ToastContainer autoClose={4000} />
      <section className="header2">
        <div className="header-inner33">
          <div className="container header-inner2">
            <h1>
              <Link to="/">Looks & Skin</Link>
            </h1>
            <div
              className="bars8"
              id={toggle ? "activeless" : ""}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav onClick={handleClick}>
              <ul className="links8" id={toggle ? "activenow" : ""}>
                <li>
                  <Link to="/" className="a">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="a">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="active mt-3 a">
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
                    BookNow
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container showcase-text2">
          <h3 className="mt-5 text-center">Contact</h3>
          <p className="text-center mt-3">Call us Anytime We Will Answer</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="map p-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-12 col-xl-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8165228117655!2d7.412250714276791!3d9.080473290682116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af23ae85fbf%3A0xb5dd1256ac5db950!2sProjaro!5e0!3m2!1sen!2sng!4v1621628225564!5m2!1sen!2sng"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-xs-12 col-lg-12 col-xl-12 grid-info">
              <div className="col-xs-12 col-lg-3 col-xl-3">
                <h2>Location & Hours</h2>
              </div>
              <div className="col-xs-12 col-lg-4 col-xl-4">
                <p>Kado Estate</p>
                <p>Road 22</p>
                <p>House 40, Abuja</p>
                <p>08148593950</p>
                <p>email@email.com</p>
                <Link
                  to="https://www.google.com/maps/dir//Projaro,+House+40+22+Rd,+Kado+Estate,+Abuja/@9.0804733,7.4122507,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0af23ae85fbf:0xb5dd1256ac5db950!2m2!1d7.4144394!2d9.080468"
                  target="_blank"
                >
                  Get Directions
                </Link>
              </div>
              <div className="col-xs-12 col-lg-4 col-xl-4">
                `<p>Monday: Closed</p>
                <p>Tuesday: 10–8pm</p>
                <p>Wednesday: 10–8pm</p>
                <p>Thursday: 10–9pm</p>
                <p>Friday: 10–9pm</p>
                <p>Saturday: 9–8pm</p>
                <p>Sunday: 10–6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <div className="rin">
          <RingLoader loading={loading} size={150} color={"#0d6efd"} />
        </div>
      ) : (
        <section>
          <div className="container p-3">
            <div className="row">
              <div className="col-xs-12 col-lg-4">
                <h2>Send Us A message</h2>
              </div>
              <div className="col-xs-12 col-lg-6">
                <form
                  className="form"
                  onSubmit={(e) => {
                    sendMessage();
                    e.preventDefault();
                  }}
                >
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={updateForm}
                    value={form.name}
                    required
                    name="name"
                  />
                  <label> Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={updateForm}
                    value={form.email}
                    name="email"
                    required
                  />
                  <label> Message</label>
                  <textarea
                    placeholder="Enter Message"
                    onChange={updateForm}
                    value={form.textarea}
                    required
                    name="textarea"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
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

export default Contact;
