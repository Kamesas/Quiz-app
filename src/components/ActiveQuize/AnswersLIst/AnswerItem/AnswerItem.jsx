import React from "react";
import stl from "./AnswerItem.module.sass";

const AnswerItem = ({ answer, onAnswerClickHandler, answerState }) => {
  const stls = stl["answer-item"];
  const stlAnswer = stl[answerState];
  // if (styleAnswer) {
  //   const stlAnswer = stl[styleAnswer !== null ? "wrong" : "success"];
  //   console.log(styleAnswer);
  // }

  return (
    <li
      className={`${stls} ${stlAnswer}`}
      onClick={() => onAnswerClickHandler(answer.id)}
    >
      {answer.answer}
    </li>
  );
};

export default AnswerItem;
