import React, { useState, useEffect } from "react";
import AdminContent from "./AdminContent";
import axios from "axios";

const Admin = () => {
  const [adminData, setAdminData] = useState([]);

  const getBooking = async () => {
    await axios.get("http://localhost:5000/booking/admin").then((response) => {

      try {
        const bookingData = response.data.data;

        setAdminData(...adminData , bookingData);
      } catch (error) {
        const err = error.response.data.error
        console.log(err)
      }
    });
  };
  useEffect(() => getBooking(), []);
  return (
    <div>
      <div className="adminheader">
        <div className="container text-center">
          <h1>Admin</h1>
        </div>
      </div>
      <div className="adminshowcase">
        <div className="container pt-5 text-center">
          <h2>Here Are The Bookings For Today....</h2>
        </div>
      </div>
      <div className="adminbookings mt-5">
        <div className=" container mb-5">
          {adminData.map((admin) => (
            <>
              <AdminContent admin={admin} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
