# AI Interview Agent 🤖

An AI-powered technical interview platform that conducts structured interviews and provides AI-generated feedback based on candidate responses.

## Features

### 👤 Interview Setup

Before starting the interview, candidates can enter:

- Name
- Job role
- Years of experience
- Preferred question types

Available question types:

- Technical
- Projects
- DSA
- Behavioral
- AI / ML

### 💻 Technical Interview

- Conducts an 8-question interview.
- Questions are selected based on the candidate's chosen question types.
- Questions are presented one at a time.
- Each question must be answered before moving to the next one.
- Questions are randomly selected for each interview.
- Interview progress is displayed using a progress bar.
- Candidate answers are collected throughout the interview.

### 🧠 AI Evaluation

After completing the interview:

1. All candidate answers are collected.
2. The answers are sent to the backend evaluation API.
3. Gemini AI analyzes the responses.
4. The candidate receives personalized interview feedback.

The evaluation includes:

- Overall technical understanding
- Concepts understood well
- Areas that need improvement
- Answer clarity and quality
- Overall assessment

### 📊 Interview Results

The results page displays:

- Candidate information
- Role and experience
- Number of questions answered
- AI-generated interview evaluation
- Structured headings and readable feedback
- Option to return to the home page

## 🛠️ Tech Stack

- React
- JavaScript
- Tailwind CSS
- Vercel
- Gemini API
- React Markdown

