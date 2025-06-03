import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <>
      <div className="counter-container">
        <button
          onClick={() => {
            setCounter(count + 1);
          }}
        >
          +
        </button>
        <p> Count is {count}</p>
        <button
          onClick={() => {
            setCounter(count - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};
export default Counter;
