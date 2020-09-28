
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

useEffect(() => {
        axios
          .get('https://swapi.dev/api/people')
          .then((response) => {
            console.log(response);
            setCharacters(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      // Fetch characters from the API in an effect hook. Remember, anytime you have a 
      // side effect in a component, you want to think about which state and/or props it should
      // sync up with, if any.
    
      return (
        <div className="App">
          <h1 className="Header">Characters</h1>
          {characters.map(character => {
            return (
              <CharacterCard
                key={character.created}
                name={character.name}
                gender={character.gender}
                height={character.height}
                mass={character.mass}
                birthYear={character.birth_year}
                eyeColor={character.eye_color}
                hairColor={character.hair_color}
                skinColor={character.skin_color}
              />
            );
          })}
        </div>
      );
    }
    export default App;