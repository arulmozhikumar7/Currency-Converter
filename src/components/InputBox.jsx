//Components/InputBox.jsx
import React, { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  CurrencyOptions = [],
  SelectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
  onEnterPress,
}) {
  const id = useId();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onEnterPress) {
      onEnterPress();
    }
  };

  return (
    <div>
      <div>
        <label htmlFor={id} className="font-bold">
          {label}
        </label>
      </div>
      <div>
        <input
          type="number"
          name=""
          id={id}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          onKeyPress={handleKeyPress} // Handle Enter key press
          disabled={amountDisabled}
          placeholder="Amount"
          className="text-center bg-gray-200 border-2 h-7"
        />
        <div>
          <span className="ml-0 mr-40 font-thin">Currency Type</span>
          <select
            className="h-8 text-center"
            value={SelectedCurrency}
            disabled={currencyDisabled}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {CurrencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
