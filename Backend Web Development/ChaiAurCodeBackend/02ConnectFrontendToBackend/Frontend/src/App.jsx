import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((err) => {
      console.error("error getting the data", err);
    })
  })


  return (
    <>
     <h1>Chai aur fullstack</h1>
     <p>Jokes count: {jokes.length}</p>

     {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))
     }


    </>
  )
}

export default App
