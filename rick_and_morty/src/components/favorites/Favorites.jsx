import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from "./Favorites.module.css"

function Favorites(props) {
   const boton = props.onClose;
   const myFavorites = props.myFavorites
   return <div>{
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