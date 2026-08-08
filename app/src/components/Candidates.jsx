function Candidates({ candidates, onSelectCandidate }) {
    console.log("selected candidate",candidates);
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          

          <h1 className="mt-3 text-4xl font-bold">
            Select Your Candidate
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Choose a candidate profile to begin your technical interview.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {candidates.map((candidate) => (
            <div
              key={candidate.member.id}
              className="rounded-2xl border  border-slate-800 bg-slate-900 p-6"
            >
              

              <h2 className="mt-2 text-xl font-semibold">
                {candidate.member.name}
              </h2>

              <p className="mt-1 text-slate-400">
                {candidate.member.jobRole}
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-slate-500">
                    Experience:
                  </span>{" "}
                  {candidate.member.yearsExperience} years
                </p>

                <p>
                  <span className="text-slate-500">
                    Education:
                  </span>{" "}
                  {candidate.member.education}
                </p>
              </div>

              <button
                onClick={() => onSelectCandidate(candidate.member)}
                className="mt-6 w-full cursor-pointer rounded-lg bg-violet-700 px-4 py-3 font-semibold transition-all duration-200 hover:bg-violet-900 hover:text-lg"
              >
                Select Candidate
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Candidates;