import { useState } from "react";

export default function App() {
  const [billIn, setBillIn] = useState(0);
  const [myPer, setMyPer] = useState(0);
  const [frPer, setFrPer] = useState(0);

  const percentage = (Number(myPer) + Number(frPer)) / 2;

  function handleReset() {
    setBillIn(0);
    setMyPer(0);
    setFrPer(0);
  }

  return (
    <div>
      <BillInput billIn={billIn} onSetBill={setBillIn} />
      <SelectPercentage percentage={myPer} onSetPer={setMyPer}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={frPer} onSetPer={setFrPer}>
        How did your friend like the service?
      </SelectPercentage>
      <PayOutput
        billIn={billIn}
        onSetBill={setBillIn}
        percentage={percentage}
      />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ billIn, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill..."
        value={billIn}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPer }) {
  return (
    <div>
      <span>{children}</span>
      <select value={percentage} onChange={(e) => onSetPer(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function PayOutput({ billIn, onSetBill, percentage }) {
  const per = (percentage / 100) * billIn;
  const bill = Number(billIn) + per;

  return (
    <div>
      <h2>
        You pay ${bill} (${billIn} + ${per} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset, billIn, frPer, myPer }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
