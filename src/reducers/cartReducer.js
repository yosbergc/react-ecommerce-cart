const initialState = []

function reducer(state, action) {
    const { type: actionType, payload: actionPayload } = action
    if (actionType === 'ADD_PRODUCT_TO_CART') {
        const product = actionPayload

        const productIndex = state.findIndex(cartProduct => cartProduct.id === product.id)
        if (productIndex >= 0) {
            const newCart = structuredClone(state)
            newCart[productIndex] = {
                ...newCart[productIndex],
                quantity: newCart[productIndex].quantity + 1
            }
            return newCart
        }
        const newCart = [...state]
        newCart.push({...product, quantity: 1})
        return newCart
    }
    if (actionType === 'DELETE_PRODUCT_FROM_CART') {
        const product = actionPayload
        const productIndex = state.findIndex(cartProduct => cartProduct.id === product.id)
        if (productIndex >= 0) {
            const newCart = [...state]
            newCart.splice(productIndex, 1)
            return newCart
        }
        return state;
    }
    if (actionType === 'CLEAR_CART') {
        return []
    }
    return state;
}

export { initialState, reducer }