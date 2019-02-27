import React from "react";
import stl from "./FinishedAnswersList.module.sass";

const FinishedAnswersList = ({ quizeItem, results }) => {
  return (
    <React.Fragment>
      {quizeItem.answers.map(answer => {
        return (
          <li key={answer.id} className={stl["finished-answers-list"]}>
            {quizeItem.rightAnswerId === answer.id ? (
              <strong>{answer.answer}</strong>
            ) : (
              <span>{answer.answer}</span>
            )}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default FinishedAnswersList;
