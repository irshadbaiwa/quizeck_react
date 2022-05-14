export type CleanQuestion = {
  category: string;
  difficulty: "hard" | "medium" | "easy";
  question: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
};
