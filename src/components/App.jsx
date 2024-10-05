import './app.css'
import { useProducts } from '../hooks/useProducts'
import { Products } from './Products'
import { Loading } from './Loading'
function App() {
    const { products, error, loading } = useProducts()
    return (
        <main>
            <h1>The Big Ecommerce Store</h1>
            <Products products={products}/>
            {
                loading && <Loading />
            }
        </main>
    )
}
export { App }