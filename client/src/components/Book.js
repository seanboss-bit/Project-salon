import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "./BookNow Components/Header";
import Service from "./BookNow Components/Service";
import SelectCharacter from "./BookNow Components/SelectCharcter";
import Login from "./BookNow Components/Login";
import Payment from "./BookNow Components/Payment";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

const Book = () => {
  // For Login Page
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [loginInit, setLoginInit] = useState({
    user: null,
    message: null,
    error: null,
  });
  const LoginUser = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login",
        formData,
        config
      );
      const payLoad = response.data;
      setLoginInit({
        ...loginInit,
        user: payLoad.user,
        message: payLoad.message,
        loading: true,
      });
      alert(`Welcome ${payLoad.user.username}, ${payLoad.message}`);
      setLoginInit({ ...loginInit });
    } catch (error) {
      const err = error.response.data.error;
      setLoginInit({
        ...loginInit,
        error: err,
      });
      alert(loginInit.error);
    }
  };

  // For Register
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [regInit, setRegInit] = useState({
    user: null,
    message: null,
    error: null,
  });

  const registerUser = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register",
        formData,
        config
      );

      const payLoad = response.data;
      setRegInit({
        ...regInit,
        user: payLoad.data,
        message: payLoad.message,
        loading: false,
      });
      alert(`Welcome ${payLoad.data.username}, ${payLoad.message}`);
      setRegInit({ ...regInit });
    } catch (error) {
      const err = error.response.data.error;
      setRegInit({
        ...regInit,
        error: err,
      });
      alert(regInit.error);
    }
  };

  // For Page Change
  const [count, setCount] = useState(1);

  // For Radio
  const [radio, setRadio] = useState("");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };

  // TO Add TO List
  const [isChecked, setIsChecked] = useState([0]);

  // Process of Adding to Cart for  FEatured
  const [products] = useState([
    {
      label: "Gel Manicure",
      completed: false,
      id: uuid(),
      price: 35,
      time: "45 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Gel Mani & Pedi",
      completed: false,
      id: uuid(),
      price: 35,
      time: "50 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Signature Pedicure",
      completed: false,
      id: uuid(),
      price: 35,
      time: "1hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Clean N Simple (Nail Art)",
      completed: false,
      id: uuid(),
      price: 35,
      time: "50 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Mani + Pedi",
      id: uuid(),
      completed: false,
      price: 95,
      time: "1hr 30min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Free From Mani + Pedi",
      completed: false,
      id: uuid(),
      price: 65,
      time: "60 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  // FOr HAnds
  const [hands] = useState([
    {
      label: "Naked Manicure",
      price: 35,
      time: "25 min",
      id: uuid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Signature Manicure",
      price: 35,
      time: "22 min",
      id: uuid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Free From Manicure",
      price: 15,
      time: "15 min",
      id: uuid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Gel Manicure",
      price: 15,
      time: "15 min",
      id: uuid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Soak Off",
      id: uuid(),
      price: 35,
      time: "35min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  // For Feet
  const [feets] = useState([
    {
      label: "Naked Pedicure",
      id: uuid(),
      price: 75,
      time: "1hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Free From Pedicure",
      id: uuid(),
      price: 45,
      time: "50 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Free From Gel Pedicure",
      id: uuid(),
      price: 95,
      time: "2hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  // Hand And Feet
  const [handsAndFeets] = useState([
    {
      label: "Naked Mani + Pedi",
      id: uuid(),
      price: 95,
      time: "2hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Free From Gel Mani + Pedi",
      id: uuid(),
      price: 35,
      time: "45 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Soak Off",
      id: uuid(),
      price: 35,
      time: "45 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: " Mani + Pedi",
      id: uuid(),
      price: 35,
      time: "45 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  // For Skin
  const [skins] = useState([
    {
      label: "Steam Bathing",
      id: uuid(),
      price: 95,
      time: "1hr 20min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Sauna",
      id: uuid(),
      price: 75,
      time: "30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "  Full Skin Treatment",
      id: uuid(),
      price: 95,
      time: "3hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  const [bodys] = useState([
    {
      label: " Full Body Massage",
      id: uuid(),
      price: 85,
      time: "2hr",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
    {
      label: "Deep Tissue Massage",
      price: 95,
      time: "2hr 30 min",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sit? Ex illo culpa similique nam vel utquidem sint aspernatur? Est, labore. Iusto repudiandae itaque, labore illum reiciendis doloremque libero!",
    },
  ]);

  //  Cart Functions
  const [cart, setCart] = useState([]);

  const addToCart = (check, item) => {
    const product = cart.find((val) => val.id === item.id);
    if (product && check) {
      const index = cart.indexOf(product);
      setCart([...cart.splice(0, index), ...cart.splice(index + 1)]);
      return;
    }
    if (!product && !check) setCart([...cart, item]);
  };

  // For Total Balance
  var total = 0;
  cart.forEach((item, index) => {
    total = total + item.price;
  });

  // To Save And Get From Local Storage
  const LOCAL_STORAGE_KEY = "teamsalon";
  // To Get
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedBookings) {
      console.log(savedBookings);
    }
  }, []);

  // TO Save
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const submitTransaction = async () => {
    try {
      const response = await axios.post("http://localhost:5000/booking/admin", {
        name: login.username || register.username,
        cart: cart.map((item) => item.label).toString(),
        stylist: radio,
        price: total,
      });
      alert(`${response.data.message}`);
    } catch (error) {
      const err = error.error;
      alert(err);
    }
  };

  return (
    <div>
      <div className="bodystyle">
        <form
          onSubmit={() => {
            alert(`Thanks For Visiting`);
            submitTransaction();
          }}
        >
          {count === 1 ? (
            <div>
              <Header
                count={count}
                setCount={setCount}
                cart={cart}
                products={products}
                total={total}
              />
              <Service
                products={products}
                addToCart={addToCart}
                hands={hands}
                feets={feets}
                handsAndFeets={handsAndFeets}
                bodys={bodys}
                skins={skins}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>
          ) : null}
          {count === 2 ? (
            <SelectCharacter
              count={count}
              setCount={setCount}
              radio={radio}
              handleChange={handleChange}
            />
          ) : null}
          {count === 3 ? (
            <div>
              <Login
                count={count}
                setCount={setCount}
                login={login}
                setLogin={setLogin}
                register={register}
                setRegister={setRegister}
                registerUser={registerUser}
                LoginUser={LoginUser}
                loginInit={loginInit}
              />
            </div>
          ) : null}
          {count === 4 ? (
            <div>
              <Payment
                count={count}
                setCount={setCount}
                cart={cart}
                total={total}
                radio={radio}
                login={login}
                register={register}
              />
            </div>
          ) : null}
          {count === 4 ? (
            <div className="successbutton">
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                Back
              </button>
              <input
                type="submit"
                className="btn btn-secondary"
                value="Submit"
              />
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Book;
