import React, { useState, useEffect } from "react";
import  {getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import "./prodList.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer () {

    const {id} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    
        const db = getFirestore();
        const itemlist = collection(db, "items");
        const queryItems = id ? query(itemlist, where ("categoria", "==", id)) : itemlist;


        getDocs(queryItems).then(response => {
            if (response.size > 0){
                setProductos( response.docs.map ( (doc) => ( { "id": doc.id, ...doc.data()} ) ) )
            }
        } ) 


    },[id])

    return (
        <div>
            <div className="container">
            <img src="../images/menu.png" alt="Productos" className="menuIcon" />
            <ItemList items={productos} />
            </div>

        </div>
    )
}

export default ItemListContainer;