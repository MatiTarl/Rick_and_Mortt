import styles from './components/App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
//import characters from './data.js';
import React from 'react';
import axios from 'axios'

function App() {

const [characters, setCharacters] = React.useState([]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
   function onClose(id){
   setCharacters( characters.filter( e => e.id !== id))
}
   return (
      <div className={styles.App} >
         <Nav onSearch={onSearch} ></Nav> 
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
