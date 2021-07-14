import React from "react";

const MessageContent = ({ message }) => {
  return (
    <div>
      <div className="adminbookings mt-5">
        <div className="bookone mb-5 pt-3">
          <div className="container">
            <h4>Name: {message.name} </h4>
            <h5>Email: {message.email} </h5>
            <h6>Message: {message.message} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
