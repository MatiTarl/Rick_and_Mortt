import About from './components/About/About';
import axios from 'axios'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
import Nav from './components/Nav/Nav';
import React, { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import styles from './components/App.module.css';
import Favorites from './components/favorites/Favorites';
const URL = 'http://localhost:3001/rickandmorty/login/';
function App() {

const location = useLocation();

//-------------------------------Conexion con la api para spawnear las cartas----------------------------------------
const [characters, setCharacters] = React.useState([]);

async function onSearch(id) {
   try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
   } catch (error) {
       alert('¡No hay personajes con este ID!');
   }
   
  
}
   function onClose(id){
   setCharacters( characters.filter( e => e.id !== id))
}

//-------------------------------LOGIN-------------------------------
const navigate = useNavigate()
const [access, setAccess] = useState(false);

const login = async (userData) => {
     try {
        const { email, password } = userData;
        const {data} = await axios(URL + `?email=${email}&password=${password}`)
        const { access } = data;
           
        setAccess(access);      
        access && navigate('/home');

     } catch (error) {
      console.log(error.message);
     }
 }

useEffect(() => {
   !access && navigate("/");
}, [access])

//--------------------------------------------------------------
   return (
      <div className={styles.App} >
         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} ></Nav> : null
         }

         <Routes>
            <Route path='/' element={<Forms login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>

         
      </div>
   );
}

export default App;
