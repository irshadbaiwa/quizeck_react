import React, { useState } from "react";
import { ElapsedQuestion } from "../@types/ElapsedQuestion";

export const ResultContext = React.createContext<any>(undefined);

type Props = {
  children: React.ReactNode;
};

export const ResultStore: React.FC<Props> = ({ children }) => {
  const [result, setResult] = useState<ElapsedQuestion[] | undefined>(
    undefined
  );
  function updateResult(newResult: ElapsedQuestion[] | undefined) {
    setResult(newResult);
  }

  return (
    <ResultContext.Provider value={[result, updateResult]}>
      {children}
    </ResultContext.Provider>
  );
};
