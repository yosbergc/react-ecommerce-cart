import { SingleProduct } from "../SingleProducts/SingleProduct"
import { FilterContext } from "../../context/FilterContext"
import { CartContext } from '../../context/Cart';

import { useContext } from 'react'

import './products.css'
function Products() {
    const { cart, addProduct, deleteProduct } = useContext(CartContext)
    const { filteredProducts: products } = useContext(FilterContext)

    function checkIfProductIsInCart(currentProduct) {
        return cart.some(product => {
            return product.id === currentProduct.id
        })
    }
    return (
        <section className="products-section">
                {
                    products.map(product => {
                        const isProductInCart = checkIfProductIsInCart(product)
                        return <SingleProduct
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            brand={product.brand}
                            imageSrc={product.thumbnail}
                            SKU={product.sku}
                            category={product.category}
                            addProduct={() => addProduct(product)}
                            isProductInCart={isProductInCart}
                            handleDelete={() => deleteProduct(product)}
                        />
                    })
                }
        </section>
    )
}
export { Products }