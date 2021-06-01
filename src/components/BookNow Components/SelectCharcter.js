import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const SelectCharcter = ({ count, setCount , radio, handleChange, ref}) => {
  // const [radio, setRadio] = useState(false);
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setRadio(e.target.value)
  // }

  return (
    <div className="select">
      <div className="smooth">
        <div className="container">
          <span>Step {count} Of 4</span>
          <div className="selecttop">
            <button
              className="btn btn-secondary"
              onClick={() => setCount(count - 1)}
              disabled={count < 2}
            >
              <i class="fas fa-arrow-left"></i>
            </button>
            <h2 className="p-5">Select Character</h2>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(count + 1)}
              disabled={(count > 3, radio === false)}
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="character">
        <div className="container pt-5">
          <>
            <h1>{radio}</h1>
            <div>
              <div className="stylist">
                <input
                  type="radio"
                  name="stylist"
                  value="None"
                  onChange={handleChange}
                />
                <h3>None</h3>
              </div>
              <div className="stylist">
                <input
                  type="radio"
                  name="stylist"
                  value="Sean"
                  onChange={handleChange}
                />
                <h3>Sean</h3>
              </div>
              <div className="stylist">
                <input
                  type="radio"
                  name="stylist"
                  value="Okeke"
                  onChange={handleChange}
                />
                <h3>Okeke</h3>
              </div>
              <div className="stylist">
                <input
                  type="radio"
                  name="stylist"
                  value="Faith"
                  onChange={handleChange}
                />
                <h3>Faith</h3>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default SelectCharcter;
