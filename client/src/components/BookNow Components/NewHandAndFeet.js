import React, { useState } from "react";

const NewHandAndFeet = ({ haet, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            onChange={(e) => {
              setCheck(!check);
              addToCart(check, haet);
            }}
          />
          <div className="in">
            <label>{haet.label}</label>
            <h5>${haet.price}</h5>
          </div>
        </div>
        <p className="lead">{haet.time}</p>
        <p>{haet.description}</p>
      </div>
    </div>
  );
};

export default NewHandAndFeet;
