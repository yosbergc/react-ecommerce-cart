import { useProducts } from '../hooks/useProducts'
import { useState } from 'react'

function useFilters() {
    const { products } = useProducts()
    const [filters, setFilters] = useState({
        minPrice: 0,
        category: 'all'
    })
    const minPrice = filters.minPrice
    
    function changeMinPrice(newPrice) {
        setFilters(prevState => ({ ...prevState, minPrice: newPrice }))
    }
    
    function changeCategory(newCategory) {
        setFilters(prevState => ({ ...prevState, category: newCategory}))
    }

    const filteredProducts = products.filter(product => {
        return product.price >= filters.minPrice &&
        (
            product.category === filters.category || filters.category === 'all'
        )
    })

    return { filteredProducts, minPrice, changeMinPrice, changeCategory }
}
export { useFilters }