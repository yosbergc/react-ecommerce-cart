import { createContext } from 'react'
import { useCart } from '../hooks/useCart'
const CartContext = createContext()

function ProvideCartContext({ children }) {
    const { cart, addProduct } = useCart()
    return <CartContext.Provider value={{
        cart,
        addProduct
    }}>
        { children }
    </CartContext.Provider>
}
export { ProvideCartContext, CartContext}