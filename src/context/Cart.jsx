import { createContext } from 'react'
import { useCart } from '../hooks/useCart'
const CartContext = createContext()

function ProvideCartContext({ children }) {
    const { cart, addProduct, deleteProduct, clearCart } = useCart()
    return <CartContext.Provider value={{
        cart,
        addProduct,
        deleteProduct,
        clearCart
    }}>
        { children }
    </CartContext.Provider>
}
export { ProvideCartContext, CartContext}