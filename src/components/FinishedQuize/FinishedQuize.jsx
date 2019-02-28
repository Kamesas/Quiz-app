import React from "react";
import stl from "./FinishedQuize.module.sass";
import FinishedAnswersList from "./FinishedAnswersList/FinishedAnswersList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";

const FinishedQuize = ({
  results,
  quize,
  retryHandler,
  showDatailsToggle,
  showDatails
}) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={stl["finished"]}>
      <p>
        Правильно {successCount} из {quize.length}
      </p>
      <div>
        <button onClick={retryHandler}>Повторить</button>
        <button onClick={showDatailsToggle}>Показать подробности</button>
      </div>
      <ul>
        {quize.map((quizeItem, i) => {
          return (
            <li key={i}>
              <span>{i + 1}. </span> {quizeItem.question}
              {results[quizeItem.id] === "error" ? (
                <FontAwesomeIcon icon={faTimesCircle} color="red" />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} color="green" />
              )}
              {showDatails ? (
                <ul>
                  <FinishedAnswersList
                    results={results}
                    quizeItem={quizeItem}
                  />
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FinishedQuize;
