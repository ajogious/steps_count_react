import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);

  const handleSepSlid = (e) => {
    const newValue = e.target.value;
    setStep(+newValue);
  };

  return (
    <div className="step-box">
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={handleSepSlid}
      />
      Step: <span>{step}</span>
      <Count countState={step} setStep={setStep} />
    </div>
  );
}

function Count({ countState, setStep }) {
  const [count, setCount] = useState(0);

  const handleCountDecrment = () => {
    setCount((prev) => prev - countState);
  };

  const handleCountIncrement = () => {
    setCount((prev) => prev + countState);
  };

  const handleCountChange = (e) => {
    const newValue = e.target.value;

    if (!isNaN(newValue)) {
      setCount(+newValue);
    }
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="count-box">
      <div>
        <button onClick={handleCountDecrment}>-</button>
        <input
          type="text"
          value={count}
          onChange={handleCountChange}
          style={{ margin: "10px" }}
        />
        <button onClick={handleCountIncrement}>+</button>
      </div>
      <Message count={count} />
      {countState > 1 ||
        (count !== 0 && <button onClick={handleReset}>Reset</button>)}
    </div>
  );
}

function Message({ count }) {
  const today = new Date();
  today.setDate(today.getDate() + count);
  const date = today.toDateString();

  return (
    <div className="message-box">
      {count >= 1 ? (
        <p>
          {count} day{count > 1 ? "s" : ""} from today will be {date}
        </p>
      ) : count < 0 ? (
        <p>
          {Math.abs(count)} day{count < -1 ? "s" : ""} ago was {date}
        </p>
      ) : (
        <p>Today is {date}</p>
      )}
    </div>
  );
}
