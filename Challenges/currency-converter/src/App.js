// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [currencyA, setCurrencyA] = useState("EUR");
  const [currencyB, setCurrencyB] = useState("USD");
  const [output, setOutput] = useState("");

  useEffect(
    function () {
      async function fetchCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyA}&to=${currencyB}`
        );

        const data = await res.json();
        setOutput(data.rates);
      }

      fetchCurrency();
    },
    [amount, currencyA, currencyB]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setCurrencyA(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCurrencyB(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output.USD ?? output.EUR ?? output.CAD ?? output.INR}</p>
    </div>
  );
}
