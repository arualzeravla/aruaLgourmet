import React, {useState, useEffect} from "react";
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./detail.css";


function ItemDetailContainer () {

    const [prod, setProd] = useState({});
    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore();
        const produ = doc(db, "items", id);
        getDoc(produ).then(response => {
            if(response.exists()){
                setProd({id: response.id, ...response.data()});
            }
        })

    },[])

    return (
        <div>
            <ItemDetail item={prod} />
        </div>
    )
}

export default ItemDetailContainer;