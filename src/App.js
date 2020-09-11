import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/people/?page=1`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Failure", error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return <Character key={char.url} info={char} />
        })
      }
    </div>
  );
}

export default App;
