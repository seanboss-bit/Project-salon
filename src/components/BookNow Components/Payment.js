import React from "react";

const Payment = ({ count, cart, total, radio }) => {
  return (
    <div className="successbody">
      <div className="success">
        <div className="container">
          <span>Step {count} Of 4</span>
          <h4>Success</h4>
        </div>
      </div>
      <div className="page">
        <div className="container">
          <div className="finally">
            <h2>Client Name: </h2>
            <h5>Services Selected: {cart.map((item) => item.label).toString()}</h5>
            <h5>Date of Booking: {Date()}</h5>
            <h5>Total Amount: ${total}</h5>
            <h5>AppointMent Date: {Date(4)}</h5>
            <h5>Stylist: {radio}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
