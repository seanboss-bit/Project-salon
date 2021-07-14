import React, { useState, useEffect } from "react";
import AdminContent from "./AdminContent";
import MessageContent from "./MessageContent";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [messages, setMessages] = useState([]);

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
  const getMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://looksndskin.herokuapp.com/message/locally");
      const Message = response.data.data;

      setMessages(Message, ...messages);
      if (response.data.message === "Here Are Sent Messages") {
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
      getMessage();
      setLoading(false);
      getBooking();
    }, 4000);
  }, []);
  return (
    <div>
      <ToastContainer autoClose={2500} />
      <div className="adminheader">
        <div className="container text-center">
          <h1>Admin</h1>
        </div>
        <div className="container adminbtn">
          <button className="btn btn-admin" onClick={() => setCount(1)}>
            Booking
          </button>
          <button className="btn btn-admin" onClick={() => setCount(2)}>
            Messages
          </button>
        </div>
      </div>

      {count === 1 ? (
        <div>
          {loading ? (
            <div className="ring">
              <RingLoader loading={loading} size={150} color={"#104911"} />
            </div>
          ) : (
            <div>
              <div className="adminshowcase">
                <div className="container pt-5 text-center">
                  <h2>Here Are The Bookings For Today....</h2>
                </div>
              </div>
              <div className="adminbookings mt-5">
                <div className=" container mb-5">
                  {adminData.map((admin, idx) => (
                    <>
                      <AdminContent admin={admin} key={idx} />
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
      {count === 2 ? (
        <div>
          {loading ? (
            <div className="ring">
              <RingLoader loading={loading} size={150} color={"#104911"} />
            </div>
          ) : (
            <div>
              <div className="adminshowcase">
                <div className="container pt-5 text-center">
                  <h2>Sent Messages</h2>
                </div>
              </div>
              <div className="adminbookings mt-5">
                <div className=" container mb-5">
                  {messages.map((message, idx) => (
                    <>
                      <MessageContent message={message} key={idx} />
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
