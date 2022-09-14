import Productos from "./Productos";

export const customFetch = () => {
    return new Promise ((resolve) => {
        resolve(Productos);
    })
}

export const getProdById = (id) => {
    return new Promise (resolve => {
        resolve(Productos.find(prod => prod.id === id))
    })
}