import { useReducer } from 'react'
import { reducer, initialState } from '../reducers/cartReducer'

function useCart() {
    const [cart, dispatch] = useReducer(reducer, initialState)

    function addProduct(product) {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: product
        })
    }

    function deleteProduct(product) {
        dispatch({
            type: 'DELETE_PRODUCT_FROM_CART',
            payload: product
        })
    }

    function clearCart() {
        dispatch({
            type: 'CLEAR_CART'
        })
    }

    return { cart, addProduct, deleteProduct, clearCart }
}
export { useCart }