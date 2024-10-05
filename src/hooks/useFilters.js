import { useProducts } from '../hooks/useProducts'
import { useState } from 'react'

function useFilters() {
    const { products } = useProducts()
    const [filters, setFilters] = useState({
        minPrice: 0,
        category: 'all'
    })

    const filteredProducts = products.filter(product => {
        return product.price >= filters.minPrice &&
        (
            product.category === filters.category || filters.category === 'all'
        )
    })

    return { filteredProducts }
}
export { useFilters }