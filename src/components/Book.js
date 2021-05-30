import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import Header from "./BookNow Components/Header";
import Service from "./BookNow Components/Service";
import SelectCharacter from "./BookNow Components/SelectCharcter";
import Login from "./BookNow Components/Login";
import Payment from "./BookNow Components/Payment";

const Book = () => {
  // For Page Change
  const [count, setCount] = useState(1);

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

  const [cart, setCart] = useState([]);

  const addToCart = (check, item) => {
    const product = cart.find((val) => val.id === item.id);
    if (product && check) {
      const index = cart.indexOf(product)
      setCart([...cart.splice(0, index), ...cart.splice(index + 1)])
      return
    };
    if (!product && !check) setCart([...cart, item]);  
  };

  //   const service = e => {
  //     let name = check
  //     name.push(e.target.value)
  //     setCheck(name)
  //     console.log(check);
  //   }

  return (
    <div>
      <div className="bodystyle">
        <form>
          {count === 1 ? (
            <div>
              <Header
                count={count}
                setCount={setCount}
                cart={cart}
                products={products}
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
            <SelectCharacter count={count} setCount={setCount} />
          ) : null}
          {count === 3 ? (
            <div>
              <Login count={count} setCount={setCount} />
            </div>
          ) : null}
          {count === 4 ? (
            <div>
              <Payment count={count} setCount={setCount} />
            </div>
          ) : null}
          {count === 4 ? (
            <input type="submit" className="btn btn-secondary" value="Submit" />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Book;
