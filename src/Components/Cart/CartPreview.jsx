import React from "react";
import { Link } from "react-router-dom";


const CartPreview = ({cart}) => {


    return (
        <div>
            <h5>Mi Carrito</h5>
            <div className="row"> {cart}
                {cart.map(item => (
                    <li key={item.id}>
                        <span>{item.nombre}</span>
                        <span>{item.precio}</span>
                        <span>{item.cantidad}</span>
                    </li>
                ))}
            </div>
            <button><Link to="/cart">Ir al Carrito</Link></button>
        </div>
    )
}

export default CartPreview;