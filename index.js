import express from "express";

const PORT = 3333;
const app = express();

const todos = [
  {
    id: 1,
    title: "Wake up",
  },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const input = req.body;
  res.send(input);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
