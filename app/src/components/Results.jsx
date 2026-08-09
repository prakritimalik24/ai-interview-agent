import ReactMarkdown from "react-markdown";

function Results({ candidate, answers, evaluation }) {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
            Interview Complete
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Interview Results
          </h1>

        </div>


        {/* Candidate Information */}
        <div className="mb-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Candidate */}
            <div>

              <p className="text-sm text-slate-500">
                Candidate
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-white">
                {candidate.name}
              </h2>

            </div>


            {/* Candidate Details */}
            <div className="flex flex-wrap gap-8">

              <div>
                <p className="text-sm text-slate-500">
                  Role
                </p>

                <p className="mt-1 font-medium text-slate-200">
                  {candidate.jobRole}
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Experience
                </p>

                <p className="mt-1 font-medium text-slate-200">
                  {candidate.yearsExperience} years
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Questions
                </p>

                <p className="mt-1 font-medium text-slate-200">
                  {answers.length}
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* AI Evaluation Card */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-lg">

          {/* Section Header */}
          <div className="mb-8 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">


            </div>

            <div>

             

              <h2 className="mt-1 text-2xl font-semibold text-white">
                Interview Assessment
              </h2>

            </div>

          </div>


          {/* AI Report */}
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">

            {evaluation ? (

              <ReactMarkdown
                components={{

                  /* Headings */

                  h1: ({ children }) => (
                    <h1 className="mb-5 mt-2 text-3xl font-bold text-white">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="mb-4 mt-8 border-b border-slate-700 pb-2 text-2xl font-semibold text-white">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="mb-3 mt-7 text-xl font-semibold text-violet-300">
                      {children}
                    </h3>
                  ),

                  /* Paragraph */

                  p: ({ children }) => (
                    <p className="mb-5 leading-7 text-slate-200">
                      {children}
                    </p>
                  ),

                  /* Bold */

                  strong: ({ children }) => (
                    <strong className="font-semibold text-white">
                      {children}
                    </strong>
                  ),

                  /* Bullet lists */

                  ul: ({ children }) => (
                    <ul className="mb-6 ml-6 list-disc space-y-3 text-slate-200">
                      {children}
                    </ul>
                  ),

                  /* Numbered lists */

                  ol: ({ children }) => (
                    <ol className="mb-6 ml-6 list-decimal space-y-3 text-slate-200">
                      {children}
                    </ol>
                  ),

                  /* List item */

                  li: ({ children }) => (
                    <li className="pl-2 leading-7">
                      {children}
                    </li>
                  ),

                  /* Inline code */

                  code: ({ children }) => (
                    <code className="rounded bg-slate-950 px-2 py-1 text-sm text-violet-300">
                      {children}
                    </code>
                  ),

                  /* Horizontal line */

                  hr: () => (
                    <hr className="my-8 border-slate-700" />
                  ),
                }}
              >
                {evaluation}
              </ReactMarkdown>

            ) : (

              <p className="text-slate-400">
                No AI evaluation available.
              </p>

            )}

          </div>

        </div>


      {/* Completion Footer */}



      </div>

    </div>
  );
}

export default Results;