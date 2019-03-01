import React, { Component } from "react";
import stl from "./QuizeCreator.module.sass";

class QuizeCreator extends Component {
  state = {};
  render() {
    return (
      <div className={stl.quizeCreator}>
        <h1>QuizeCreator</h1>
      </div>
    );
  }
}

export default QuizeCreator;
