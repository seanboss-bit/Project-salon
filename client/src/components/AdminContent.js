import React from "react";

const AdminContent = ({ admin }) => {
  const newDate = () => {
    new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000);
  };

  console.log(newDate());

  return (
    <div className="adminbookings mt-5">
      <div className="bookone mb-5 pt-3">
        <div className="container">
          <h2>Clients Name: {admin.name}</h2>
          <h4>Services Booked: {admin.services}</h4>
          <h3>Total Price: ${admin.total}</h3>
          <h5>Date OF Booking: {admin.dateOfBooking}</h5>
          <h5>AppointMent Date: {newDate}</h5>
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
