import { useState } from "react";

import Home from "./components/Home";
import Candidates from "./components/Candidates";
import Interview from "./components/Interview";
import Results from "./components/Results";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [evaluation, setEvaluation] = useState("");

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
    setPage("interview");
  };

  const handleInterviewComplete = async (answers) => {
    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          candidate: selectedCandidate,
          answers: answers,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Evaluation failed");
      }

      const data = await response.json();

      setInterviewAnswers(answers);
      setEvaluation(data.summary);
      setPage("results");

    } catch (error) {
      console.log("Evaluation error:", error);
      alert("Something went wrong while evaluating the interview.");
    }
  };

  const goHome = () => {
    setSelectedCandidate(null);
    setInterviewAnswers([]);
    setEvaluation("");
    setPage("home");
  };

  return (
    <>
      {page === "home" && (
        <Home onStart={() => setPage("candidate")} />
      )}

      {page === "candidate" && (
        <Candidates
          onSelectCandidate={handleSelectCandidate}
        />
      )}

      {page === "interview" && selectedCandidate && (
        <Interview
          candidate={selectedCandidate}
          onComplete={handleInterviewComplete}
        />
      )}

      {page === "results" && selectedCandidate && (
        <Results
          candidate={selectedCandidate}
          answers={interviewAnswers}
          evaluation={evaluation}
          onGoHome={goHome}
        />
      )}
    </>
  );
}

export default App;