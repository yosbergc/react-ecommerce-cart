import { useEffect, useState } from 'react'
import getProducts from '../services/getProducts'

function useProducts() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        getProducts()
          .then(data => setProducts(data))
          .catch(error => setError(error))
          .finally(setLoading(false))
    }, [])

    return { products, error, loading}
}
export { useProducts }