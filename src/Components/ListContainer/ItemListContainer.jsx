import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { customFetch } from "../../utils/getProducts";
import "./prodList.css";

import ItemList from "./ItemList";


function ItemListContainer () {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        customFetch().then(response => {
            setProductos(response)
        })

    },[])

    return (
        <div>
            <div className="container">
            <img src="./images/menu.png" alt="Productos" className="menuIcon" />
            <ItemList items={productos} />
            </div>

        </div>
    )
}

export default ItemListContainer;