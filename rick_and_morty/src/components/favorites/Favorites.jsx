import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import styles from "./Favorites.module.css"
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

function Favorites(props) {

   const [aux, setAux] = useState(false)

   const myFavorites = props.myFavorites
   
   const dispatch = useDispatch();

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
   }
   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
   }
   


   return <div>
      <div>
         <select onChange={handleOrder} >
         <option value="A">Ascendente</option>
         <option value="B">Descendente</option>
      </select>
      <select onChange={handleFilter} >
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">unknown</option>
         <option value="AllCharacters">AllCharacters</option>
      </select>
      </div>
      
      {
   myFavorites.map(e => <Card key={e.id} 
      name={e.name} 
      id={e.id} 
      image={e.image} 
      status={e.status} 
      species={e.species} 
      gender={e.gender} 
      origin={e.origin.name} />)
   }</div>;
}

const mapStateToProps = (state) =>{
   return {
     myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, null)(Favorites)