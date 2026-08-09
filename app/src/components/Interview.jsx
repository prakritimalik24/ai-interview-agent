import { useState } from "react";

const questions = [
  {
    day: 3,
    topic: "React & GitHub",
    question: "What is a React component, and why do we use components when building a React application?"
  },
  {
    day: 4,
    topic: "Structured Data & SQL",
    question: "Why would you use SQL when working with structured data?"
  },
  {
    day: 7,
    topic: "Embeddings",
    question: "What are embeddings, and why are they useful when working with text?"
  },
  {
    day: 8,
    topic: "Vector Databases",
    question: "What is the purpose of a vector database in an AI application?"
  },
  {
    day: 12,
    topic: "Prompt Engineering",
    question: "What is prompt engineering, and why is the design of a prompt important when working with an LLM?"
  },
  {
    day: 16,
    topic: "Backend & API Integration",
    question: "What is an API, and how can a frontend application communicate with a backend through an API?"
  },
  {
    day: 21,
    topic: "AI Agents",
    question: "What is an AI agent, and how is an agent different from a simple chatbot?"
  },
  {
    day: 23,
    topic: "MCP",
    question: "What is the purpose of the Model Context Protocol?"
  }
];

function Interview({ candidate, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);


  const question = questions[currentQuestion];
const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = async () => {
  if (!answer.trim() || isSubmitting) return;

  const newAnswer = {
    question: question.question,
    answer: answer,
    day: question.day,
    topic: question.topic
  };

  const updatedAnswers = [...answers, newAnswer];

  setAnswers(updatedAnswers);
  setAnswer("");

  if (currentQuestion === questions.length - 1) {
    setIsSubmitting(true);

    await onComplete(updatedAnswers);

    setIsSubmitting(false);
    return;
  }

  setCurrentQuestion(currentQuestion + 1);
};

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-violet-400">
              Technical Interview
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              AI Interview Agent
            </h1>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400">
              Candidate
            </p>

            <p className="font-medium">
              {candidate.name}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>

          
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-violet-600 transition-all"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <p className="text-sm font-medium text-violet-400">
            {question.topic}
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-relaxed">
            {question.question}
          </h2>

          {/* Answer */}
          <div className="mt-8">

            <label className="mb-3 block text-sm font-medium text-slate-300">
              Your Answer
            </label>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={7}
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-violet-500"
            />

          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-end">

           <button
  onClick={handleSubmit}
  disabled={!answer.trim() || isSubmitting}
  className="rounded-lg cursor-pointer bg-violet-700 px-6 py-3 font-semibold transition hover:bg-violet-900 disabled:cursor-not-allowed disabled:opacity-40"
>
  {isSubmitting
    ? "Evaluating..."
    : currentQuestion === questions.length - 1
      ? "Finish Interview"
      : "Submit Answer"}
</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Interview;