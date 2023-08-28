import { useState } from "react";

export default function FAQ() {
  return (
    <div className="p-10 bg-[#1b1c1e] text-white tracking-wide">
      <div className="text-center text-2xl md:text-4xl">
        <h1>FREQUENTLY</h1>
        <h1 className="font-semibold">ASKED QUESTIONS</h1>
      </div>
      <Questions />
    </div>
  );
}

function Questions() {
  const [questions, setQuestions] = useState(
    Array(10).fill({
      question: "DO YOU OFFER FREE SHIPPING?",
      answer:
        "Yes! We offer FREE SHIPPING on all orders in the USA, which you can track as soon as it leaves our warehouse until it arrives at your door.",
      expand: false,
    })
  );

  function expandQuestion(qIndex) {
    setQuestions((prevQues) => {
      return prevQues.map((ques, index) =>
        index == qIndex ? { ...ques, expand: !ques.expand } : ques
      );
    });
  }

  const questionsEl = questions.map((question, index) => (
    <div onClick={() => expandQuestion(index)} className=" cursor-pointer">
      <div>
        <img
          className="w-4 bg-white inline-block mr-4"
          src={`/${question.expand ? "minus" : "plus"}-solid.svg`}
        />
        <span className="font-semibold md:text-lg">{question.question}</span>
      </div>
      <p
        className={`text-sm md:text-base ml-10 mt-3 ${
          question.expand ? "block" : "hidden"
        }`}
      >
        {question.answer}
      </p>
    </div>
  ));

  return (
    <div className="mx-auto w-full md:w-1/2 mt-10 space-y-5">{questionsEl}</div>
  );
}
