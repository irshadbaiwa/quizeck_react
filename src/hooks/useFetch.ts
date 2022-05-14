import { useState, useEffect } from "react";
import { cleanData } from "../helpers/cleanData";
import { ApiResponse } from "../@types/ApiResponse";
import { CleanQuestion } from "../@types/CleanQuestion";

/* -------- useFetch Hook -------- */

export function useFetch(url: string): {
  data: CleanQuestion[] | null;
  error: any;
} {
  const [data, setData] = useState<CleanQuestion[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonObj: ApiResponse = await response.json();

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
