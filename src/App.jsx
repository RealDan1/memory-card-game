import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const imgName = 'Bobs pokemon';
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const url = '';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error - Response is: ${response.status}`);
      }

      const data = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Card name={imgName} />
    </>
  );
}

export default App;
