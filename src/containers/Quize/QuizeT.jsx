import React, { Component } from "react";
import stl from "./Quize.module.sass";
import ActiveQuize from "../../components/ActiveQuize/ActiveQuize";
import FinishedQuize from "../../components/FinishedQuize/FinishedQuize";

const q = [
  {
    id: 111,
    question: "How you do it ?",
    rightAnswerId: 3,
    answers: [
      { id: 1, answer: "how" },
      { id: 2, answer: "how 2" },
      { id: 3, answer: "how 3" },
      { id: 4, answer: "how 4" }
    ]
  },
  {
    id: 222,
    question: "What you do it ?",
    rightAnswerId: 4,
    answers: [
      { id: 1, answer: "what" },
      { id: 2, answer: "what 2" },
      { id: 3, answer: "what 3" },
      { id: 4, answer: "what 4" }
    ]
  },
  {
    id: 3,
    question: "What you do it ?",
    rightAnswerId: 1,
    answers: [
      { id: 1, answer: "Who" },
      { id: 2, answer: "Who 2" },
      { id: 3, answer: "Who 3" },
      { id: 4, answer: "Who 4" }
    ]
  }
];

class Quize extends Component {
  state = {
    currentQuestion: 0,
    answerState: null,
    onClickAnswer: 0,
    isFinished: false,
    results: {},
    quize: q
  };

  onAnswerClickHandler = id => {
    const { currentQuestion, quize, answerState, results } = this.state;
    const question = quize[currentQuestion];

    if (answerState) {
      return;
    }

    if (question.rightAnswerId === id) {
      results[question.id] = { isRight: "success" };
      this.setState({ answerState: { [id]: "success" }, results });
      this.timeOut();
    } else {
      this.timeOut();
      results[question.id] = { isRight: "error" };
      this.setState({ answerState: { [id]: "error" }, results });
    }
  };

  timeOut = () => {
    const { currentQuestion, quize } = this.state;

    const timeOut = window.setInterval(() => {
      if (currentQuestion < quize.length - 1) {
        this.setState({
          currentQuestion: currentQuestion + 1,
          answerState: null
        });
      } else if (currentQuestion === quize.length - 1) {
        this.setState({ isFinished: true });
      }
      window.clearTimeout(timeOut);
    }, 1500);
  };

  render() {
    const {
      quize,
      currentQuestion,
      answerState,
      isFinished,
      results
    } = this.state;
    return (
      <div className={stl["quize"]}>
        <FinishedQuize results={results} quize={quize} />
        <div className={stl["quize-content"]}>
          <h1>{isFinished ? "Результат" : "Тестирование"}</h1>
          {isFinished ? (
            <FinishedQuize results={results} quize={quize} />
          ) : (
            <div className={stl["quize-question"]}>
              <ActiveQuize
                question={quize[currentQuestion].question}
                answers={quize[currentQuestion].answers}
                onAnswerClickHandler={this.onAnswerClickHandler}
                quizeLength={quize.length}
                currentQuestion={currentQuestion + 1}
                answerState={answerState}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Quize;
