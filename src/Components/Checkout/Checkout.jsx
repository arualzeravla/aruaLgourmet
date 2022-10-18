import React, { useState } from "react";
import Form from "./Form";

const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const handleID = (numDeOrden) => {
        setOrderId(numDeOrden);
    }

    if(orderId){
        return(
            <div className="div_containerOrderData">
                <h1 className="h1_gracias">Gracias por tu compra! </h1>
                <h3 className="h3_orderId">El código de tu orden es {orderId} </h3>           
            </div>
        )
    }
    else {
        return (
            <Form handleID={handleID}/>
        ) 

    }

}

export default Checkout; 