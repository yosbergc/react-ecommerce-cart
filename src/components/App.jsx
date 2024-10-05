import './app.css'
import { Products } from './Products'
import { Filters } from './Filters'
function App() {
    return (
        <main>
            <h1>The Big Ecommerce Store</h1>
            <Filters />
            <Products/>
        </main>
    )
}
export { App }