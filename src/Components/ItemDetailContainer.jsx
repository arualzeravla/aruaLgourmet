import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    useEffect(() => {

        const producto = {
            "id":1, 
            "nombre":"Lasagna de la Huerta", 
            "imagen": "./images/lasagna.jpg", 
            "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", 
            "precio": 750.00
        };

        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto);
                let precioDisplay = producto.precio.toFixed(2);
                producto.precio = precioDisplay;
            }, 2000)
        })
        getItem.then((respuesta) => {
            setItem(respuesta)
        });

    },[])

    return (
        <div className="container">
            <ItemDetail id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} imagen={item.imagen} />
        </div>

    )
}

export default ItemDetailContainer;