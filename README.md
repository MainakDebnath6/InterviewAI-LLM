<div align="center">

# 🚀 InterviewAIM

### AI-Powered Mock Interview Platform for Students & Job Seekers

Practice interviews, get AI-generated feedback, track progress, and improve your interview performance with real-time analytics.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)]()
[![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)]()
[![JWT](https://img.shields.io/badge/Auth-JWT-orange)]()
[![Razorpay](https://img.shields.io/badge/Payments-Razorpay-blue)]()
[![License](https://img.shields.io/badge/License-MIT-red)]()

### 🌐 Live Demo

https://interviewai-client-f8pu.onrender.com

</div>

---

# 📖 Overview

InterviewIQ is a full-stack AI-powered interview preparation platform that helps students and job seekers prepare for technical and HR interviews.

The platform generates personalized interview questions, evaluates answers, provides detailed performance reports, and tracks interview history to help users improve continuously.

Designed using the MERN Stack with secure authentication, analytics dashboards, PDF report generation, and payment integration.

---

# ✨ Features

## 🤖 AI Mock Interviews

- Dynamic interview question generation
- Technical and HR interview rounds
- Personalized interview flow
- Realistic interview experience

## 📄 Resume-Based Question Generation

- Upload resume
- Extract skills automatically
- Generate role-specific questions

## 📊 Performance Analytics

- Communication Score
- Technical Score
- Confidence Score
- Overall Rating
- AI Feedback & Suggestions

## 📈 Progress Tracking

- Interview History
- Previous Reports
- Performance Trends
- Improvement Analysis

## 💳 Premium Features

- Razorpay Payment Integration
- Credit-Based Interview System
- Premium Interview Access

## 🔒 Secure Authentication

- JWT Authentication
- Protected Routes
- Secure API Endpoints
- Password Encryption

---

# 🏗️ System Architecture

```mermaid
flowchart LR

A[User]
B[React Frontend]
C[Node.js Backend]
D[(MongoDB)]
E[AI Interview Engine]
F[Resume Parser]
G[PDF Generator]
H[Razorpay]

A --> B
B --> C

C --> D
C --> E
C --> F
C --> G
C --> H
```

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router

## Backend

- Node.js
- Express.js
- JWT Authentication
- REST APIs

## Database

- MongoDB
- Mongoose ODM

## Integrations

- Razorpay
- PDF.js
- jsPDF

## Deployment

- Netlify
- Render

---

# 📊 Project Flow

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Backend
participant AI
participant Database

User->>Frontend: Start Interview

Frontend->>Backend: Create Session

Backend->>AI: Generate Questions

AI-->>Backend: Questions

Backend-->>Frontend: Interview Begins

User->>Frontend: Submit Answers

Frontend->>Backend: Evaluate Responses

Backend->>AI: Analyze Answers

AI-->>Backend: Scores & Feedback

Backend->>Database: Save Report

Database-->>Backend: Success

Backend-->>Frontend: Display Analytics
```

---

# 📈 User Journey

```mermaid
graph LR

A[Register/Login]
--> B[Upload Resume]

B --> C[Generate Interview]

C --> D[Answer Questions]

D --> E[AI Evaluation]

E --> F[Performance Report]

F --> G[Track Progress]

G --> H[Improve Skills]
```

---

# 📁 Project Structure

```bash
InterviewIQ
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── hooks
│   │   ├── services
│   │   └── utils
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── services
│   ├── utils
│   └── config
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/InterviewIQ.git

cd InterviewIQ
```

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Server

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

RAZORPAY_KEY_ID=

RAZORPAY_SECRET=
```

## Client

```env
VITE_API_URL=
```

---

# 📊 Database Design

```mermaid
erDiagram

USER ||--o{ INTERVIEW : creates
USER ||--o{ PAYMENT : makes

INTERVIEW ||--o{ REPORT : generates

USER {
 string _id
 string name
 string email
 string password
}

INTERVIEW {
 string id
 string role
 string difficulty
 date createdAt
}

REPORT {
 string id
 number score
 string feedback
}

PAYMENT {
 string id
 number amount
 string status
}
```

---

# 🔒 Security Features

- JWT Authentication
- Protected Routes
- Password Hashing
- API Validation
- Secure Payment Verification
- Environment Variable Protection
- CORS Configuration

---

# 🎯 Key Learning Outcomes

This project demonstrates:

- Full Stack Development
- REST API Design
- Authentication & Authorization
- Database Modeling
- Payment Gateway Integration
- AI-Powered Applications
- State Management
- Deployment & DevOps

---

# 🚀 Future Improvements

- Voice-Based Interviews
- AI Avatar Interviewer
- Real-Time Coding Interviews
- ATS Resume Checker
- Company-Specific Interview Sets
- Multi-Language Support
- AI Career Roadmap Generator

---

# 👨‍💻 Author

## Mainak Debnath

B.Tech CSE Student  
Full Stack Developer | MERN Stack | AI/ML Enthusiast

### Connect With Me

- LinkedIn
- GitHub
- Portfolio

---

# ⭐ Support

If you found this project useful:

```bash
⭐ Star this repository
🍴 Fork this project
🚀 Contribute to InterviewIQ
```

---

<div align="center">

### "Practice Smarter. Interview Better. Get Hired."

⭐ Star the Repository if you liked the project.

</div>
