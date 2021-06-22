import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = ({ count, setCount, cart, total }) => {
  // let total = 0;
  // cart.forEach((item) => {
  //   total = total + item.price;
  // NavBar Open Close
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  // });
  return (
    <div>
      {/* Navbar */}
      <div className="what">
        <div className="white mb-5">
          <div className="container pt-3">
            <div className="top">
              <span>Step {count} Of 4</span>
              <div
                className={"bars1"}
                id={toggle ? "activeless" : ""}
                onClick={handleClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div>
              <h2 className="pt-3 pb-3 ">Select Service</h2>
            </div>
            <div className="navbar">
              <div onClick={handleClick}>
                <ul
                  className={"unilink pt-3 pb-4 links1"}
                  id={toggle ? "activenow" : ""}
                >
                  <Link
                    to="Hair"
                    className={"ms-3 me-3 a"}
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={50}
                    onClick={handleClick}
                  >
                    Featured
                  </Link>
                  <Link
                    to="hand"
                    className="ms-3 me-3 a"
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={50}
                    onClick={handleClick}
                  >
                    Hands
                  </Link>
                  <Link
                    to="feet"
                    className="ms-3 me-3 a"
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={50}
                    onClick={handleClick}
                  >
                    Feet
                  </Link>
                  <Link
                    to="handfeet"
                    className="ms-3 me-3 a"
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={50}
                    onClick={handleClick}
                  >
                    Hands + Feet
                  </Link>
                  <Link
                    to="body"
                    className="ms-3 me-3 a"
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={50}
                    onClick={handleClick}
                  >
                    Body
                  </Link>
                  <Link
                    to="skin"
                    className="ms-3 me-3 a"
                    activeClass="under"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={50}
                    onClick={handleClick}
                  >
                    Skin
                  </Link>
                </ul>
              </div>
              <div className="total">
                <div className="text-center totally">
                  <div className="words container">
                    <h3>Project</h3>
                    <p className="lead">Adress</p>
                  </div>
                  <div className="item">
                    <div className="one">
                      {cart.map((item) => (
                        <>
                          <h4 placeholder="No Item Selected">{item.label}</h4>
                          <p>{item.time}</p>
                        </>
                      ))}
                    </div>
                    <div className="two">
                      {cart.map((item) => (
                        <>
                          <p>${item.price}</p>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="responsive">
                    <div className="sum">
                      <div>
                        <h4>Total</h4>
                      </div>
                      <div>${total}</div>
                    </div>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setCount(count + 1)}
                      disabled={(count > 3, cart.length === 0)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
