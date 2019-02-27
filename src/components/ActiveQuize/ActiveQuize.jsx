import React from "react";
import stl from "./ActiveQuize.module.sass";
import AnswersList from "./AnswersLIst/AnswersList";

const ActiveQuize = ({
  question,
  answers,
  onAnswerClickHandler,
  currentQuestion,
  quizeLength,
  answerState
}) => {
  return (
    <div className={stl["active-quize"]}>
      <p className={stl["active-quize-question"]}>
        <span>
          <strong>{currentQuestion}. </strong> {question}
        </span>
        <span>
          {currentQuestion} из {quizeLength}
        </span>
      </p>
      <AnswersList
        answers={answers}
        onAnswerClickHandler={onAnswerClickHandler}
        answerState={answerState}
      />
    </div>
  );
};

export default ActiveQuize;
