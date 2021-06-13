import React, { useState } from "react";

const Login = ({ count, setCount, login, setLogin, setRegister, register }) => {
  const [container, setContainer] = useState(false);
  const signup = () => {
    setContainer(!container);
  };
  const updateLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const updateRegister = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const submitButton = (e) => {
    if (login.password === "" || login.username === "") {
      alert("Enter Required Fields");
    } else {
      setCount(count + 1);
    }
    e.preventDefault();
  };
  const registerSubmit = (e) => {
    if (
      register.username === "" ||
      register.password === "" ||
      register.email === ""
    ) {
      alert("Enter Required Fields");
    } else {
      setCount(count + 1);
    }
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <div className="container loginheader">
          <div className="logintop">
            <span>
              <button
                className="btn btn-secondary"
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              Step {count} Of 4
            </span>
          </div>
          <div className="logincontent">
            <h1 className="p-5">Login Register</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="containerlogin" id={container ? "sign-up-mode" : null}>
          <div className="forms-container">
            <div className="signin-signup">
              <div className="sign-in-form form2" onSubmit={(e) => {}}>
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                  <i className="fas fa-user "></i>
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    name="username"
                    value={login.username}
                    onChange={updateLogin}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock "></i>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={login.password}
                    onChange={updateLogin}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn2 solid"
                  disabled={count > 3}
                  onClick={submitButton}
                />
                <p className="social-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, unde.
                </p>
              </div>
              {/* REGISTER LOGIN */}
              <div className="sign-up-form form2">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="fas fa-user "></i>
                  <input
                    type="text"
                    placeholder="Enter UserName"
                    name="username"
                    value={register.username}
                    onChange={updateRegister}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope "></i>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={register.email}
                    onChange={updateRegister}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock "></i>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={register.password}
                    onChange={updateRegister}
                  />
                </div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn2 solid"
                  onClick={registerSubmit}
                  disabled={count > 3}
                />
                <p className="social-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, unde.
                </p>
              </div>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New Here</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, possimus.
                </p>
                <div className="btn2 transperent " onClick={signup}>
                  sign Up
                </div>
              </div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>one of us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, possimus.
                </p>
                <div className="btn2 transperent" onClick={signup}>
                  sign in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
