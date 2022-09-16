import  './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemListContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    {/* <NavBar/>
    {/* <ItemListContainer greeting={"HASTA 12 CUOTAS SIN INTERES"}/>
    <ItemDetailContainer/> */} 
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;