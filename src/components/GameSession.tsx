import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ResultContext } from "../store/ResultStore";
import Question from "./Question";
import { CleanQuestion } from "../@types/CleanQuestion";
import { ElapsedQuestion } from "../@types/ElapsedQuestion";

type Props = {
  questions: CleanQuestion[];
};

const GameSession: React.FC<Props> = ({ questions }) => {
  // Navigator
  const navigate = useNavigate();

  // Keep track of elapsed questions here
  const [elapsedQuestions, setElapsedQuestions] = useState<ElapsedQuestion[]>(
    []
  );

  // Current question's index
  let [index, setIndex] = useState(0);

  // Show next question
  function nextQuestion(currentQuestion: ElapsedQuestion): void {
    setElapsedQuestions((prevState) => [...prevState, currentQuestion]);
    setIndex((prevIndex) => prevIndex + 1);
  }

  // Context to store final result
  const [result, updateResult] = useContext(ResultContext);

  // Finish quiz
  function finishQuiz(lastQuestion: ElapsedQuestion): void {
    // Store all elapsed questions to context
    updateResult([...elapsedQuestions, lastQuestion]);

    // redirect to results page
    navigate("/result");
  }

  return (
    <div className="p-5">
      <div className="text-center m-2">
        <span>Question: </span>
        <span>
          {index + 1} of {questions.length}
        </span>
      </div>

      <div className="relative w-48 rounded-xl h-2 mx-auto mb-4 bg-white">
        <div
          style={{
            width: `${Math.round(((index + 1) / questions.length) * 100)}%`,
          }}
          className="absolute top-0 left-0 h-full bg-sky-600 rounded-xl"
        ></div>
      </div>

      <Question
        nextQuestion={nextQuestion}
        finishQuiz={finishQuiz}
        question={questions[index]}
        questionNumber={index + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default GameSession;
