export type Question = {
  category: string;
  type: "multiple";
  difficulty: "hard" | "medium" | "easy";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
