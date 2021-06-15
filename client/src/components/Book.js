import React, { useState, useRef } from "react";

const Book = () => {
  
  // For Page Change
  const [count, setCount] = useState(1);

  // TO Add TO List
  const [check, setCheck] = useState([]);

  // const service = e => {
  //   let name = check
  //   name.push(e.target.value)
  //   setCheck(name)
  //   console.log(check);
  // }

  return (
    <div>
      <div className="bodystyle">
        <form>
          {count == 1 ? (
            <div>
              {/* Navbar */}
              <div className="what">
                <div className="white mb-5">
                  <div className="container pt-3">
                    <span>Step {count} Of 4</span>
                    <div>
                      <h2 className="pt-3 pb-3 ">
                        <button
                          className="btn btn-secondary"
                          onClick={() => setCount(count - 1)}
                          disabled={count < 2}
                        >
                          <i class="fas fa-arrow-left"></i>
                        </button>{" "}
                        Select Service{" "}
                        <button
                          className="btn btn-secondary"
                          onClick={() => setCount(count + 1)}
                          disabled={count > 3}
                          disabled={check === []}
                        >
                          <i class="fas fa-arrow-right"></i>
                        </button>
                      </h2>
                    </div>
                    <div className="navbar">
                      <div>
                        <ul className="unilink pt-3 pb-4">
                          <a href="#Hair" className="ms-3 me-3 under">
                            Featured
                          </a>
                          <a href="#hand" className="ms-3 me-3">
                            Hands
                          </a>
                          <a href="#feet" className="ms-3 me-3">
                            Feet
                          </a>
                          <a href="#handfeet" className="ms-3 me-3">
                            Hands + Feet
                          </a>
                          <a href="#body" className="ms-3 me-3">
                            Body
                          </a>
                          <a href="#skin" className="ms-3 me-3">
                            Skin
                          </a>
                        </ul>
                      </div>
                      <div className="total">
                        <div className="text-center">
                          <div className="words container">
                            <h3>Project</h3>
                            <p className="lead">Adress</p>
                          </div>
                          <div className="item">
                            <div className="one">
                              <h4>{check}</h4>
                              <p>jnd</p>
                            </div>
                            <div className="two">
                              <p>$93</p>
                            </div>
                          </div>
                          <div className="sum">
                            <div>
                              <h4>Total</h4>
                            </div>
                            <div>
                              <p>$93</p>
                            </div>
                          </div>
                          {/* <button onClick={cont} className="btn btn-secondary">
                    Book
                  </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="options pt-5">
                <div className="mt-5">
                  <div className=" pt-3 pb-3 mt-4" id="Hair">
                    <div className="container mt-5">
                      <h1>Featured</h1>
                      <div className="option1 opt">
                        <div className="service">
                          <input
                            type="checkbox"
                            value="Gel Manicure"

                            // checked={check}
                            // onChange={e => setCheck(e.target.checked)}
                          />
                          <div className="in">
                            <label htmlFor="gel-manicure">Gel Manicure</label>
                            <h5>$35</h5>
                          </div>
                        </div>
                        <p className="lead">45 min</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                      <div className="option1">
                        <div className="service">
                          <input type="checkbox" value="" />
                          <div className="in">
                            <label htmlFor="gel-manicure">
                              Gel Mani & Pedi
                            </label>
                            <h5>$35</h5>
                          </div>
                        </div>
                        <p className="lead">50 min</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                      <div className="option1">
                        <div className="service">
                          <input type="checkbox" value="" />
                          <div className="in">
                            <label htmlFor="gel-manicure">
                              Signature Pedicure
                            </label>
                            <h5>$35</h5>
                          </div>
                        </div>
                        <p className="lead">1hr</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                      <div className="option1">
                        <div className="service">
                          <input type="checkbox" value="" />
                          <div className="in">
                            <label htmlFor="gel-manicure">
                              Clean N Simple (Nail Art)
                            </label>
                            <h5>$35</h5>
                          </div>
                        </div>
                        <p className="lead">50 min</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                      <div className="option1">
                        <div className="service">
                          <input type="checkbox" value="" />
                          <div className="in">
                            <label htmlFor="gel-manicure">Mani + Pedi</label>
                            <h5>$95</h5>
                          </div>
                        </div>
                        <p className="lead">1hr 30min</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                      <div className="option1">
                        <div className="service">
                          <input type="checkbox" value="" />
                          <div className="in">
                            <label htmlFor="gel-manicure">
                              Free From Mani + Pedi
                            </label>
                            <h5>$65</h5>
                          </div>
                        </div>
                        <p className="lead">60 min</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Labore, sit? Ex illo culpa similique nam vel ut
                          quidem sint aspernatur? Est, labore. Iusto repudiandae
                          itaque, labore illum reiciendis doloremque libero!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* HAnds */}
                <div className="pt-3 pb-3 mt-5" id="hand">
                  <div className="container mt-5">
                    <h1>Hand</h1>
                    <p>Hands Treatment</p>
                    <div className="option1 opt">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Naked Manicure</label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">25 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Signature Manicure
                          </label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">22 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Free From Manicure
                          </label>
                          <h5>$15</h5>
                        </div>
                      </div>
                      <p className="lead">15 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Gel Manicure</label>
                          <h5>$15</h5>
                        </div>
                      </div>
                      <p className="lead">15 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Soak Off</label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">35 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feet */}
                <div className="options pt-3 pb-3 mt-4" id="feet">
                  <div className="container mt-5">
                    <h1>Feet</h1>
                    <p>Feet Treatment</p>
                    <div className="option1 opt">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Naked Pedicure</label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">15 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Free From Pedicure
                          </label>
                          <h5>$75</h5>
                        </div>
                      </div>
                      <p className="lead">1hr</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Free From Gel Pedicure
                          </label>
                          <h5>$95</h5>
                        </div>
                      </div>
                      <p className="lead">2hr</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Hand & Feet */}
                <div className="options pt-3 pb-3 mt-4" id="handfeet">
                  <div className="container mt-5">
                    <h1>Hand & Feet</h1>
                    <div className="option1 opt">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Naked Mani + Pedi
                          </label>
                          <h5>$95</h5>
                        </div>
                      </div>
                      <p className="lead">2hr</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Free From Gel Mani + Pedi
                          </label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">45 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Soak Off</label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">45 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Mani + Pedi</label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">45 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="options pt-3 pb-3 mt-4" id="body">
                  <div className="container mt-5">
                    <h1>Full Body</h1>
                    <p>Full Body Treatment</p>
                    <div className="option1 opt">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Full Body Massage
                          </label>
                          <h5>$85</h5>
                        </div>
                      </div>
                      <p className="lead">2hr</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Deep Tissue Massage
                          </label>
                          <h5>$95</h5>
                        </div>
                      </div>
                      <p className="lead">2hr 30mins</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Signature Pedicure
                          </label>
                          <h5>$35</h5>
                        </div>
                      </div>
                      <p className="lead">45 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                  </div>
                </div>
                {/* Skin */}
                <div className="options pt-3 pb-3 mt-4" id="skin">
                  <div className="container mt-5">
                    <h1>Skin</h1>
                    <p>Skin Treatment</p>
                    <div className="option1 opt">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Steam Bathing</label>
                          <h5>$95</h5>
                        </div>
                      </div>
                      <p className="lead">1hr 20min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">Sauna</label>
                          <h5>$75</h5>
                        </div>
                      </div>
                      <p className="lead">30 min</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                    <div className="option1">
                      <div className="service">
                        <input type="checkbox" value="" />
                        <div className="in">
                          <label htmlFor="gel-manicure">
                            Full Skin Treatment
                          </label>
                          <h5>$95</h5>
                        </div>
                      </div>
                      <p className="lead">3hrs</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore, sit? Ex illo culpa similique nam vel ut
                        quidem sint aspernatur? Est, labore. Iusto repudiandae
                        itaque, labore illum reiciendis doloremque libero!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {count == 2 ? (
            <div>
              <span>Step {count} Of 4</span>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <h2 className="p-5">Select Character</h2>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count + 1)}
                disabled={count > 3}
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          ) : null}
          {count == 3 ? (
            <div>
              <span>Step {count} Of 4</span>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <h1 className="p-5">Login Register</h1>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count + 1)}
                disabled={count > 3}
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          ) : null}
          {count == 4 ? (
            <div>
              <span>Step {count} Of 4</span>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <h4>Success</h4>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count + 1)}
                disabled={count > 3}
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          ) : null}
          {count == 4 ? (
            <input type="submit" className="btn btn-secondary" value="Submit" />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Book;
