import React from 'react';
import styles from './App.module.css';

export default function Card(props) {
   const {name, id, image, gender, status, origin, species, onClose} = props;
   return (
      <div className={styles.DivCartas} > 

      <h2 className={styles.Title}>{name}</h2>

<div className={styles.DivBotonDelete}>
      <button className={styles.BotonDelete} onClick={()=> onClose()}>X</button>
</div>
      <img src={image} alt='imagen' /> 
<article>
      <p className={styles.SubTitulos}>Specie: {species}</p>
      <p className={styles.SubTitulos}>Gender: {gender}</p>
</article>
         
      </div>
   );
}

