import React from "react";
import Item from "./Item";

function ItemList ({items}) {

    return (
       <div className="row">
            {items.map(item => (
            <div className="col-md-3 articuloContainer" key={item.id}>
                <Item id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} imagen={item.imagen}/>  
            </div>
            ))}
       </div>
    )
}

export default ItemList;

