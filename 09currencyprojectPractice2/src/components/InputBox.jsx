import React, { useState, useId } from "react";

function InputBox({
  label,
  amount,
  selectCurrency="usd",
  onAmountChange,
  onCurrenncyChange,
  currencyOptions,
}) {
  const amountId = useId();
  return (
    <div>
      <label htmlFor="amountId">{label}</label>
      <input
        id={amountId}
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />
      <label>Currency</label>
      <select
        value={selectCurrency}
        onChange={(e) => onCurrenncyChange(e.target.value)}>
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
