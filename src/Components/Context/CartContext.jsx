import React, { useState, createContext } from "react";


//1. Creo el contexto
export const CartContext = createContext();


//2. Creo el proveedor

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            item.cantidad = cantidad;
            setCart([...cart, item]);
        }
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }


    const emptyCart = () => {
        setCart([]);
    }


    const totalUnits = () => {
        let copia = [...cart]
        let count = 0;
        copia.forEach((item) => {
            count += item.cantidad
        })
        return count;
    }


    const totalPrice = () => {
        let copia = [...cart]
        let count = 0;
        copia.forEach((item) => {
            count += item.cantidad * item.precio
        })
        return count;
    }

    const deleteOne = (id) => {
        let itemBorrado = cart.find(item => item.id === id);
        if (itemBorrado.cantidad > 0) {
            itemBorrado.cantidad = itemBorrado.cantidad - 1
            setCart([...cart])
            if (itemBorrado.cantidad === 0) {
                let copia = [...cart]
                copia.splice(copia.indexOf(itemBorrado),1)
                setCart(copia)
            }
        }
    }



    return (
        //El contexto tiene la propiedad "Provider" que es la que englobará y proveerá de recursos a los componentes indicados en App.js

        <CartContext.Provider value={{ cart, addToCart, emptyCart, isInCart, totalUnits, totalPrice, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;