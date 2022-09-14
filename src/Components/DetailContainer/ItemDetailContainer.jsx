import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProdById } from "../../utils/getProducts";
import ItemDetail from "./ItemDetail";
import "./detail.css";


function ItemDetailContainer () {

    const [prod, setProd] = useState({});
    const {id} = useParams();

    useEffect(() => {

        getProdById(id).then(response => {
            setProd(response)
            console.log(prod);
        })

    },[])

    return (
        <div>
            <ItemDetail props={prod} />
        </div>
    )
}

export default ItemDetailContainer;