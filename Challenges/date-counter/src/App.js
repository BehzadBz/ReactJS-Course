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
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function reset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dateToString = date.toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // function handleMinusStep() {
  //   if (step > 1) setStep((s) => s - 1);
  // }

  // function handlePlusStep() {
  //   setStep((s) => s + 1);
  // }

  function handleMinusCount() {
    if (count > 0) setCount((s) => s - step);
  }

  function handlePlusCount() {
    setCount((s) => s + step);
  }

  return (
    <div>
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step: {step}</span>

      <div>
        <button onClick={handleMinusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handlePlusCount}>+</button>
      </div>

      <div>
        {count === 0 ? "Today is " : `${count} days from today is `}
        {dateToString}
      </div>
      {step !== 1 || count !== 0 ? <button onClick={reset}>Reset</button> : ""}
    </div>
  );
}
