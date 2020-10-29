import React, { Component } from "react";
import Axios from "axios";
import QuoteCard from "./components/QuoteCard";

const sampleQuotes = {
  quote: "Ha ha!",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonState: sampleQuotes,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    Axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          simpsonState: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard quote={this.state.simpsonState} />
        <button type="button" onClick={this.getQuote}>
          Get QUOTE
        </button>
      </div>
    );
  }
}

export default App;
