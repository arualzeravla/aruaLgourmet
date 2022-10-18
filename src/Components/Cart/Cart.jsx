import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./cart.css"

const Cart = () => {

    const { cart, totalPrice, deleteOne,emptyCart } = useContext(CartContext);

    return (
        <div className="div_cartContainer">
            <h3 className="h3_cartTitle">Mi Carrito</h3>
            <div className="div_cartList">
                <ul className="ul_cartList">
                    {cart.length > 0 ?
                        cart.map(item => (
                            <li key={item.id}>
                                <div className="div_listItem">
                                <p className="p_cantidad">{item.cantidad}</p>
                                <p className="p_nombre">{item.nombre}</p>
                                <p className="p_precio">$ {item.precio.toFixed(2)}</p>
                                <p className="p_borrar" onClick={() => { deleteOne(item.id) }}><i className="fa-solid fa-trash"></i></p>
                                </div>
                            </li>
                        )) :
                        <div> 
                            <p className="p_mensaje">Tu carrito está vacío</p>
                            <Link to="/menu" className="link_irComprar">Ir a comprar</Link>
                        </div>
                    }
                </ul>
                <div>
                    {cart.length > 0 ?
                        <div>
                            <p className="p_total">TOTAL &nbsp; $ {totalPrice().toFixed(2)}</p>
                            <div className="div_btns">
                            <button className="btn_pago"><Link to="/checkout" className="link_pago"> Ir al Pago</Link></button>
                            <button className="btn_vaciar"onClick={()=>{emptyCart()}}>Vaciar Carrito</button>
                            </div>
                        </div> :
                        ""
                    }
                </div>
            </div>
        </div >
    )
}

export default Cart;