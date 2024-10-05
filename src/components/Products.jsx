import { SingleProduct } from "./SingleProduct"
import './products.css'
function Products({ products }) {
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
                        />
                    })
                }
        </section>
    )
}
export { Products }