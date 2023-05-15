export default function SearchBar(props) {
   const searchfunction = props.onSearch;
   console.log(props.onSearch)
   return (
      <div>
         <input type="search" id="buscador"/>{
         <button onClick={searchfunction}>Agregar</button> 
         
      }</div>
   );
}
