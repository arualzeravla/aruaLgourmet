import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Home/Inicio';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/DetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ListContainer/ItemListContainer';
import CartProvider from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <>
  <CartProvider>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element= {<Inicio />} />
        <Route exact path="/menu" element= {<ItemListContainer />} />
        <Route exact path="/menu/:id" element= {<ItemDetailContainer />} />
        <Route exact path="/cart" element= {<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
    
    </>
  );
}

export default App;
