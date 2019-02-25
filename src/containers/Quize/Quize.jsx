import React, { Component } from "react";
import stl from "./Quize.module.sass";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";

class Quize extends Component {
  state = {};
  render() {
    return (
      <div className={stl["quize"]}>
        <div className={stl["quize-content"]}>
          <h1>Quize</h1>
          <div className={stl["quize-question"]}>
            <ActiveQuize />
          </div>
        </div>
      </div>
    );
  }
}

export default Quize;
