import styles from './SearchBar.module.css';
import React from 'react';

export default function SearchBar(props) {
   const searchfunction = props.onSearch;
   const [id, setId] = React.useState("");

   const handleChange = event =>{
      const {value} = event.target;
      setId(value);
   }


   return (
      <div className={styles.Busqueda}>
      <input type="search" id="buscador" name="search" onChange={handleChange} className={styles.input} />  
      <button className={styles.Button} onClick={() => searchfunction(id)}>Agregar</button>
      </div>
   );
}
