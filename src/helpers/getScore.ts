import { ElapsedQuestion } from "../@types/ElapsedQuestion";

export function getScore(result: ElapsedQuestion[]): number {
  if (!Array.isArray(result)) return 0;

  const totalQuestions: number = result.length;
  const correctAnswers: number = result.filter((question: ElapsedQuestion) => {
    return question.selectedAnswer === question.correctAnswer;
  }).length;

  // score percentage
  return (correctAnswers / totalQuestions) * 100;
}
