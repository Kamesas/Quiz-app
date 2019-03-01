import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import stl from "./Drawer.module.sass";

const links = [
  {
    to: "/",
    label: "Список",
    exact: true
  },
  {
    to: "/auth",
    label: "Авторизация",
    exact: false
  },
  {
    to: "/quize-creator",
    label: "Создать тест",
    exact: false
  }
];

class Drawer extends Component {
  state = {};

  renderLinks = () => {
    return links.map((link, i) => {
      return (
        <li key={i} onClick={this.props.toggleMenuHandler}>
          <NavLink to={link.to} exact={link.exact} activeClassName={stl.active}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const { isOpenMenu, toggleMenuHandler } = this.props;
    const cls = [stl.drawer];
    if (!isOpenMenu) {
      cls.push(stl.closeDrower);
    }

    return (
      <nav className={cls.join(" ")}>
        <div className={stl.overlay} onClick={toggleMenuHandler} />
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

export default Drawer;
