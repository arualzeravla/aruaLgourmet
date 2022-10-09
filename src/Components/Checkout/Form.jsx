import React, { useContext, useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./checkout.css";

const Form = ({ handleID }) => {

    const { cart, totalPrice } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const total = totalPrice();


    const handleSubmit = (e) => {
        e.preventDefault()
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
                            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleNombre} />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={handleEmail} />
                        </div>
                        <div className="form-group">
                            <label>Teléfono</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleTelefono} />
                        </div>
                        <p className="p_sectionTitle2">Datos para el envío:</p>
                        <div className="form-group">
                            <label>Domicilio</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label>Localidad</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label>Entre calles</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label>Comentarios o solicitudes especiales</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" className="btn_confirm" onClick={handleSubmit}>Confirmar Pedido</button>
                    </form>
                </div>
                <div className="div_cartList">
                    <h3>Mi Carrito</h3>
                    <ul>
                        {cart.length > 0 ?
                            cart.map(item => (
                                <li key={item.id}>
                                    <span className="span_cantidad">{item.cantidad}</span>
                                    <span>{item.nombre}</span>
                                    <span>$ {item.precio.toFixed(2)}</span>
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
                            </div> :
                            ""
                        }
                    </div>
                </div>
        </div >
    )
}

export default Form;