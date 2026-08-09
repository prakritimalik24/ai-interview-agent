import { useState } from 'react'
import candidateData from "./data/candidates.json";

import Home from './components/Home';
import Candidates from './components/Candidates';
import Interview from './components/Interview';
import Results from './components/Results';
import './App.css'

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
  const errorData = await response.json();
  throw new Error(errorData.error || "Failed to evaluate interview");
}

    const data = await response.json();

    console.log("AI SUMMARY:", data.summary);

    setInterviewAnswers(answers);
    setEvaluation(data.summary);
    setPage("results");

  } catch (error) {
    console.error("Evaluation error:", error);
  }
};
  

  return (
    <>
  {page === "home" && (
        <Home onStart={() => setPage("candidate")} />
      )}

      {page === "candidate" && (
        <Candidates
          candidates={candidateData.candidates}
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
  />
)}
      </>
  );
  
}

export default App
