# 🔧 Expense Tracker — Backend

A secure REST API powering the Expense Tracker application. Built with **Node.js**, **Express 5**, and **MongoDB**, it handles user authentication via JWT and full CRUD operations for expense data.

🔗 **Frontend (Live):** [expense-tracker-plum-three-83.vercel.app](https://expense-tracker-plum-three-83.vercel.app)  
🔗 **Frontend Repo:** [github.com/Iamutkarshkumar/Expense-Tracker-](https://github.com/Iamutkarshkumar/Expense-Tracker-)

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (ESM)
- **Framework:** Express.js v5
- **Database:** MongoDB + Mongoose
- **Auth:** JSON Web Tokens (JWT) + bcryptjs
- **Other:** cookie-parser, cors, dotenv

---

## 📁 Project Structure

```
├── controllers/
│   ├── user.controller.js      # Register, login
│   └── expense.controller.js   # Add, get, update, delete, toggle done
├── middleware/
│   └── isAuthenticated.js      # JWT verification middleware
├── models/
│   ├── user.model.js
│   └── expense.model.js
├── routes/
│   ├── user.route.js
│   └── expense.route.js
├── database/
│   └── db.js                   # MongoDB connection
└── index.js                    # App entry point
```

---

## 📡 API Reference

### Auth — `/api/v1/user`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/register` | No | Register a new user |
| POST | `/login` | No | Login and receive JWT cookie |

### Expenses — `/api/v1/expense`

All expense routes require authentication (JWT cookie).

| Method | Endpoint | Description |
|---|---|---|
| GET | `/getall` | Get all expenses for logged-in user (filterable by category and done status) |
| POST | `/add` | Add a new expense |
| PUT | `/update/:id` | Update an expense |
| DELETE | `/remove/:id` | Delete an expense |
| PUT | `/:id/done` | Toggle done/undone status |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- A MongoDB URI (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Expense-Tracker-Backend.git
cd Expense-Tracker-Backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 🚀 Scripts

```bash
npm run dev    # Start with nodemon (hot reload)
npm start      # Start production server
npm run build  # Build the frontend (runs npm install + vite build in ../frontend)
```

---

## 👨‍💻 Author

**Utkarsh Kumar** — B.Tech CSAI, NSUT  

⭐ Star the repo if it helped!
