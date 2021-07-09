import React from "react";

const Payment = ({ count, cart, total, radio, login, register }) => {
  let appoint = new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000);

  let user = login.username || register.username;
  return (
    <div className="successbody">
      <div className="success">
        <div className="container">
          <span>Step {count} Of 4</span>
          <h4>Order Summary</h4>
        </div>
      </div>
      <div className="page">
        <div className="container">
          <div className="finally">
            <h2>
              Client Name:<span className="sean"> {user}</span>
            </h2>
            <h5>
              Services Selected: {cart.map((item) => item.label).toString()}
            </h5>
            <h5>Date of Booking: {Date()}</h5>
            <h5>Total Amount: ${total}</h5>
            <h5>AppointMent Date: {appoint.toString()}</h5>
            <h5>Stylist: {radio}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
