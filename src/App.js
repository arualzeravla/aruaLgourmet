import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="BIENVENIDX A MI SITIO DE VIANDAS CASERAS Y SALUDABLES!!"/>
{/*     <div id="imgDiv">
      <img src="./images/ad1-bigpic.jpg" alt="welcomeImg" className="ad-img" />
    </div> */}

    <ItemCount stock={5} initial={1} onAdd={0} />
    </>
  );
}

export default App;
