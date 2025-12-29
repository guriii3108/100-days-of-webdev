# Day 97/100 – Full-Stack MERN Practice Session 🔥

Today was about strengthening my fundamentals in the MERN stack (MongoDB, Express, React, Node.js) through a practical project. I built a simple Authentication System with JWT protection.

## 📂 Project Structure

Warning: This project is generated for practice purposes.

-   **server/**: Backend API with Express & Mongoose.
-   **client/**: Frontend UI with React & Tailwind CSS.

## ✨ Features Implemented

### Backend (Server)

-   **JWT Authentication**: `login` and `register` routes generating JSON Web Tokens.
-   **Middleware**: `authMiddleware` to protect private routes.
-   **MongoDB Integration**: Mongoose models for User schema with password hashing (bcryptjs).
-   **Error Handling**: Centralized error management.

### Frontend (Client)

-   **React + Vite**: Fast development environment.
-   **Axios Interceptors**: Automatically attaching JWT tokens to outgoing requests.
-   **Protected Routes**: Managing access to dashboard based on auth state.
-   **Tailwind CSS**: Rapid styling for Login/Register forms.

## 🛠️ How to Run

### 1. Setup Backend

\`\`\`bash
cd server
npm install

# Create .env file with PORT and MONGO_URI

npm run dev
\`\`\`

### 2. Setup Frontend

\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

## 📝 Key Learnings

-   Reinforced the flow of JWT token storage (localStorage) and usage.
-   Practiced structuring a scalable Mongoose project.
-   Debugging CORS issues and connecting frontend to backend.
