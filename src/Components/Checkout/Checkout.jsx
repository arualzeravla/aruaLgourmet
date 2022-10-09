import React, { useState } from "react";
import Form from "./Form";

const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const handleID = (numDeOrden) => {
        setOrderId(numDeOrden);
    }

    if(orderId){
        return(
            <h1>
                Gracias por tu compra! 
                El código de tu orden es: {orderId}

            </h1>
        )
    }
    else {
        return (
            <Form handleID={handleID}/>
        ) 

    }

}

export default Checkout; 