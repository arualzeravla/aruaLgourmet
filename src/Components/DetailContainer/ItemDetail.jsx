import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    
    return (
        <div key={item.id} className="div_containerDetails">
            <div className="div_sectionTitle">
                <h2 className="h2_platoName"> {item.nombre} </h2>
            </div>
            <div className="detailContainer">
                <img className="img_detallesPage" src={item.imagen} alt={item.nombre} />
                <div className="textDetailContainer">
                    <p className="descripcion">{item.descripcion}</p>
                    <div className="infoPrecios d-flex flex-row justify-content-end align-items-center">
                        <p className="p_precioLista"> $ {item.precio}</p>
                        <ItemCount stock={20} cantidad={1} item={item}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;