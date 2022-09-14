import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({props}) => {
    return (
        <div key={props.id} className="div_containerDetails">
            <div className="div_sectionTitle">
                <h2 className="h2_platoName"> {props.nombre} </h2>
            </div>
            <div className="detailContainer">
                <img className="img_detallesPage" src={props.imagen} alt={props.nombre} />
                <div className="textDetailContainer">
                    <p className="descripcion">{props.descripcion}</p>
                    <div className="infoPrecios d-flex flex-row justify-content-end align-items-center">
                        <p className="p_precioLista"> $ {props.precio}</p>
                        <ItemCount stock={20} initial={1} onAdd={0} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;