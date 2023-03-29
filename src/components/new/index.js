import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Converter()  {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
      setCurrencies(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fromCurrencyRate = currencies.find((currency) => currency.cc === fromCurrency)?.rate;
    const toCurrencyRate = currencies.find((currency) => currency.cc === toCurrency)?.rate;
    if (fromCurrencyRate && toCurrencyRate) {
      const calculatedAmount = (amount / fromCurrencyRate) * toCurrencyRate;
      setConvertedAmount(calculatedAmount.toFixed(2));
    }
  }, [fromCurrency, toCurrency, amount, currencies]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    const toCurrencyRate = currencies.find((currency) => currency.cc === toCurrency)?.rate;
    const calculatedAmount = (amount / e.target.value) * toCurrencyRate;
    setConvertedAmount(calculatedAmount.toFixed(2));
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    const fromCurrencyRate = currencies.find((currency) => currency.cc === fromCurrency)?.rate;
    const calculatedAmount = (amount / fromCurrencyRate) * e.target.value;
    setConvertedAmount(calculatedAmount.toFixed(2));
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    const fromCurrencyRate = currencies.find((currency) => currency.cc === fromCurrency)?.rate;
    const toCurrencyRate = currencies.find((currency) => currency.cc === toCurrency)?.rate;
    const calculatedAmount = (e.target.value / fromCurrencyRate) * toCurrencyRate;
    setConvertedAmount(calculatedAmount.toFixed(2));
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="from-currency">From:</label>
        <select id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency.cc} value={currency.rate}>
            </option>
          ))}
        </select>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
      <label>To:</label>
        <select id="from-currency" value={toCurrency} onChange={handleToCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency.cc} value={currency.rate}>
            </option>
          ))}
        </select>
        <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        </div>
  );
          }