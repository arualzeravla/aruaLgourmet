import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, descripcion }) => {
    return (
        <div className="card">
        <h5 className="card-title">{nombre}</h5>
        <img src={imagen} className="card-img-top card_img" alt={nombre} />
        <div className="card-body">
            <p className="card-text"> {descripcion} </p>
            <p className="card-text card_precio"> $ {precio} </p>
            <Link to={`/menu/${id}`} className="btn btn-secondary">Ver detalles</Link>
        </div>
    </div>
    )
}

export default Item;