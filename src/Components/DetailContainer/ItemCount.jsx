import React from "react";
import { useState } from "react";


//  Este componente tiene un HTML con botones para agregar o restar la CANTIDAD del producto a comprar. 
// Incluye la lógica: el numero no puede ser mayor al stock. El botón "Agregar al carrito" aún no impacta en el carrito.

const ItemCount = (props) => {
  
    const [count, setCount] = useState(props.initial);

    const restar = ()=>{
        count > 0 && setCount(count - 1);  
    }

    const sumar = ()=>{
       count < props.stock && setCount(count + 1);
    }

    const agregar = () => {
        props.onAdd(count)
    }


    return (
        <div className="div_counter">
            <div>
                <div className="input-group" >
                    <input type="button" className="btn btn-secondary" value="-" onClick={restar} />
                    <span className="cantSpan"> {count} </span>
                    <input type="button" className="btn btn-secondary" value="+" onClick={sumar} />
                </div>
                <div className="d-grid gap-2 pt-3">
                    <input type="button" className="btn btn-secondary input_agregar btn-block" value="Agregar al carrito" onClick={agregar}/>
                </div>

            </div>
        </div>
    )
}

export default ItemCount;