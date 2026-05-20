import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

const port = process.env.PORT || 3000;

const jokes = [
  {
    id: 1,
    title: "Programmer Joke",
    content:
      "Why do programmers prefer dark mode? Because light attracts bugs.",
  },
  {
    id: 2,
    title: "Backend Joke",
    content: "I told my server a joke... now it keeps returning 500 errors.",
  },
  {
    id: 3,
    title: "JavaScript Joke",
    content:
      "JavaScript developers don't shower because they prefer async wait.",
  },
  {
    id: 4,
    title: "Database Joke",
    content:
      "My SQL query walked into a bar, walked up to two tables and asked: Can I join you?",
  },
  {
    id: 5,
    title: "Debugging Joke",
    content:
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
  },
];

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
