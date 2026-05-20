import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // axios.get('/api/jokes')
    axios.get("http://localhost:1000/api/jokes")
      .then((response) => { setJokes(response.data) })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <>
      <h1>Jokes Provider !!</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>)
        })
      }
    </>
  )
}

export default App
