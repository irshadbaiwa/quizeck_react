import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResultContext } from "../store/ResultStore";
import Header from "../components/Header";
import LogoIcon from "../components/LogoIcon";
import { getScore } from "../helpers/getScore";

export default function Result() {
  const [result, updateResult] = useContext(ResultContext);
  const score = getScore(result);

  function isCorrect(question: any): boolean {
    return question.selectedAnswer === question.correctAnswer;
  }

  // Redirect to "/play" if result context is undefined
  const navigate = useNavigate();
  useEffect(() => {
    if (!result) {
      navigate("/play");
    }
  }, []);
  if (!result) {
    console.log(result);
    return (
      <div className="flex flex-col justify-center items-center">
        <p>You need to play first</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <LogoIcon styleClass="h-20 sm:h-24 block fill-sky-600 m-auto mt-5" />

      <section className="m-auto text-center text-3xl my-4 text-sky-700 font-bold">
        <h1>
          Your score is:{" "}
          <span className={score >= 50 ? "text-emerald-700" : "text-rose-700"}>
            {`${score}%`}
          </span>
        </h1>
      </section>

      <details className="m-auto text-center my-2">
        <summary className="text-lg">View details</summary>
        <div>
          {result.map((question: any) => {
            return (
              <div key={question.questionNumber} className="my-4">
                <div className="w-5/6 max-w-xl h-56 m-auto p-4 bg-white rounded-xl drop-shadow overflow-y-auto">
                  <h2 className="font-semibold my-1 text-lg">
                    {`Question ${question.questionNumber} `}
                    {(isCorrect(question) && (
                      <svg
                        className="h-6 fill-emerald-500 mr-2 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                      </svg>
                    )) || (
                      <svg
                        className="h-6 fill-rose-600 mr-2 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                      </svg>
                    )}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: question.questionText }}
                    className="my-2"
                  ></p>
                  <p>
                    Your answer -{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: question.selectedAnswer,
                      }}
                      className={
                        isCorrect(question)
                          ? "text-emerald-700"
                          : "text-rose-700"
                      }
                    ></span>
                  </p>
                  <p>
                    Correct answer -{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: question.correctAnswer,
                      }}
                      className="text-emerald-700"
                    ></span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </details>

      <Link to="/play" className="m-auto text-center my-2 block">
        <button className="py-2 px-4 bg-sky-600 text-white text-lg hover:bg-sky-700 rounded">
          Play Again
        </button>
      </Link>
    </>
  );
}
