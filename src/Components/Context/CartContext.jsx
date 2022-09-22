import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(prodYaEnCarrito => prodYaEnCarrito.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            item.cantidad = cantidad;
            setCart([...cart, item]); 
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(prodYaEnCarrito => prodYaEnCarrito.id === id);
    }

/*     const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    } */

    return (
        <CartContext.Provider value={{cart, addToCart, clear, isInCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;