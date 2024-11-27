import express from "express";

const app = express();

app.get("/",(req, res) => {
    res.send("hello world!");
});

app.get("/todos", (req, res) => {
    res.send([]);
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});