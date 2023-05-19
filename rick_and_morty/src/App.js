import About from './components/About';
import axios from 'axios'
import Cards from './components/Cards.jsx';
import Detail from './components/Detail';
import Nav from './components/Nav';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import styles from './components/App.module.css';

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
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
