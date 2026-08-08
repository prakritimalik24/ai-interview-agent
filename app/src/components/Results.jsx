function Results({ candidate, answers, onRestart }) {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Interview Complete
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Great job, {candidate.name}!
          </h1>

          <p className="mt-3 text-slate-400">
            Here's a summary of your interview performance.
          </p>
        </div>

        {/* Score */}
        <div className="mx-auto mt-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border-8 border-violet-600">
          <span className="text-4xl font-bold">
            80
          </span>

          <span className="text-sm text-slate-400">
            / 100
          </span>
        </div>

        {/* Feedback */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Strengths
            </h2>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>✓ Good understanding of React fundamentals</li>
              <li>✓ Clear explanation of APIs</li>
              <li>✓ Strong understanding of AI concepts</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Areas to Improve
            </h2>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Vector databases</li>
              <li>• AI agents</li>
              <li>• MCP concepts</li>
            </ul>
          </div>

        </div>

        {/* Overall Feedback */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-xl font-semibold">
            Overall Feedback
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            The candidate demonstrated a good understanding of
            frontend development and several AI concepts. There is
            room for improvement in advanced AI topics, but the
            overall performance shows a solid foundation.
          </p>

        </div>

        {/* Answer count */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Interview completed with {answers.length} questions.
        </p>

        {/* Restart */}
        {/* <div className="mt-8 flex justify-center">
          <button
            onClick={onRestart}
            className="rounded-lg bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
          >
            Try Again
          </button>
        </div> */}

      </div>

    </div>
  );
}

export default Results;