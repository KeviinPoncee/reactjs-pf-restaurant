import React, { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    

    function addToCart(items) {
        //[...cartList] (todo lo que tiene adentro lo pega dentro del nuevo array)

        const cartListX = [...cartList];

		if (cartListX.find(prod => prod.id === items.id)) {

            // sumo el subtotal nuevo al valor anterior
            cartListX.find(prod => prod.id=== items.id).subTotal += items.cantidad*items.price

            // sumo la cantidad nueva al valor anterior
            cartListX.find(prod => prod.id === items.id).cantidad += items.cantidad;

			setCartList(cartListX);

            
        } else {
            setCartList([
                ...cartList,
                items
            ])
        }
    }

    //precio total
    const totalCart = () => {
		return cartList.reduce((total, items) => total + (items.cantidad * items.price) ,0)
	}

    //items totales en carrito
    const itemsCarrito = () => {
		return cartList.reduce((prev, next) => prev + next.cantidad, 0)
	}

    //vaciar carrito
    const clear = () => {
		setCartList([]);
	};

    // eliminar item
    const clearItem = (id) => {
		setCartList( cartList.filter(item => item.id !== id ));
	};

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            totalCart,
            itemsCarrito,
            clear,
            clearItem
        }}>
            {children}
        </CartContext.Provider>
    )
}