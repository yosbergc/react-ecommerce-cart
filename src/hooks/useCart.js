import { useState } from 'react'
function useCart() {
    const [cart, setCart] = useState([])

    function addProduct(product) {
        const productIndex = cart.findIndex(cartProduct => cartProduct.id === product.id)

        if (productIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productIndex] = {
                ...newCart[productIndex],
                quantity: newCart[productIndex].quantity + 1
            }
            return setCart(newCart)
        }

        const newCart = [...cart]
        newCart.push({...product, quantity: 1})
        setCart(newCart)
    }

    return { cart, addProduct }
}
export { useCart }