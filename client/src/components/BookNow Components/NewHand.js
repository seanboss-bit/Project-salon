import React, { useState } from "react";

const NewHand = ({ hand, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            value=""
            checked={check}
            onChange={(e) => {
              setCheck(!check);
              addToCart(check, hand);
            }}
          />
          <div className="in">
            <label>{hand.label}</label>
            <h5>${hand.price}</h5>
          </div>
        </div>
        <p className="lead">{hand.time}</p>
        <p>{hand.description}</p>
      </div>
    </div>
  );
};

export default NewHand;
