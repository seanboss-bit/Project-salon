import React from 'react';

const Login = ({count, setCount}) => {
    return (
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
    );
}

export default Login;
