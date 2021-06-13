import { useState } from "react";
import React from "react";

const NewFeet = ({ feet, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            value=""
            onChange={(e) => {
              setCheck(!check);
              addToCart(check, feet);
            }}
          />
          <div className="in">
            <label>{feet.label}</label>
            <h5>${feet.price}</h5>
          </div>
        </div>
        <p className="lead">{feet.time}</p>
        <p>{feet.description}</p>
      </div>
    </div>
  );
};

export default NewFeet;
