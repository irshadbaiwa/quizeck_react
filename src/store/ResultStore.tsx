import React, { useContext, useState } from "react";

export const ResultContext = React.createContext<any>(undefined);

type Props = {
  children: React.ReactNode;
};

type ElapsedQuestion = {
  questionNumber: number;
  questionText: string;
  correctAnswer: string;
  selectedAnswer: string;
};
const test: ElapsedQuestion[] = [
  {
    questionNumber: 1,
    questionText: "this is the first question....",
    correctAnswer: "option A",
    selectedAnswer: "option D",
  },
  {
    questionNumber: 2,
    questionText: "this is the second question....",
    correctAnswer: "option B",
    selectedAnswer: "option B",
  },
  {
    questionNumber: 3,
    questionText: "this is the third question....",
    correctAnswer: "option D",
    selectedAnswer: "option C",
  },
  {
    questionNumber: 4,
    questionText: "this is the fourth question....",
    correctAnswer: "option A",
    selectedAnswer: "option A",
  },
  {
    questionNumber: 5,
    questionText: "this is the fifth question....",
    correctAnswer: "option C",
    selectedAnswer: "option C",
  },
];

export const ResultStore: React.FC<Props> = ({ children }) => {
  const [result, setResult] = useState<any>(undefined);
  function updateResult(newResult: any) {
    setResult(newResult);
  }

  return (
    <ResultContext.Provider value={[result, updateResult]}>
      {children}
    </ResultContext.Provider>
  );
};
