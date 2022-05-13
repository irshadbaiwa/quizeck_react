export function cleanData(data: Result[]): Data[] {
  let cleanedData = data.map((question: any) => {
    return {
      category: question.category,
      difficulty: question.difficulty,
      question: question.question,
      options: [
        ...question.incorrect_answers.map((option: any) => ({
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

type Result = {
  category: string;
  type: "multiple";
  difficulty: "hard" | "medium" | "easy";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type Data = {
  category: string;
  difficulty: "hard" | "medium" | "easy";
  question: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
};

/*

----- JSON RESPONSE STRUCTURE -----
    
    {
      "response_code": 0, // 0: success, otherValue: some error occured
      "results": [
        {
          "category": "Sports",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What is the nickname of Northampton town&#039;s rugby union club?",
          "correct_answer": "Saints",
          "incorrect_answers": [
            "Harlequins",
            "Saracens",
            "Wasps"
          ]
        },
        {
          "category": "Geography",
          "type": "multiple",
          "difficulty": "hard",
          "question": "Which of these island countries is located in the Caribbean?",
          "correct_answer": "Barbados",
          "incorrect_answers": [
            "Fiji",
            "Maldives",
            "Seychelles"
          ]
        },
      ]
    }

----- CLEANED DATA STRUCTURE -----

    [
      {
        "category": "Sports",
        "difficulty": "medium",
        "question": "What is the nickname of Northampton town&#039;s rugby union club?",
        "options": [
          {"option": "Harlequins", "isCorrect": false}
          {"option": "Saints", "isCorrect": true}
          {"option": "Wasps", "isCorrect": false}
          {"option": "Saracens", "isCorrect": false}
        ]
      }
    ]

*/
