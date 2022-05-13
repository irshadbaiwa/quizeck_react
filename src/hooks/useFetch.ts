import { useState, useEffect } from "react";
import { cleanData } from "../helpers/cleanData";

/* -------- useFetch Hook -------- */

export function useFetch(url: string): {
  data: Data[] | null;
  error: any;
} {
  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonObj: ResponseType = await response.json();

        if (jsonObj.response_code !== 0) {
          throw new Error("Something went wrong: " + jsonObj.response_code);
        }
        setData(cleanData(jsonObj.results));
      } catch (error: any) {
        console.error(error.message);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

/* -------- useFetch Hook end -------- */

type ResponseType = {
  response_code?: number;
  results: Result[];
};

type Result = {
  category: string;
  type: "multiple";
  difficulty: "hard" | "medium" | "easy";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Data = {
  category: string;
  difficulty: "hard" | "medium" | "easy";
  question: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
};
