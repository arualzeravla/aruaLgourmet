import React, { useContext, useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./checkout.css";

const Form = ({ handleID }) => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const total = totalPrice();


    const handleSubmit = (e) => {
        e.preventDefault()
        const errorDiv = document.getElementById("div_errorForm");
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            errorDiv.innerHTML = "";
            const orden = {
                buyer: { nombre, email, telefono },
                cart,
                date: serverTimestamp(),
                total
            }
            const db = getFirestore();
            const refOrden = collection(db, "ordenes")
            addDoc(refOrden, orden).then(res => {
                //console.log(res.id);
                handleID(res.id)
            })
            setTimeout(() => { emptyCart()}, 3000 );
           
        } else {

            errorDiv.innerHTML = "<p>Por favor, completa todos los datos antes de confirmar</p>"
        }

    }

    const handleNombre = e => setNombre(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handleTelefono = e => setTelefono(e.target.value);


    return (
        <div className="div_Container">
            <div className="div_checkoutForm">
                <form action="">
                    <p className="p_sectionTitle1">Completá el formulario para confirmar tu orden:</p>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" id="name" onChange={handleNombre} />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" id="email" onChange={handleEmail} />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="text" className="form-control" id="telefono" onChange={handleTelefono} />
                    </div>
                    <div id="div_errorForm"></div>
                    <button type="button" className="btn_confirm" onClick={handleSubmit}>Confirmar Pedido</button>

                </form>
            </div>
            <div className="div_cartList">
                <h3>Mi Carrito</h3>
                <ul>
                    {cart.length > 0 ?
                        cart.map(item => (
                            <li className="li_cartPrev" key={item.id}>
                                <span className="span_cant">{item.cantidad}</span>
                                <span className="span_name">{item.nombre}</span>
                                <span className="span_price">$ {item.precio.toFixed(2)}</span>
                            </li>
                        )) :
                        <div>
                            <p className="p_error"> Algo salió mal... Tu carrito está vacío! </p>
                            <Link className="link_volver" to="/menu">Volver al Menú</Link>
                        </div>
                    }
                </ul>
                <div>
                    {cart.length > 0 ?
                        <div>
                            <p className="p_precioTot">TOTAL: $ {totalPrice().toFixed(2)}</p>
                        </div> :
                        ""
                    }
                </div>
            </div>
        </div >
    )
}

export default Form;