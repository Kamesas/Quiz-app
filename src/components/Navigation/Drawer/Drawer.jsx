import React, { Component } from "react";
import stl from "./Drawer.module.sass";

const link = ["one", "two", "three"];

class Drawer extends Component {
  state = {};
  render() {
    const { isOpenMenu, toggleMenuHandler } = this.props;
    const cls = [stl.drawer];
    if (!isOpenMenu) {
      cls.push(stl.closeDrower);
    }

    return (
      <nav className={cls.join(" ")}>
        <div className={stl.overlay} onClick={toggleMenuHandler} />
        <ul>
          {link.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default Drawer;
