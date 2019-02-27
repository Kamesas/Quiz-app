import React from "react";
import stl from "./FinishedQuize.module.sass";
import FinishedAnswersList from "./FinishedAnswersList/FinishedAnswersList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";

const FinishedQuize = ({ results, quize }) => {
  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={stl["finished"]}>
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
              {
                <ul>
                  <FinishedAnswersList
                    results={results}
                    quizeItem={quizeItem}
                  />
                </ul>
              }
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {quize.length}
      </p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuize;
