import React, { Component } from "react";
import stl from "./Quize.module.sass";

class Quize extends Component {
  state = {};
  render() {
    return (
      <div className={stl["quize"]}>
        <h2>Quize</h2>
      </div>
    );
  }
}

export default Quize;
