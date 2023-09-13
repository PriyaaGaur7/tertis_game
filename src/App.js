import React, { Component } from "react";
import "./App.css";

import Game from "./containers/Game";

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      setTimeout(() => {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 2000);
      }, 1000);
    }
  }
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
