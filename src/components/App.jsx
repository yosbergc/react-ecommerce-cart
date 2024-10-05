import './app.css'
import { useFilters } from '../hooks/useFilters'
import { Products } from './Products'

function App() {
    const { filteredProducts: products } = useFilters()
    return (
        <main>
            <h1>The Big Ecommerce Store</h1>
            <Products products={products}/>
        </main>
    )
}
export { App }