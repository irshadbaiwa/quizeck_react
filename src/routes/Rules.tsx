import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TextHeading from "../components/TextHeading";

const Rules: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-5/6 max-w-screen-sm p-4 m-auto text-center">
        <TextHeading styleClass=" text-2xl sm:text-4xl mb-4">
          <div>
            <svg
              className="inline-block h-6 sm:h-10 sm:mr-4 mr-2 fill-sky-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M48 32C21.5 32 0 53.5 0 80v64C0 152.9 7.125 160 16 160H96V80C96 53.5 74.5 32 48 32zM256 380.6V320h224V128c0-53-43-96-96-96H111.6C121.8 45.38 128 61.88 128 80V384c0 38.88 34.62 69.63 74.75 63.13C234.3 442 256 412.5 256 380.6zM288 352v32c0 52.88-43 96-96 96h272c61.88 0 112-50.13 112-112c0-8.875-7.125-16-16-16H288z" />
            </svg>
            <span>Quizeck! Rules</span>
          </div>
        </TextHeading>
        <div className="text-xl">
          Playing the game/quiz is easy.
          <ul>
            <li>
              Head to{" "}
              <Link to="/play" className="text-blue-400">
                '/play' page
              </Link>
            </li>
            <li>Choose the number of questions you wish to answer</li>
            <li>Select category</li>
            <li>Select difficulty level and click start</li>
          </ul>
        </div>
        <p className="mt-6">
          Questions are fetched from{" "}
          <a
            href="https://opentdb.com"
            target="_blank"
            className="text-blue-400"
          >
            opentdb.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Rules;
