import { useState } from 'react'
import candidateData from "./data/candidates.json";

import Home from './components/Home';
import Candidates from './components/Candidates';
import Interview from './components/Interview';
import './App.css'

function App() {
const [page, setPage] = useState("home");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
    setPage("interview");
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

      {page === "interview" && selectedCandidate &&  (
        <Interview
        candidate={selectedCandidate}
        onComplete={(answers) => {
          console.log(answers);
          setPage("results");
        }}
        />
      )}
      </>
  );
  
}

export default App
