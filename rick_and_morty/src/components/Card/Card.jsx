import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, id, image, gender, status, origin, species, onClose}) {

   return (
      <div className={styles.DivCartas} > 
          <div className={styles.DivBotonDelete}>
                <button className={styles.BotonDelete} onClick={()=> onClose(id)}></button> 
          </div>
       <Link to={`/detail/${id}`} >
       <h2 className={styles.Title}>{name}</h2>
       <img src={image} alt='imagen' />
       </Link>
      </div>
   );
}

