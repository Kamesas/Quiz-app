import React, { Component } from "react";
import stl from "./Auth.module.sass";

class Auth extends Component {
  state = {};
  render() {
    return (
      <div className={stl.auth}>
        <h1>Auth</h1>
      </div>
    );
  }
}

export default Auth;
