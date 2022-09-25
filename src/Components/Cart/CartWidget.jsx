import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

    const { totalUnits } = useContext(CartContext);

    return (
        <Link to="/cart">
            <div className="iconoCarrito">
                <i className="fa-solid fa-cart-shopping"></i>
                { totalUnits() > 0 ? <span className="span_cartUnits">{totalUnits()}</span> :
                ""
                }
            </div>
        </Link>
    )
}


export default CartWidget;