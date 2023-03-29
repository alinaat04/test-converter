import React, { Component, useState } from "react";
import { getCourse } from "../../api/api";
import './style.css'
import './null.css'

export default function Header() {
  const [USD_СС, setUSD_СС] = useState('');
  const [EUR_СС, setEUR_СС] = useState('');
  const [USD_RATE, setUSD_RATE] = useState(0);
  const [EUR_RATE, setEUR_RATE] = useState(0);

const newF = () => {
  getCourse().then((data) => {
    data.filter((elem) => {
      if (elem.cc == "USD") {
        setUSD_СС(elem.cc),
        setUSD_RATE(elem.rate) 
      } else if (elem.cc == "EUR"){
        setEUR_СС(elem.cc),
        setEUR_RATE(elem.rate) 
      }
    });
  }
  );
};





    return (
      <div className="header">
        <article className="usd">
          <h1>{USD_СС}</h1>
          <h1>{USD_RATE}</h1>
        </article>
        <article className="eur">
          <h1>{EUR_СС}</h1>
          <h1>{EUR_RATE}</h1>
        </article>
      </div>
    )
};
