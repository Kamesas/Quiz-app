import React, { Component } from "react";
import stl from "./Layout.module.sass";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className={stl["layout"]}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
