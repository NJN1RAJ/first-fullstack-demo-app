import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJoke(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Fullstack ka Demo</h1>
      <p>Jokes:{joke.length}</p>

      {joke.map((joke) => (
        <div key={joke.id}>
          <div>Joke Name:{joke.title}</div>
          <div>Joke :{joke.des}</div>
        </div>
      ))}
    </>
  );
}

export default App;
