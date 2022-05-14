import React, { useState } from "react";
import { CleanQuestion } from "../@types/CleanQuestion";
import { ElapsedQuestion } from "../@types/ElapsedQuestion";

type Props = {
  question: CleanQuestion;
  questionNumber: number;
  totalQuestions: number;
  nextQuestion: (currentQuestion: ElapsedQuestion) => void;
  finishQuiz: (lastQuestion: ElapsedQuestion) => void;
};

const Question: React.FC<Props> = ({
  question,
  questionNumber,
  totalQuestions,
  nextQuestion,
  finishQuiz,
}) => {
  // selected option
  const [selected, setSelected] = useState<string | null>(null);

  // load next question or finish quiz
  function next(event: React.MouseEvent): void {
    event.preventDefault();

    // record current question
    const currentQuestion: ElapsedQuestion = {
      questionNumber,
      questionText: question.question,
      correctAnswer: question.options.filter(
        (option: any) => option.isCorrect
      )[0].option,
      selectedAnswer: selected || "Unanswered",
    };

    // finish quiz if no more questions
    if (questionNumber === totalQuestions) {
      finishQuiz(currentQuestion);
    } else {
      nextQuestion(currentQuestion);
    }

    setSelected(null);
  }

  return (
    <div className="w-4/5 max-w-xl m-auto">
      <div className="flex flex-col text-center sm:flex-row justify-between my-2">
        <p className="text-green-800">Category - {question.category}</p>
        <p className="text-cyan-800">Difficulty - {question.difficulty}</p>
      </div>

      <p
        className="text-center my-2 italic text-xl text-rose-800"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></p>

      <form>
        {question.options.map(
          (option: { option: string; isCorrect: boolean }, idx: number) => {
            return (
              <div key={idx + 1} className="m-2">
                <input
                  type="radio"
                  value={option.option}
                  checked={selected === option.option}
                  onChange={() => setSelected(option.option)}
                  id={`option${idx + 1}`}
                />
                <label
                  dangerouslySetInnerHTML={{ __html: option.option }}
                  htmlFor={`option${idx + 1}`}
                  className="ml-2"
                ></label>
              </div>
            );
          }
        )}
        <button
          type="submit"
          onClick={next}
          className="py-2 px-4 mt-6 bg-sky-600 hover:bg-sky-700 text-white rounded"
        >
          {questionNumber === totalQuestions ? "Finish" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default Question;
