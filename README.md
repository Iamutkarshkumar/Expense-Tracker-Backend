# 🔧 Expense Tracker – Backend

A secure and scalable **backend API** for the Expense Tracker application.  
This backend powers the live frontend application.

🔗 **Live Website (Frontend using this API)**  
🌐 https://expense-tracker-plum-three-83.vercel.app

---

## 🚀 What This Backend Does
- 🔐 Handles user authentication using JWT
- 📦 Manages expense data (CRUD operations)
- 🔒 Protects routes with middleware
- ⚙️ Connects and interacts with MongoDB
- ❌ Centralized error handling and validation

---

## 🛠️ Tech Stack
- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB
- 📦 Mongoose
- 🔑 JSON Web Token (JWT)
- 🔐 bcrypt.js

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository  
git clone https://github.com/your-username/Expense-Tracker-Backend.git

### 2️⃣ Navigate to the project directory  
cd Expense-Tracker-Backend

### 3️⃣ Install dependencies  
npm install

### 4️⃣ Start the server  
npm run dev

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

---

## 📡 API Overview

Method | Endpoint | Description  
POST | /api/auth/signup | Register a new user  
POST | /api/auth/login | Authenticate user  
GET | /api/expenses | Fetch all expenses  
POST | /api/expenses | Add a new expense  
PUT | /api/expenses/:id | Update an expense  
DELETE | /api/expenses/:id | Delete an expense  

---

## 🧩 Architecture
- RESTful API design
- MVC-style folder structure
- Middleware-based authentication
- Secure request handling

---

## 📌 Project Status
🛠️ Backend under active development

---

## 👨‍💻 Author
**Utkarsh Kumar**

⭐ Star the repository if you find it useful!
