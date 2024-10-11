// src/app.ts
import cors from "cors";
import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import connectDB from "./config";
import signupRoute from "./routes/signupRoute";
import loginRoute from "./routes/loginRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// Middleware
app.use(express.json());

app.use('/', signupRoute);
app.use('/login', loginRoute);

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript!");
});

// app.post('/signup', (req: Request, res: Response) => {
//   res.send(res.json())
// })

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
