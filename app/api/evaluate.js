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
You are a technical interviewer.

Analyze the following completed interview and provide a concise but useful overall evaluation.

Candidate:
Name: ${candidate.name}
Role: ${candidate.jobRole}

Interview Answers:

${answers
  .map(
    (item, index) => `
Question ${index + 1}: ${item.question}
Topic: ${item.topic}
Candidate Answer: ${item.answer}
`
  )
  .join("\n")}

Write a complete interview summary.

Your summary should:
- Discuss the candidate's overall understanding.
- Mention concepts they understood well.
- Mention concepts where their understanding appears weak or incomplete.
- Comment on the clarity and quality of their answers.
- Give a short overall assessment.
- Be professional and constructive.
- Do not use JSON.
- Do not give a numerical score.
- Write the response as normal readable text with short paragraphs and headings.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return res.status(200).json({
      summary: response.text,
    });

 } catch (error) {
  console.error("Evaluation error:", error);

  return res.status(500).json({
    error: error.message,
  });
}
}