import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';


function Card({myFavorites, addFav, removeFav, name, id, image, gender, status, origin, species, onClose}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({name, id, image, gender, status, origin, species})
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={styles.DivCartas} > 
          <div className={styles.DivBotonDelete}>
            { isFav ? (<button onClick={handleFavorite}>❤️</button>) 
             : (<button onClick={handleFavorite}>🤍</button>)}
                <button className={styles.BotonDelete} onClick={()=> onClose(id)}></button> 
          </div>
       <Link to={`/detail/${id}`} >
       <h2 className={styles.Title}>{name}</h2>
       <img src={image} alt='imagen' />
       </Link>
      </div>
   );
}

const mapDispatchToProps= (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))  
   }
}
const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(Card)