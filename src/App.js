
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"BIENVENIDOS"}/>
      
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
     
    </div>
  );
}

export default App;
