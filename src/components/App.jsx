import './app.css'
import { useEffect, useState } from 'react'
import getProducts from '../services/getProducts'
function App() {
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
    console.log(products)
    return (
        <main>
            <h1>The Big Ecommerce Store</h1>

            <section className="products-section">
                {
                    products.map(product => {
                        return <article key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <strong>{product.title}</strong>
                            <h4>{product.price}</h4>
                        </article>
                    })
                }
            </section>
        </main>
    )
}
export { App }