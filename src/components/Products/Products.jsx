import { SingleProduct } from "../SingleProducts/SingleProduct"
import { FilterContext } from "../../context/FilterContext"
import { CartContext } from '../../context/Cart';

import { useContext } from 'react'

import './products.css'
function Products() {
    const { addProduct } = useContext(CartContext)
    const { filteredProducts: products } = useContext(FilterContext)
    return (
        <section className="products-section">
                {
                    products.map(product => {
                        return <SingleProduct
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            brand={product.brand}
                            imageSrc={product.thumbnail}
                            SKU={product.sku}
                            category={product.category}
                            addProduct={() => addProduct(product)}
                        />
                    })
                }
        </section>
    )
}
export { Products }