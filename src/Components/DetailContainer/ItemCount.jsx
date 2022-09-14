import React from "react";
import { useState } from "react";

function ItemCount ({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

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
            setItemAdd(cantidad + itemAdd)
            setItemStock(itemStock - cantidad)
            setCantidad(initial)
            alert("Tu producto ha sido añadido al carrito!")
        }
    }


    return (
        <div >
            <div>
                <div >
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={()=>{decremento(cantidad-1)}} />
                        <span className="cantSpan"> {cantidad}</span>
                        <input type="button" className="btn btn-secondary" value="+" onClick={()=>{incremento(cantidad+1)}} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-secondary" value="Agregar al carrito" onClick={()=>{agregarCarrito()}}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemCount;