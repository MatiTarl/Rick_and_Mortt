import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

const Detail = () => {
 const [character, setCharacter] = useState({})
 const { id } = useParams();

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


  return(
    <div>
        <h1>Detail</h1>
        <img src={character.image} alt="image" />
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
    </div>
  );
}
export default Detail;