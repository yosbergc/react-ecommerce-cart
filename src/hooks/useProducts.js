import { useEffect, useState } from 'react'
import getProducts from '../services/getProducts'

function useProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
          .then(data => setProducts(data))
          .catch(error => console.error(error))
    }, [])

    return { products }
}
export { useProducts }