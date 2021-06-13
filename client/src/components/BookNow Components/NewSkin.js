import React , {useState} from "react";

const NewSkin = ({ skin, addToCart }) => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="option1">
        <div className="service">
          <input
            type="checkbox"
            onChange={(e) => {
              setCheck(!check);
              addToCart(check, skin);
            }}
          />
          <div className="in">
            <label>{skin.label}</label>
            <h5>${skin.price}</h5>
          </div>
        </div>
        <p className="lead">{skin.time}</p>
        <p>{skin.description}</p>
      </div>
    </div>
  );
};

export default NewSkin;
