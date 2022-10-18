import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";



const CartPreview = ({ cart }) => {

    const { totalPrice } = useContext(CartContext)

    return (
        <div className="div_cartPrev">
            <h5 className="h5_miCarrito">Mi Carrito</h5>
            <div className="row">
                <ul className="ul_cartPrev">
                    {cart.map(item => (
                        <li key={item.id}>
                            <span className="span_cantidad">{item.cantidad}</span>
                            <span>{item.nombre}</span>
                        </li>
                    ))}
                </ul>
                <p>TOTAL: $ {totalPrice().toFixed(2) }</p>
            </div>
            <div className="div_linksCartPrev">
                <p><Link to="/cart" className="link_carrito">Ir al Carrito</Link></p>
                <p><Link to="/" className="link_carrito">Seguir comprando</Link></p>
            </div>
        </div>
    )
}

export default CartPreview;