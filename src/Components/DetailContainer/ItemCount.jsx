import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const [itemStock, setItemStock] = useState(props.stock);

    const decremento = (valor)=>{
        if(valor > 0){
            setCount(valor);
        }
    }

    const incremento = (valor)=>{
        if(valor <= itemStock){
            setCount(valor);
        }
    }

/*     const agregarCarrito = () => {
        if(count <= itemStock ){
            setItemStock(itemStock - count)
            setCount(1)
            alert("Tu producto ha sido añadido al carrito!")
        }
    } */


    return (

        <div id="div_counter">
            <div className="input-group" >
                <input type="button" className="btn btn-secondary" value="-" onClick={()=>{decremento(count-1)}} />
                <span className="cantSpan"> {count} </span>
                <input type="button" className="btn btn-secondary" value="+" onClick={()=>{incremento(count+1)}} />
            </div>
            <div className="d-grid gap-2 pt-3">
                <input type="button" className="btn btn-secondary" value="Agregar al carrito" onClick={props.onAdd}/>
            </div>
        </div>
    )
}

export default ItemCount;