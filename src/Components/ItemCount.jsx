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
        }
    }


    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-2">
                <p style={{fontSize: 20}}><strong>LASAGNA DE LA HUERTA</strong></p>
                <img src="./images/lasagna.jpg" alt="lasagna" className="prdImg" />
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={()=>{decremento(cantidad-1)}} />
                        <input type="text" className="form-control" value={cantidad} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={()=>{incremento(cantidad+1)}} />
                    </div>
                    <div className="d-grid gap-2 pt-3">
                        <input type="button" className="btn btn-secondary" value="Agregar al carrito" onClick={()=>{agregarCarrito()}}/>
                    </div>

                </div>
                <div className="col-2">
                    <h1 id="h1_tituloCarrito">Tu Carrito</h1>
                    <p>Lasagna de la Huerta - Total: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;