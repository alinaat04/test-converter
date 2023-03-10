import React, { Component } from "react";
import { getCourse } from "../../api/api";
import './style.css'
import './null.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD_СС: '',
      EUR_СС: '',
      USD_RATE: 0,
      EUR_RATE: 0
    }
  }

  componentDidMount() {
    getCourse().then((data) => {
      data.filter((elem) => {
        if (elem.cc == "USD") {
          this.setState({
            USD_СС: elem.cc,
            USD_RATE: elem.rate
          }) 
        } else if (elem.cc == "EUR"){
          this.setState({
            EUR_СС: elem.cc,
            EUR_RATE: elem.rate
          }) 
        }
      });
    }
    );
  }



  render() {
    return (
      <div className="header">
        <article className="usd">
          <h1>{this.state.USD_СС}</h1>
          <h1>{this.state.USD_RATE}</h1>
        </article>
        <article className="eur">
          <h1>{this.state.EUR_СС}</h1>
          <h1>{this.state.EUR_RATE}</h1>
        </article>
      </div>
    )
  }
};
