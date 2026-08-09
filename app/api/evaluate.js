import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { candidate, answers } = req.body;

    const prompt = `
You are a technical interviewer evaluating a candidate after a completed interview.

Candidate:
Name: ${candidate.name}
Role: ${candidate.jobRole}
Experience: ${candidate.yearsExperience} years
Education: ${candidate.education}

Interview answers:
${answers
  .map(
    (item, index) => `
Question ${index + 1}
Topic: ${item.topic}
Question: ${item.question}
Candidate Answer: ${item.answer}
`
  )
  .join("\n")}

Evaluate the candidate's complete interview.

Return ONLY valid JSON in this exact structure:

{
  "score": number,
  "strengths": ["string", "string", "string"],
  "areasToImprove": ["string", "string", "string"],
  "feedback": "string"
}

The score should be between 0 and 100.

Base the evaluation on the quality, correctness, clarity, and completeness of the candidate's answers.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const evaluation = JSON.parse(response.text);

    return res.status(200).json(evaluation);
  } catch (error) {
    console.error("Evaluation error:", error);

    return res.status(500).json({
      error: "Failed to evaluate interview",
    });
  }
}