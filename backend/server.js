const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is started");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "Joke 1", des: "joke number 1" },
    { id: 2, title: "Joke 2", des: "joke number 2" },
    { id: 3, title: "Joke 3", des: "joke number 3" },
    { id: 4, title: "Joke 4", des: "joke number 4" },
    { id: 5, title: "Joke 5", des: "joke number 5" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server served at https://localhost:${port}`);
});
