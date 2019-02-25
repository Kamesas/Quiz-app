import React from "react";
import stl from "./ActiveQuize.module.sass";

const ActiveQuize = () => {
  return (
    <div className={stl["active-quize"]}>
      <p className={stl["active-quize-question"]}>
        <span>
          <strong>1.</strong>&nbsp; How are you ?
        </span>
        <span>4 из 9</span>
      </p>
      <ul>
        <li>Fine</li>
        <li>Ok</li>
        <li>Not bad</li>
        <li>fifty fifty</li>
      </ul>
    </div>
  );
};

export default ActiveQuize;
