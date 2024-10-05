import { SingleProduct } from "./SingleProduct"
import { FilterContext } from "../context/FilterContext"
import { useContext } from 'react'

import './products.css'
function Products() {
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
                        />
                    })
                }
        </section>
    )
}
export { Products }