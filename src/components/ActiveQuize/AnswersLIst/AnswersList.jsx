import React from "react";
import stl from "./AnswersList.module.sass";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({ answers, onAnswerClickHandler, answerState }) => {
  return (
    <div className={stl["answers-list-wrapper"]}>
      <ul>
        {answers.map((answer, i) => (
          <AnswerItem
            key={i}
            answer={answer}
            onAnswerClickHandler={onAnswerClickHandler}
            answerState={answerState ? answerState[answer.id] : null}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnswersList;
