import React from "react";
import ItemListContainer from "../ListContainer/ItemListContainer";
import "./inicio.css";


const Inicio = () => {
    return (
        <div>
            <div id="imgDiv">
                <h1 className="h1_bienvenido"> Viandas congelables, caseras y saludables. Pedidos para toda la semana!</h1>
                <img src="./images/ad1-bigpic2.jpg" alt="welcomeImg" className="ad-img" />
            </div>
            <ItemListContainer />
        </div>
    )
}

export default Inicio;