//src/App.jsx
import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.jsx";
import InputBox from "./components/InputBox.jsx";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/8139599/pexels-photo-8139599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="bg-white border-2 rounded-lg w-[400px] flex justify-center items-center h-[350px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              convert();
            }
          }}
          className="flex flex-wrap items-center justify-center"
        >
          <InputBox
            label="From"
            amount={amount}
            CurrencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            SelectedCurrency={from}
            onEnterPress={convert}
          />
          <button
            onClick={() => {
              swap();
            }}
            className="w-24 h-8 mt-5 mb-5 font-semibold text-center rounded-full bg-sky-500"
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            CurrencyOptions={options}
            SelectedCurrency={to}
            amountDisabled={true}
            onCurrencyChange={(currency) => setTo(currency)}
            onAmountChange={(amount) => setConvertedAmount(amount)}
          />
          <button
            type="submit"
            className="w-56 h-10 mt-5 mb-5 font-semibold text-center rounded-full bg-sky-500"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
