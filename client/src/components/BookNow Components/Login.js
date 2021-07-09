import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Login = ({
  count,
  setCount,
  login,
  setLogin,
  setRegister,
  register,
  registerUser,
  LoginUser,
  loading,
}) => {
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
      const { username, password } = login;
      LoginUser({
        username,
        password,
      });
    }

    e.preventDefault();
  };
  const { username, email, password } = register;

  const registerSubmit = (e) => {
    if (username === "" || password === "" || email === "") {
      alert("Enter Required Fields");
    } else {
      registerUser({
        username,
        email,
        password,
      });
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
      {loading ? (
        <div className="rings">
          <RingLoader loading={loading} size={150} color={"#000"} />
        </div>
      ) : (
        <div>
          <div>
            <div
              className="containerlogin"
              id={container ? "sign-up-mode" : null}
            >
              <div className="forms-container">
                <div className="signin-signup">
                  <div className="sign-in-form form2" onSubmit={(e) => {}}>
                    <h2 className="title">Sign In</h2>
                    <div className="input-field">
                      <i className="fas fa-user "></i>
                      <input
                        type="text"
                        placeholder="Enter FullName"
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
                    <button
                      value="Login"
                      className="btn2 solid"
                      disabled={count > 3}
                      onClick={submitButton}
                    >
                      Login
                    </button>
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
                        placeholder="Enter FullName"
                        name="username"
                        value={username}
                        onChange={updateRegister}
                      />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope "></i>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={updateRegister}
                      />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock "></i>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={updateRegister}
                      />
                    </div>
                    <button
                      value="Sign Up"
                      className="btn2 solid"
                      onClick={registerSubmit}
                    >
                      Sign Up
                    </button>
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
      )}
    </div>
  );
};

export default Login;
