import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   const {name, id, image, gender, status, origin, species, onClose} = props;
   return (
      <div className={styles.DivCartas} > 
          <div className={styles.DivBotonDelete}>
                <button className={styles.BotonDelete} onClick={()=> onClose(id)}>X</button> 
          </div>
       <Link to={`/detail/${id}`} >
       <h2 className={styles.Title}>{name}</h2>
       <img src={image} alt='imagen' />
          <article>
             <h4 className={styles.SubTitulos}>Specie: {species}</h4>
             <h4 className={styles.SubTitulos}>Gender: {gender}</h4>
          </article>
       </Link>
      </div>
   );
}

