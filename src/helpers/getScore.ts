export function getScore(result: any): any {
  if (!Array.isArray(result)) return 0;

  const totalQuestions = result.length;
  const correctAnswers = result.filter((question) => {
    return question.selectedAnswer === question.correctAnswer;
  }).length;

  return ((correctAnswers / totalQuestions) * 100).toFixed(1);
}
