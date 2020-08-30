import React, { Component } from "react";

import "./styles.css";
import Deck from "./Deck";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }
  render() {
    return (
      <div>
        <Deck />
      </div>
    );
  }
}
