import { useState } from "react";

function Candidates({ onSelectCandidate }) {
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [questionTypes, setQuestionTypes] = useState([]);

  const types = [
    "Technical",
    "Projects",
    "DSA",
    "Behavioral",
    "AI / ML",
  ];

  const handleTypeChange = (type) => {
    if (questionTypes.includes(type)) {
      setQuestionTypes(questionTypes.filter((item) => item !== type));
    } else {
      setQuestionTypes([...questionTypes, type]);
    }
  };

  const handleStart = () => {
    if (
      !name.trim() ||
      !jobRole.trim() ||
      !experience ||
      questionTypes.length === 0
    ) {
      alert("Please fill all details and select at least one question type.");
      return;
    }

    const candidate = {
      name: name,
      jobRole: jobRole,
      yearsExperience: experience,
      questionTypes: questionTypes,
    };

    onSelectCandidate(candidate);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="mx-auto max-w-3xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Interview Setup
          </h1>

          <p className="mt-3 text-slate-400">
            Tell us a little about yourself before starting your interview.
          </p>
        </div>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Your Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Job Role
            </label>

            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              placeholder="e.g. Frontend Developer"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Experience
            </label>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-2 years">0-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 font-medium">
              Question Types
            </label>

            <div className="grid grid-cols-2 gap-3">
              {types.map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 hover:border-violet-500"
                >
                  <input
                    type="checkbox"
                    checked={questionTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="accent-violet-600"
                  />

                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full cursor-pointer rounded-lg bg-violet-700 py-3 font-semibold transition-all duration-200 hover:bg-violet-900"
          >
            Start Interview
          </button>

        </div>
      </div>
    </div>
  );
}

export default Candidates;