import React, { useState, useEffect } from "react";
import  {getFirestore, collection, getDocs } from "firebase/firestore"
import "./prodList.css";


import ItemList from "./ItemList";


function ItemListContainer () {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
    
        const db = getFirestore();
        const itemlist = collection(db, "items");
        getDocs(itemlist).then(response => {
            setProductos( response.docs.map ( (doc) => ( { "id": doc.id, ...doc.data()} ) ) )
        } )


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