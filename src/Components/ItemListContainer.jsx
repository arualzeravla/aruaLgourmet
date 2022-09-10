import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {

        const productos = [
            {"id":1, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":2, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":3, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":4, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":5, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":6, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":7, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750},
            {"id":8, "nombre":"Lasagna de la Huerta", "imagen": "./images/lasagna.jpg", "descripcion": "Lasagna de Berenjenas, salsa de tomate, parmesano, pimienta y albahaca", "precio": 750}
        
        ];

        const getProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });

    }, [])

    return (
        <div className="container">
            <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer;