import React, { useState } from "react";
import './null.css';
import './style.css';
import { getCourse } from "../../api/api";

export default function Converter() {
    
    const [ratesUSD, setRatesUSD] = useState(Math.round(36.5686));
    const [ratesEUR, setRatesEUR] = useState(Math.round(38.6201))
    const [currencyFrom, setCurrencyFrom] = useState(0);
    const [currencyTo, setCurrencyTo] = useState(0);
    const [selectedValueFrom, setSelectedValueFrom] =
    useState('UAH');
    const [selectedValueTo, setSelectedValueTo] =
    useState('USD');
    

    const handleChangeFrom = (event) => {
        setSelectedValueFrom(event.target.value);
    };

    const handleChangeTo = (event) => {
        setSelectedValueTo(event.target.value);
    };

    const changeCurrencyTo = ({target:{value}}) => {
        
        if(selectedValueFrom === 'UAH' && selectedValueTo === 'USD'){
            setCurrencyFrom(value);
            setCurrencyTo(value / ratesUSD)
        } else if (selectedValueFrom === 'USD' && selectedValueTo === 'EUR'){
            setCurrencyFrom(value);
            setCurrencyTo(value * (ratesUSD / ratesEUR));
        } else if (selectedValueFrom === 'USD' && selectedValueTo === 'UAH'){
            setCurrencyFrom(value);
            setCurrencyTo(value / ratesUSD);
        } else if (selectedValueFrom === 'EUR' && selectedValueTo === 'USD'){
            setCurrencyFrom(value);
            setCurrencyTo(value * (ratesUSD / ratesEUR));
        } else if (selectedValueFrom === 'EUR' && selectedValueTo === 'UAH'){
            setCurrencyFrom(value);
            setCurrencyTo(value * ratesEUR);
        } else if (selectedValueFrom === 'UAH' && selectedValueTo === 'EUR'){
            setCurrencyFrom(value);
            setCurrencyTo(value * ratesEUR)
        } else{
            setCurrencyFrom(value);
            setCurrencyTo(value)
        }
    };

    const changeCurrencyFrom = ({target:{value}}) => {
        if(selectedValueFrom === 'UAH' && selectedValueTo === 'USD'){
            setCurrencyTo(value);
            setCurrencyFrom(value * ratesUSD)
        } else if (selectedValueFrom === 'USD' && selectedValueTo === 'EUR'){
            setCurrencyTo(value);
            setCurrencyFrom(value * (ratesUSD / ratesEUR));
        } else if (selectedValueFrom === 'USD' && selectedValueTo === 'UAH'){
            setCurrencyTo(value);
            setCurrencyFrom(value / ratesUSD);
        } else if (selectedValueFrom === 'EUR' && selectedValueTo === 'USD'){
            setCurrencyTo(value);
            setCurrencyFrom(value * (ratesUSD / ratesEUR));
        } else if (selectedValueFrom === 'EUR' && selectedValueTo === 'UAH'){
            setCurrencyTo(value);
            setCurrencyFrom(value * ratesEUR);
        } else if (selectedValueFrom === 'UAH' && selectedValueTo === 'EUR'){
            setCurrencyTo(value);
            setCurrencyFrom(value / ratesEUR)
        } else{
            setCurrencyFrom(value);
            setCurrencyTo(value)
        }
    };
    



    return (
        <div className="converter-section">
            <div className="section-form">
                <select value={selectedValueFrom} onChange={handleChangeFrom}>
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input type='number' className="input-from" value={currencyFrom} onChange={changeCurrencyTo}/>
            </div>
            <div>

            </div>
            <div className="section-form">
                <select onChange={handleChangeTo} value={selectedValueTo}>
                    <option>UAH</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input type='number' className="input-from" value={currencyTo} onChange={changeCurrencyFrom}/>
            </div>
        </div>
    );
}