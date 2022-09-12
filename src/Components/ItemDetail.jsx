import React from "react";

const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {
    return (

        <div className="div_containerDetails" >
            <div className="div_sectionTitle">
                <h2 className="h2_platoName">{nombre}</h2>
            </div>

            <div className="detailContainer">
                <img className="img_detallesPage" src={imagen} alt={nombre} />
                <div className="textDetailContainer">
                    <p className="descripcion">{descripcion}</p>
                    <div className="infoPrecios">
                        <p className="p_precioLista"> $ {precio}</p>
                        <button type="button" className="btn btn-dark btn_carrito">Agregar al carrito &raquo;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;