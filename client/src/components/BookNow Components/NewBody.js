import React, { useState } from "react";

const NewBody = ({ body, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            onChange={(e) => {
              setCheck(!check);
              addToCart(check, body);
            }}
          />
          <div className="in">
            <label>{body.label}</label>
            <h5>${body.price}</h5>
          </div>
        </div>
        <p className="lead">{body.time}</p>
        <p>{body.description}</p>
      </div>
    </div>
  );
};

export default NewBody;
