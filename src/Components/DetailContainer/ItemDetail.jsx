import React, { useState,  useContext} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"


const ItemDetail = ({item}) => {

    const { addToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);
    
    

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
                <img className="img_detallesPage" src={item.imagen} alt={item.nombre} />
                <div className="textDetailContainer">
                    <p className="descripcion">{item.descripcion}</p>
                    <div className="infoPrecios d-flex flex-row justify-content-end align-items-center">
                        <p className="p_precioLista"> $ {item.precio}</p>
                        {
                            cantidad === 0 ? 
                            <ItemCount stock={20} initial={1} onAdd={onAdd}/> :
                            <Link to="/cart">Ir al Carrito</Link> 
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;