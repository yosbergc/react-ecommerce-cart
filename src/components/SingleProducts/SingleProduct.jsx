import './singleproduct.css'

import { CiShoppingCart } from "react-icons/ci";

function SingleProduct({ title, SKU, imageSrc, price, brand, category, addProduct, isProductInCart, handleDelete }) {
    return (
        <article className="single-product-card">
            <img src={imageSrc} alt={title} />
            <h4>{title}</h4>
            <section className="bottom">
                <section className="upperProduct">
                    <p>{brand}</p>
                    <strong>${price}</strong>
                </section>
                <p className="category-product">{category}</p>
                {
                    isProductInCart ?
                    <button className="delete-from-cart-btn" onClick={handleDelete}>
                        <CiShoppingCart size={20}/>
                        Delete from Cart
                    </button> :
                    <button className="add-to-cart-btn" onClick={addProduct}>
                        <CiShoppingCart size={20}/>
                        Add To Cart
                    </button>
                }
                <small>SKU: {SKU}</small>
            </section>
        </article>
    )
}
export { SingleProduct }