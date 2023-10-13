import { useState } from "react";

import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
        <InputBox
          label={"from"}
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setAmount(amount)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <br />
        <button onClick={swap}>swap</button>
        <InputBox
          label={"to"}
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />
        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  );
}

export default App;
