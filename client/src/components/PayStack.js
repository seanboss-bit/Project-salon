import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { PaystackButton } from "react-paystack";

const PayStack = ({
  total,
  login,
  register,
  loading,
  componentProp,
  email,
  setEmail,
}) => {
  let user = login.username || register.username;
  const [paylogin] = useState({
    username: user,
  });
  return (
    <div>
      <div className="success">
        <div className="container">
          <h4>Checkout</h4>
        </div>
      </div>
      <div className="pystack">
        {loading ? (
          <div className="rings">
            <RingLoader loading={loading} size={150} color={"#000"} />
          </div>
        ) : (
          <div className="paystack-box">
            <form id="paymentForm">
              <div className="pay_text">
                <h3 className="text-center">Looks & Skin</h3>

                <h6 className="text-center">Checkout</h6>
              </div>
              <div className="left_over">
                <div className="form-group">
                  <label for="amount">Amount (USD)</label>
                  <input type="text" value={total} disabled />
                </div>
                <div className="form-group">
                  <label for="first-name">UserName</label>
                  <input
                    type="text"
                    name="username"
                    value={paylogin.username}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label for="first-name">Email</label>
                  <input
                    type="text"
                    name="username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <PaystackButton {...componentProp} className="paystack-button" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PayStack;
