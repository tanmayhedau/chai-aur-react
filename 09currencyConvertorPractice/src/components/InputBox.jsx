import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();
  return (
    <div>
      <label htmlFor={amountId}>{label}</label>
      <input
        id={amountId}
        type="number"
        placeholder="enter amount"
        value={amount}
        disabled={amountDisable}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <label>Currency Type</label>
      <select
        disabled={currencyDisable}
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
