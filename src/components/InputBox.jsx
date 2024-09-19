
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
})
 {
  const amountInputId = useId()
  return (
    <div className={`bg-white px-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor ={amountInputId} className="text-black/40 mb-2 inline-block">
          {label} </label>
        <input
        id={amountInputId}
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg shadow-sm border-2 px-1 m-2 py-1 bg-grey-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>

      </div>

    </div>
  )
}

export default InputBox


