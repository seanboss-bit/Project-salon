import React from 'react';

const SelectCharcter = ({count, setCount}) => {
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
              <h2 className="p-5">Select Character</h2>
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

export default SelectCharcter;
