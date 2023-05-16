import styles from './components/App.module.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className={styles.App} >
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      </div>
   );
}

export default App;
