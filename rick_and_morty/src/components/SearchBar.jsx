import styles from './App.module.css';

export default function SearchBar(props) {
   const searchfunction = props.onSearch;
   return (
      <div className={styles.Busqueda}>
         <input type="search" id="buscador" className={styles.EntradaBoton} />{
         <button className={styles.BotonBusqueda} onClick={searchfunction}>Agregar</button> 
      }</div>
   );
}
