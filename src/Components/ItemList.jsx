import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {

    return (
       <div>
            {items.map(item => <Item id={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} imagen={item.imagen}/>  
            )}
       </div>
    )
}

export default ItemList;

