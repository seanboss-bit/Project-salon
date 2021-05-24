import React from "react";

const SelectService = ({ nextStep, handleChange, values }) => {
  const cont = (e) => {
    // e.prevantDefault()
    nextStep();
  };

  return (
    <div>
      <div className="bodystyle">
        {/* Navbar */}
        <div className="white">
          <div className="container pt-3">
            <h2 className="pt-3 pb-3 ">Select Service</h2>
            <div className="navbar">
              <div>
                <ul className="unilink pt-3 pb-4">
                  <a href="#Hair" className="ms-3 me-3">
                    Featured
                  </a>
                  <a href="#Hair" className="ms-3 me-3">
                    Hands
                  </a>
                  <a href="#Hair" className="ms-3 me-3">
                    Feet
                  </a>
                  <a href="#Hair" className="ms-3 me-3">
                    Hands + Feet
                  </a>
                  <a href="#Hair" className="ms-3 me-3">
                    Body
                  </a>
                </ul>
              </div>
              <div className="total">
                <div className="text-center">
                    <div className="words container">
                        <h3>Project</h3>
                        <p className="lead">Adress</p>
                    </div>
                    <div className="item">
                        <div className="one">
                            <h4>hhd</h4>
                            <p>jnd</p>
                        </div>
                        <div className="two">
                            <p>$93</p>
                            <button onClick={cont}>next</button>
                        </div>

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

export default SelectService;
