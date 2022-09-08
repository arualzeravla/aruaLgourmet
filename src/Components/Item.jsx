import React from "react";

const Item = ({id, nombre, imagen, precio, descripcion}) => {
    return (
        <div className="col-md-4">
        <div className="card">
            <h5 className="card-title">{nombre}</h5>
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <p className="card-text"> {descripcion} </p>
                <p className="card-text"> $ {precio} </p>
                <a href="#" className="btn btn-secondary">Agregar al carrito</a>
            </div>
        </div>
    </div>

    )
}

export default Item;