# MERN Auth

A full-stack authentication system built with MongoDB, Express, React, and Node.js featuring email verification, password reset, and secure JWT-based authentication.

## 🚀 Live Demo

[https://mernauth-sepia.vercel.app/](https://mernauth-sepia.vercel.app/)

## ✨ Features

- **User Authentication**
  - Register with email verification
  - Login with JWT tokens
  - Secure logout functionality
  
- **Email Verification**
  - OTP-based email verification
  - Resend OTP functionality
  - Email templates for verification

- **Password Management**
  - Forgot password with OTP
  - Reset password functionality
  - Secure password hashing with bcrypt

- **Security**
  - JWT token authentication
  - HTTP-only cookies
  - CORS protection
  - Password encryption

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email services

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- SMTP email service (e.g., Mailtrap)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525

SENDER_MAIL=your_sender_email
```

4. Start the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_BACKEND_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
Mern-auth/
├── backend/
│   ├── config/
│   │   ├── emailTemplate.js
│   │   ├── mongodb.js
│   │   └── nodemailer.js
│   ├── controller/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── userAuth.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── emailVerify.jsx
│   │   │   ├── home.jsx
│   │   │   ├── login.jsx
│   │   │   └── resetPassword.jsx
│   │   └── App.jsx
│   └── index.html
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/is-authenticated` - Check authentication status

### Email Verification
- `POST /api/auth/send-verify-otp` - Send verification OTP
- `POST /api/auth/verify-account` - Verify account with OTP

### Password Reset
- `POST /api/auth/send-reset-password-otp` - Send password reset OTP
- `POST /api/auth/reset-password` - Reset password with OTP

### User
- `GET /api/user/data` - Get user details


## 👤 Author

Murari Thakur

