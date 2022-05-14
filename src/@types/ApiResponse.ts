import { Question } from "./Question";

export type ApiResponse = {
  response_code?: number;
  results: Question[];
};
