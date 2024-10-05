import './app.css'
import { Products } from '../Products/Products'
import { Filters } from '../Filters/Filters'
import { Cart } from '../Cart/Cart'
import { ProvideCartContext } from '../../context/Cart'
function App() {
    return (
        <main>
            <h1>The Big Ecommerce Store</h1>
            <Filters />
            <ProvideCartContext>
                <Products />
                <Cart />
            </ProvideCartContext>
        </main>
    )
}
export { App }