<div align="center">

# InterviewIQ

### AI-Powered Mock Interview Platform

Generate personalized interview questions, practice realistic interviews, and receive AI-generated feedback tailored to your resume.

<p>
  <a href="https://interviewai-client-f8pu.onrender.com/">Live Demo</a>
</p>

</div>

<br>

<p align="center">
  <img src="./Screenshots/interview.png" width="750">
</p>

---

## About

InterviewIQ is an AI-powered interview preparation platform that creates personalized interview experiences based on a candidate's resume.

The platform analyzes resumes, extracts skills and project information, generates role-specific interview questions, conducts AI-driven interview sessions, and provides detailed performance reports to help users prepare for real-world interviews.

---

## Key Highlights

* Resume-aware interview generation
* Technical and HR interview modes
* Voice-enabled interview experience
* AI-powered performance evaluation
* Detailed PDF reports
* Interview history tracking
* Secure authentication system
* Credit-based access model

---

## Product Preview

<table>
<tr>

<td align="center">
<img src="./Screenshots/Resume_analyzed.png" width="420"><br><br>
<b>Resume Analysis</b>
</td>

<td align="center">
<img src="./Screenshots/report.png" width="420"><br><br>
<b>Performance Report</b>
</td>

</tr>
</table>

<br>

<p align="center">
  <img src="./Screenshots/interview.png" width="750">
</p>

<p align="center">
<b>AI Interview Session</b>
</p>

---

## How It Works

### 1. Upload Resume

Upload a PDF resume and let the platform analyze your profile.

### 2. Skill Extraction

InterviewIQ identifies:

* Skills
* Technologies
* Projects
* Experience Level

### 3. Interview Generation

AI generates personalized questions based on the candidate profile.

### 4. Interview Session

Practice through an interactive interview experience with voice and text support.

### 5. Performance Evaluation

Responses are evaluated for:

* Technical Accuracy
* Communication Quality
* Problem Solving
* Answer Completeness

### 6. Detailed Feedback

Receive a comprehensive performance report with actionable suggestions.

---

## Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=flat\&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat\&logo=tailwindcss)

### Backend

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat\&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=flat\&logo=express)

### Database

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat\&logo=mongodb)

### AI

![OpenRouter](https://img.shields.io/badge/OpenRouter-000000?style=flat)
![LLMs](https://img.shields.io/badge/LLMs-Powered-blue)

### Services

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat\&logo=amazonaws)
![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?style=flat)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat)

</div>

---

## Architecture

```text
                User
                  │
                  ▼
          React Frontend
                  │
                  ▼
          Express Backend
                  │
      ┌───────────┼───────────┐
      ▼           ▼           ▼
 Authentication  AI Engine  Reports
      │           │           │
      └──────┬────┴────┬──────┘
             ▼         ▼

         MongoDB   OpenRouter
```

---

## Project Structure

```text
InterviewAI
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── ...
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── ...
│
├── Screenshots
│
└── README.md
```

---

## Local Setup

Clone the repository

```bash
git clone https://github.com/MainakDebnath6/InterviewAI.git
```

Install frontend dependencies

```bash
cd client
npm install
npm run dev
```

Install backend dependencies

```bash
cd server
npm install
npm start
```

Create a `.env` file

```env
MONGODB_URI=
JWT_SECRET=
OPENROUTER_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

---

## Future Improvements

* Video Interview Support
* AI Interview Avatars
* Company-Specific Interview Tracks
* Real-Time Interview Coaching
* Multi-Language Support
* Advanced Analytics Dashboard

---

## Author

**Mainak Debnath**

Portfolio
https://whimsical-peony-203dfa.netlify.app/

LinkedIn
https://linkedin.com/in/mainak-debnath01

Email
[mainakdebnath13@gmail.com](mailto:mainakdebnath13@gmail.com)

---

If you found this project interesting, consider giving it a star.
