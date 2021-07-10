import React, { useState, useEffect } from "react";
import AdminContent from "./AdminContent";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [adminData, setAdminData] = useState([]);

  const getBooking = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://looksndskin.herokuapp.com/booking/admin"
      );
      const bookings = response.data.data;

      setAdminData(bookings, ...adminData);
      if (response.data.message === "Booking Done") {
        setLoading(false);
        toast.success(`${response.data.message}`, {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      const err = error.response.data.error;
      setTimeout(() => {
        setTimeout(() => {
          setLoading(false);
          toast.error(err, {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
          });
        }, 4000);
      });
    }
  };
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      getBooking();
    }, 4000);
  }, []);
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
      {loading ? (
        <div className="ring">
          <RingLoader loading={loading} size={150} color={"#104911"} />
        </div>
      ) : (
        <div className="adminbookings mt-5">
          <div className=" container mb-5">
            {adminData.map((admin, idx) => (
              <>
                <AdminContent admin={admin} key={idx} />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
