import React, { useState } from "react";

const NewService = ({ product, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            value="Gel Manicure"
            checked={check}
            onChange={(e) => {
            setCheck(!check);
            addToCart(check, product);
            }}
            name={product.label}
          />
          <div className="in">
            <label>{product.label}</label>
            <h5>${product.price}</h5>
          </div>
        </div>
        <p className="lead">{product.time}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default NewService;
