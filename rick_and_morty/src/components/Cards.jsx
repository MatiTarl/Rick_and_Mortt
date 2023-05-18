import Card from './Card';
import styles from './App.module.css';

export default function Cards(props) {
   const array = props.characters;
   const boton = props.onClose;
   return <div>{
   array.map(e => <Card key={e.id} 
      name={e.name} 
      id={e.id} 
      image={e.image} 
      status={e.status} 
      species={e.species} 
      gender={e.gender} 
      origin={e.origin.name} 
      onClose={boton}/>)
   }</div>;
}
