import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <div className="App">
      </div>

      <ItemListContainer greeting={"HASTA 12 CUOTAS SIN INTERES"}/>



    </>
  );
}



export default App;