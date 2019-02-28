import React, { Component } from "react";
import stl from "./Layout.module.sass";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
  state = { isOpenMenu: false };

  toggleMenuHandler = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    const { isOpenMenu } = this.state;

    return (
      <div className={stl["layout"]}>
        <MenuToggle
          isOpenMenu={isOpenMenu}
          toggleMenuHandler={this.toggleMenuHandler}
        />
        <Drawer
          isOpenMenu={isOpenMenu}
          toggleMenuHandler={this.toggleMenuHandler}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
