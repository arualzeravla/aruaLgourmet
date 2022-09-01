import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="BIENVENIDX A MI SITIO DE VIANDAS CASERAS Y SALUDABLES!!"/>
    <div id="imgDiv">
      <img src="./images/ad1-bigpic.jpg" alt="image" className="ad-img" />
    </div>
    </>
  );
}

export default App;
