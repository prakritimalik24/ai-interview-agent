function Results({ candidate, answers, evaluation, onGoHome }) {
  const lines = evaluation.split("\n");

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm text-violet-400">
            Interview Complete
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Interview Results
          </h1>

        
        </div>
          

        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-5 text-xl font-semibold">
            Candidate Details
          </h2>

          <p className="mb-2 text-slate-400">
            Name: <span className="text-white">{candidate.name}</span>
          </p>

          <p className="mb-2 text-slate-400">
            Role: <span className="text-white">{candidate.jobRole}</span>
          </p>

          <p className="text-slate-400">
            Experience:{" "}
            <span className="text-white">
              {candidate.yearsExperience}
            </span>
          </p>
        </div>

        {/* AI Evaluation */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          

          <div>
            {lines.map((line, index) => {
              const text = line
                .replace(/\\/g, "")
                .replace(/\*\*/g, "")
                .trim();

              if (!text) {
                return <div key={index} className="h-3" />;
              }

              // Heading
              if (text.startsWith("#")) {
                const heading = text.replace(/^#+\s*/, "");

                return (
                  <h3
                    key={index}
                    className="mb-3 mt-7 text-xl font-bold text-white"
                  >
                    {heading}
                  </h3>
                );
              }

              // Horizontal line
              if (text === "---") {
                return (
                  <hr
                    key={index}
                    className="my-6 border-slate-700"
                  />
                );
              }

              // Bullet point
              if (text.startsWith("*")) {
                return (
                  <li
                    key={index}
                    className="ml-5 mb-2 list-disc leading-7 text-slate-300"
                  >
                    {text.replace(/^\*\s*/, "")}
                  </li>
                );
              }

              return (
                <p
                  key={index}
                  className="mb-4 leading-7 text-slate-300"
                >
                  {text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Home Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onGoHome}
            className="cursor-pointer rounded-lg bg-violet-700 px-8 py-3 font-semibold hover:bg-violet-900"
          >
            Go to Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Results;