import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LoadError from "../components/LoadError";
import Loading from "../components/Loading";
import GameSession from "../components/GameSession";

const GameEngine: React.FC = () => {
  /* ----- Game Options ----- */
  const [searchParams, setSearchParams] = useSearchParams();
  const amount = searchParams.get("amount" || 10);
  const category = searchParams.get("category" || undefined);
  const difficulty = searchParams.get("difficulty" || undefined);

  // Generated url
  const url: string =
    "https://opentdb.com/api.php?&type=multiple" +
    ("&amount=" + amount) +
    (category ? "&category=" + category : "") +
    (difficulty ? "&difficulty=" + difficulty : "");

  // Fetch questions
  const { data, error } = useFetch(url);

  if (error) {
    return <LoadError />;
  } else if (data) {
    return <GameSession questions={data} />;
  }
  return <Loading />;
};

export default GameEngine;
