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
    function deleteProduct(product) {
        const productIndex = cart.findIndex(cartProduct => cartProduct.id === product.id)

        if (productIndex >= 0) {
            const newCart = [...cart]
            newCart.splice(productIndex, 1)
            return setCart(newCart)
        }
    }

    function clearCart() {
        setCart([])
    }

    return { cart, addProduct, deleteProduct, deleteProduct, clearCart }
}
export { useCart }