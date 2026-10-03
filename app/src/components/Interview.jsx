import { useState } from "react";

const questionBank = {
  Technical: [
    {
      topic: "React",
      question:
        "What is React and why is it used for building frontend applications?",
    },
    {
      topic: "React & Vite",
      question: "Why can Vite be used when creating a React application?",
    },
    {
      topic: "Git & GitHub",
      question: "Why are Git and GitHub useful when working on a project?",
    },
    {
      topic: "Structured Data",
      question: "What is structured data and how can it be processed?",
    },
    {
      topic: "SQL",
      question: "Why would you use SQL when working with structured data?",
    },
    {
      topic: "Knowledge Base",
      question: "Why do we create a knowledge base for an AI application?",
    },
    {
      topic: "APIs",
      question:
        "What is an API and how can a frontend communicate with a backend?",
    },
    {
      topic: "Streaming",
      question:
        "What are streaming responses and why can they improve a chatbot?",
    },
    {
      topic: "Security",
      question:
        "Why is input validation important in an AI application?",
    },
    {
      topic: "Deployment",
      question: "Why do we use Docker when deploying an application?",
    },
  ],

  Projects: [
    {
      topic: "AI Project",
      question:
        "How would you connect a React frontend with an AI application backend?",
    },
    {
      topic: "Knowledge Base",
      question:
        "How would you convert different types of data into a knowledge base?",
    },
    {
      topic: "Vector Database",
      question:
        "How would you use a vector database in an AI project?",
    },
    {
      topic: "RAG",
      question:
        "What are the main steps involved in building a RAG application?",
    },
    {
      topic: "Chatbot",
      question:
        "What components would you need to build a complete AI chatbot?",
    },
    {
      topic: "API Integration",
      question:
        "How would you integrate an LLM API into a project?",
    },
    {
      topic: "Function Calling",
      question:
        "How could function calling be used in an AI project?",
    },
    {
      topic: "Agent",
      question:
        "How would you convert a simple chatbot into an AI agent?",
    },
    {
      topic: "MCP",
      question:
        "How could MCP be used to connect tools to an AI application?",
    },
    {
      topic: "Deployment",
      question:
        "What steps would you take to prepare an AI project for production?",
    },
  ],

  DSA: [
    {
      topic: "Problem Solving",
      question: "How do you approach a new programming problem?",
    },
    {
      topic: "Algorithms",
      question:
        "Why is choosing the right algorithm important?",
    },
    {
      topic: "Time Complexity",
      question:
        "What is time complexity and why is it important?",
    },
    {
      topic: "Space Complexity",
      question: "What is space complexity?",
    },
    {
      topic: "Arrays",
      question: "What is an array and when would you use one?",
    },
    {
      topic: "Searching",
      question:
        "What is binary search and when can it be used?",
    },
    {
      topic: "Sorting",
      question: "Why do we use sorting algorithms?",
    },
    {
      topic: "Stack",
      question:
        "What is a stack and where can it be useful?",
    },
    {
      topic: "Queue",
      question:
        "What is a queue and where can it be useful?",
    },
    {
      topic: "Optimization",
      question:
        "Why should we try to optimize an algorithm?",
    },
  ],

  Behavioral: [
    {
      topic: "Introduction",
      question:
        "Tell me about yourself and your technical background.",
    },
    {
      topic: "Learning",
      question:
        "How do you approach learning a new technology?",
    },
    {
      topic: "Problem Solving",
      question:
        "Tell me about a difficult problem you faced and how you solved it.",
    },
    {
      topic: "Teamwork",
      question:
        "Tell me about a time when you worked as part of a team.",
    },
    {
      topic: "Failure",
      question:
        "Tell me about a mistake you made and what you learned from it.",
    },
    {
      topic: "Time Management",
      question:
        "How do you manage multiple tasks at the same time?",
    },
    {
      topic: "Pressure",
      question:
        "How do you handle pressure during an important deadline?",
    },
    {
      topic: "Communication",
      question:
        "How would you explain a technical concept to a non-technical person?",
    },
    {
      topic: "Strengths",
      question:
        "What is one technical strength that you are confident about?",
    },
    {
      topic: "Goals",
      question:
        "What are your technical goals for the future?",
    },
  ],

  "AI / ML": [
    {
      topic: "Embeddings",
      question:
        "What are embeddings and why are they useful for text?",
    },
    {
      topic: "Vector Databases",
      question:
        "What is the purpose of a vector database in an AI application?",
    },
    {
      topic: "Semantic Search",
      question:
        "What is semantic search and how is it different from normal search?",
    },
    {
      topic: "RAG",
      question:
        "What is RAG and why is it useful for AI applications?",
    },
    {
      topic: "Prompt Engineering",
      question: "What is prompt engineering?",
    },
    {
      topic: "Function Calling",
      question:
        "What is function calling and why is it useful?",
    },
    {
      topic: "Fine-Tuning",
      question:
        "When would you use fine-tuning instead of prompting or RAG?",
    },
    {
      topic: "AI Agents",
      question:
        "What is an AI agent and how is it different from a simple chatbot?",
    },
    {
      topic: "Multi-Agent Systems",
      question:
        "What is a multi-agent system?",
    },
    {
      topic: "MCP",
      question:
        "What is the purpose of the Model Context Protocol?",
    },
  ],
};

function Interview({ candidate, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [questions] = useState(() => {
    let questions = [];

    candidate.questionTypes.forEach((type) => {
      questions = questions.concat(questionBank[type] || []);
    });

    questions.sort(() => Math.random() - 0.5);

    return questions.slice(0, 8);
  });

  const question = questions[currentQuestion];

  const handleSubmit = async () => {
    if (!answer.trim()) {
      return;
    }

    const newAnswer = {
      question: question.question,
      answer: answer,
      topic: question.topic,
    };

    const newAnswers = [...answers, newAnswer];

    setAnswers(newAnswers);
    setAnswer("");

    if (currentQuestion === 7) {
      setIsSubmitting(true);

      await onComplete(newAnswers);

      setIsSubmitting(false);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
         

          <h1 className="mt-1 text-3xl font-bold">
            PrepAI 
          </h1>

          <p className="mt-3 text-slate-400">
            Candidate:{" "}
            <span className="text-white">
              {candidate.name}
            </span>
          </p>

          <p className="text-slate-400">
            Role:{" "}
            <span className="text-white">
              {candidate.jobRole}
            </span>
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>
              Question {currentQuestion + 1} of 8
            </span>

            <span>
              {Math.round(
                ((currentQuestion + 1) / 8) * 100
              )}
              %
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-violet-600"
              style={{
                width: `${((currentQuestion + 1) / 8) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

          <p className="mb-3 text-sm text-violet-400">
            {question.topic}
          </p>

          <h2 className="mb-6 text-xl font-semibold">
            {question.question}
          </h2>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="min-h-[200px] w-full resize-none rounded-lg border border-slate-800 bg-slate-950 p-4 text-white outline-none focus:border-violet-500"
          />

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="mt-5 w-full cursor-pointer rounded-lg bg-violet-700 py-3 font-semibold hover:bg-violet-900 disabled:opacity-50"
          >
            {isSubmitting
              ? "Evaluating..."
              : currentQuestion === 7
              ? "Finish Interview"
              : "Submit Answer"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Interview;