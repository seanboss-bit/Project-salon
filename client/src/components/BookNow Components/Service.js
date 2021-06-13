import React from "react";
import NewProduct from "./NewProduct";
import NewHand from "./NewHand";
import NewFeet from "./NewFeet";
import NewBody from "./NewBody";
import NewSkin from "./NewSkin";
import NewHandAndFeet from "./NewHandAndFeet";

const Service = ({
  products,
  hands,
  feets,
  addToCart,
  handsAndFeets,
  bodys,
  skins,
}) => {
 
  return (
    <div>
      <div className="options pt-5 mt-5">
        <div className="">
          <div className=" pt-3 pb-3 mt-4" id="Hair">
            <div className="container mt-5">
              <h1>Featured</h1>
              {products.map((product, idx) => (
                <>
                  <NewProduct  key={idx} product={product} addToCart={addToCart}/>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* HAnds */}
        <div className="pt-3 pb-3 mt-5" id="hand">
          <div className="container mt-5">
            <h1>Hand</h1>
            <p>Hands Treatment</p>
            {hands.map((hand, idx) => (
              <>
                <NewHand key={idx} hand={hand} addToCart={addToCart}/>
              </>
            ))}
          </div>
        </div>
        {/* Feet */}
        <div className="options pt-3 pb-3 mt-4" id="feet">
          <div className="container mt-5">
            <h1>Feet</h1>
            <p>Feet Treatment</p>
            {feets.map((feet, idx) => (
              <>
                <NewFeet key={idx} feet={feet} addToCart={addToCart}/>
              </>
            ))}
          </div>
        </div>
        {/* Hand & Feet */}
        <div className="options pt-3 pb-3 mt-4" id="handfeet">
          <div className="container mt-5">
            <h1>Hand & Feet</h1>
            {handsAndFeets.map((haet, idx) => (
              <>
                <NewHandAndFeet key={idx} haet={haet} addToCart={addToCart} />
              </>
            ))}
          </div>
        </div>
        {/* Body */}
        <div className="options pt-3 pb-3 mt-4" id="body">
          <div className="container mt-5">
            <h1>Full Body</h1>
            <p>Full Body Treatment</p>
            {bodys.map((body, idx) => (
              <>
               <NewBody key={idx} body={body} addToCart={addToCart}/>
              </>
            ))}
          </div>
        </div>
        {/* Skin */}
        <div className="options pt-3 pb-3 mt-4" id="skin">
          <div className="container mt-5">
            <h1>Skin</h1>
            <p>Skin Treatment</p>
            {skins.map((skin, idx) => (
              <>
               <NewSkin key={idx} skin={skin} addToCart={addToCart}/>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
