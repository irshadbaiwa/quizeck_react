import { Question } from "../@types/Question";
import { CleanQuestion } from "../@types/CleanQuestion";

export function cleanData(data: Question[]): CleanQuestion[] {
  let cleanedData = data.map((question: Question) => {
    return {
      category: question.category,
      difficulty: question.difficulty,
      question: question.question,
      options: [
        ...question.incorrect_answers.map((option: string) => ({
          option,
          isCorrect: false,
        })),
        {
          option: question.correct_answer,
          isCorrect: true,
        },
      ].sort(() => {
        const randomNum: number = +Math.random().toFixed(1);
        return 0.5 - randomNum;
      }),
    };
  });
  return cleanedData;
}
