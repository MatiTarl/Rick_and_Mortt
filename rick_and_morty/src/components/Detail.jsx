import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function (props)  {
const { id } = useParams();
console.log(id);
const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return(
    <div style={{backgroundColor: "lightblue"}}>
        <h1>Detail</h1>
        <h2>{character.name}</h2>
        <img src={character.image} alt="image" />
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
    </div>
  );
}