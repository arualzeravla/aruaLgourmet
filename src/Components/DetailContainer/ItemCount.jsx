import React from "react";
import { useState, useContext } from "react";
import CartPreview from "../Cart/CartPreview";
import { CartContext } from "../Context/CartContext";

const ItemCount = (props) => {
    const {item} = props;
    const {cart, addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(props.cantidad);
    const [itemStock, setItemStock] = useState(props.stock);

    const decremento = (valor)=>{
        if(valor > 0){
            setCantidad(valor);
        }
    }

    const incremento = (valor)=>{
        if(valor <= itemStock){
            setCantidad(valor);
        }
    }

    const agregarCarrito = () => {
        if(cantidad <= itemStock ){
            addItem(item, cantidad)
            setItemStock(itemStock - cantidad)
            setCantidad(1)
            alert("Tu producto ha sido añadido al carrito!")
            
            let div_counter = document.getElementById("div_counter");
            div_counter.innerHTML = <CartPreview items={cart}/>
            //console.log(cart);

        }
    }


    return (

        <div id="div_counter">
            <div className="input-group" >
                <input type="button" className="btn btn-secondary" value="-" onClick={()=>{decremento(cantidad-1)}} />
                <span className="cantSpan"> {cantidad} </span>
                <input type="button" className="btn btn-secondary" value="+" onClick={()=>{incremento(cantidad+1)}} />
            </div>
            <div className="d-grid gap-2 pt-3">
                <input type="button" className="btn btn-secondary" value="Agregar al carrito" onClick={()=>{agregarCarrito()}}/>
            </div>

        </div>
    )
}

export default ItemCount;