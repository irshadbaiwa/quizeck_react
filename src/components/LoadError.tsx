import React from "react";
import { useNavigate } from "react-router";

const LoadError: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center text-center p-5 max-w-md m-auto">
      <h1 className="m-2 text-red-600 font-semibold text-2xl sm:text-4xl">
        Error!
      </h1>
      <p className="m-2 text-lg">
        An error occured while fetching questions, please check your internet
        connection and try again.
      </p>
      <button
        onClick={() => navigate("/")}
        className="py-2 px-4 mt-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
      >
        Back
      </button>
    </div>
  );
};

export default LoadError;
