import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Home/Inicio';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/DetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ListContainer/ItemListContainer';
import Provider from './Components/Context/CartContext';



function App() {
  return (
    <>
  <Provider>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element= {<Inicio />} />
        <Route exact path="/menu" element= {<ItemListContainer />} />
        <Route exact path="/menu/:id" element= {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </Provider>
    
    </>
  );
}

export default App;
