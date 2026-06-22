# 🛡️ SupportAI - AI-Powered Customer Support Automation Platform

## 🚀 Overview

SupportAI is a full-stack AI-powered customer support automation platform that helps organizations streamline ticket handling through intelligent classification, knowledge retrieval, and automated response generation.

The system uses a multi-agent architecture built with LangGraph and Google Gemini to automatically process customer support requests and generate context-aware responses.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Protected API Routes

### 🤖 Multi-Agent AI Workflow

* Intent Classification
* Priority Detection
* Knowledge Retrieval
* AI Response Generation

### 📊 Dashboard

* Ticket Analytics
* Ticket History
* AI Workflow Visualization
* AI Confidence Display
* Real-Time Processing Status

### 💾 Database

* PostgreSQL Integration
* User Management
* Ticket Storage
* Persistent History Tracking

---

## 🏗️ System Architecture

User
↓
React Frontend
↓
FastAPI Backend
↓
LangGraph Workflow

🎯 Intent Engine
↓
🧠 Context Engine
↓
⚡ Resolution Engine

↓
Google Gemini AI

↓
PostgreSQL Database

---

## ⚙️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Axios

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* JWT Authentication

### AI & Automation

* LangGraph
* Google Gemini
* Prompt Engineering

### Database

* PostgreSQL

---

## 🎯 Workflow

### Step 1: Intent Engine

Classifies incoming tickets into categories such as:

* Technical
* Billing
* Authentication
* General Support

Assigns priority levels:

* High
* Medium
* Low

### Step 2: Context Engine

Retrieves relevant support knowledge and context for the ticket.

### Step 3: Resolution Engine

Uses Google Gemini to generate a professional customer response.

---

## 📸 Screenshots

### Dashboard

(Add Dashboard Screenshot)

### AI Workflow

(Add Workflow Screenshot)

### AI Response Generation

(Add Response Screenshot)

### Ticket History

(Add Ticket History Screenshot)

---

## 📂 Project Structure

supportai/

├── frontend/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── services/

│

├── backend/

│ ├── app/

│ ├── auth/

│ ├── database/

│ ├── routes/

│ ├── langgraph/

│ └── services/

│

├── package.json

├── README.md

└── .gitignore

---

## 🛠️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/support-ai-agent.git

cd supportai
```

### Backend Setup

```bash
cd backend

python -m venv .venv

.venv\Scripts\activate

pip install -r requirements.txt
```

### Frontend Setup

```bash
cd frontend

npm install
```

### Run Entire Project

From project root:

```bash
npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
DATABASE_URL=your_postgresql_connection_string

GEMINI_API_KEY=your_gemini_api_key

SECRET_KEY=your_jwt_secret
```

---

## 🎓 Key Learning Outcomes

* Full-Stack Development
* JWT Authentication
* REST API Design
* PostgreSQL Integration
* LangGraph Multi-Agent Systems
* Google Gemini Integration
* AI Workflow Automation
* React + FastAPI Architecture

---

## 🚀 Future Enhancements

* Vector Database Integration
* RAG-Based Knowledge Retrieval
* Ticket Trend Analytics
* Email Notifications
* Admin Dashboard
* Docker Deployment
* Role-Based Access Control

---

## 👨‍💻 Author

Rawlo Dudhisty

B.Tech CSE | Full Stack Developer | AI Enthusiast

GitHub: https://github.com/Rawlo-Dudhisty
Live: https://support-ai-agent-kappa.vercel.app
<img width="1316" height="567" alt="Screenshot 2026-06-17 162506" src="https://github.com/user-attachments/assets/88a49a1f-1c32-4f3e-8a3f-a0dd4ae1ad10" />
<img width="1313" height="626" alt="Screenshot 2026-06-22 150208" src="https://github.com/user-attachments/assets/80140fdd-e318-4f98-84ae-a4ee6a91b25f" />
<img width="1353" height="619" alt="Screenshot 2026-06-22 150048" src="https://github.com/user-attachments/assets/14d0f563-b28d-48d5-8630-bd7b8d8eac6b" />



