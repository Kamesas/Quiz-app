import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import stl from "./QuizeList.module.sass";

const l = [1, 2, 3];

class QuizeLilst extends Component {
  state = {};

  renderQuizesList = () => {
    return l.map((item, i) => {
      return (
        <li key={i}>
          <NavLink to={"/quize/" + item}>Тест: {item}</NavLink>
        </li>
      );
    });
  };

  render() {
    const style = {
      background: "rgba(31, 230, 184, 0.3)"
    };
    return (
      <div className={stl.QuizeLilst} style={style}>
        <div className={stl.QuizeWrapp}>
          <h1>Список тестов</h1>
          <ul>{this.renderQuizesList()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizeLilst;
