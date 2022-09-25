import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Cart = () => {

    const { cart, totalPrice, deleteOne,emptyCart } = useContext(CartContext);

    return (
        <div>
            <h3>Mi Carrito</h3>
            <div className="div_cartList">
                <ul>
                    {cart.length > 0 ?
                        cart.map(item => (
                            <li key={item.id}>
                                <span className="span_cantidad">{item.cantidad}</span>
                                <span>{item.nombre}</span>
                                <span>$ {item.precio.toFixed(2)}</span>
                                <span onClick={() => { deleteOne(item.id) }}><i class="fa-solid fa-trash"></i></span>
                            </li>
                        )) :
                        <div> 
                            <p>Tu carrito está vacío</p>
                            <Link to="/menu">Volver al Menú</Link>
                        </div>
                    }
                </ul>
                <div>
                    {cart.length > 0 ?
                        <div>
                            <p>TOTAL: $ {totalPrice().toFixed(2)}</p>
                            <button> Ir al Pago</button>
                            <button onClick={()=>{emptyCart()}}>Vaciar Carrito</button>
                        </div> :
                        ""
                    }
                </div>
            </div>
        </div >
    )
}

export default Cart;