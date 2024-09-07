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

  const handleStepDecrment = () => {
    setStep((prev) => prev - 1);
  };

  const handleStepIncrement = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="step-box">
      <button onClick={handleStepDecrment}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleStepIncrement}>+</button>
      <Count countState={step} />
    </div>
  );
}

function Count({ countState }) {
  const [count, setCount] = useState(0);

  const handleCountDecrment = () => {
    setCount((prev) => prev - countState);
  };

  const handleCountIncrement = () => {
    setCount((prev) => prev + countState);
  };

  return (
    <div className="count-box">
      <button onClick={handleCountDecrment}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleCountIncrement}>+</button>
      <Message count={count} />
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
