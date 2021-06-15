import React from "react";

const AdminContent = ({ admin }) => {
  let appoint = new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000);

  return (
    <div className="adminbookings mt-5">
      <div className="bookone mb-5 pt-3">
        <div className="container">
          <h2>Clients Name: {admin.name}</h2>
          <h2>Stylist: {admin.stylist}</h2>
          <h4>Services Booked: {admin.cart}</h4>
          <h3>Total Price: ${admin.price}</h3>
          <h5>Date OF Booking: {admin.dateofreg}</h5>
          <h5>AppointMent Date: {appoint.toString()}</h5>
          <p>Message: {admin.message}</p>
          <button className="btn btn-danger text-center but">
            Remove Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
