# Real-Time Chat App (MERN Stack)

A robust real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. This project focuses on scalable architecture, secure authentication, and a responsive user interface.

## 🌟 Features

- **Real-Time Communication**: Instant messaging powered by **Socket.io**.
- **Secure Authentication**:
  - JWT-based session management.
  - Secure password hashing with **Bcrypt**.
  - HttpOnly cookies for security.
- **Modern UI/UX**:
  - Built with **React** and **Tailwind CSS**.
  - Fully responsive design for desktop and mobile.
- **Scalable Backend**:
  - Modular controller-service architecture.
  - MongoDB with Mongoose for data modeling.

## 🏗 Architecture Overview

### 🔙 Backend
The backend is structured to separate concerns for better maintainability:

- **Controllers**: Handle business logic.
  - `user.controller.js`: User auth (Login, Signup, Logout).
  - `message.controller.js`: Message handling.
- **Models**: Database schemas.
  - `User`: User profile and credentials.
  - `Conversation`: Manages chat threads.
  - `Message`: Individual message data.
- **Routes**: API endpoints definitions (`/user`, `/message`).
- **Security**: Middleware for JWT verification (`VerifyJwtToken.js`).

### 🔜 Frontend
The frontend utilizes modern React patterns:

- **State Management**: React Context API (`AuthProvider.jsx`) for global auth state.
- **Components**:
  - `ChatWindow`: Handles message display and input.
  - `Sidebar`: User list and search functionality.
  - `Auth`: Login and Signup forms.
- **Routing**: Protected routes ensuring secure access.

## 🛠 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js, Socket.io, Cookie-Parser.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JSON Web Tokens (JWT).

## 📅 Progress Log

### Day 1: Foundation & Authentication
- **Backend**:
  - Set up Express server and MongoDB connection.
  - Implemented User Authentication (Signup/Login/Logout).
  - Created Database Models (User, Message, Conversation).
  - Secured routes with JWT middleware.
- **Frontend**:
  - Initialized project with Vite and Tailwind.
  - Built the main Chat UI (Sidebar, Chat Area).
  - Integrated Authentication forms and Context API.
  - Connected Frontend Auth with Backend APIs.

## 🚀 Getting Started

1. **Clone the repo**
2. **Backend Setup**:
   ```bash
   cd Backend
   npm install
   npm start