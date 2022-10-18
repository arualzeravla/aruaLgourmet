import React, { useState, useContext } from "react";
import CartPreview from "./CartPreview";
import ItemCount from "./ItemCount";
import { CartContext } from "../Context/CartContext";



const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0);
    const { cart, addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        addToCart(item, cantidad)
    }
    
    return (
        <div key={item.id} className="div_containerDetails">
            <div className="div_sectionTitle">
                <h2 className="h2_platoName"> {item.nombre} </h2>
            </div>
            <div className="detailContainer">
                <div className="img_detallesPage"><img src={item.imagen} alt={item.nombre} /></div>
                <div className="textDetailContainer">
                    <p className="descripcion">{item.descripcion}</p>
                        <p className="p_precioLista"> $ {item.precio}</p>
                        {
                            cantidad === 0
                            ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                            : <CartPreview cart={ cart } />
                        }                      
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;