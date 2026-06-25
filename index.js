import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;


//middleware
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:"https://expense-tracker-plum-three-83.vercel.app",
    credentials:true
}
app.use(cors(corsOptions));


//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/expense",expenseRoute);

// Serve static files from frontend dist folder
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Fallback: serve index.html for all non-API routes (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});