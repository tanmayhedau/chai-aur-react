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
    setConvertedAmount(amount);
    setAmount(convertedAmount);
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1>Currency Convertor</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
        <InputBox
          label={"From"}
          amount={amount}
          selectCurrency={from}
          onAmountChange={(amount)=>setAmount(amount)}
          onCurrenncyChange={(currency)=>setAmount(currency)}
          currencyOptions={options}
        />
        <button onClick={swap}>Swap</button>
        <InputBox
          label={ "To" }
          amount={convertedAmount}
          onCurrenncyChange={ (currency) => setTo(currency) }
          selectCurrency={ to }
          currencyOptions={options}
        />
        <button type="submit">
          Convert {from} to {to}
        </button>
      </form>
    </>
  );
}

export default App;
