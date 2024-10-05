import './singleproduct.css'
import { CiShoppingCart } from "react-icons/ci";

function SingleProduct({ title, SKU, imageSrc, price, brand }) {
    return (
        <article className="single-product-card">
            <img src={imageSrc} alt={title} />
            <h4>{title}</h4>
            <section className="bottom">
                <section className="upperProduct">
                    <p>{brand}</p>
                    <strong>${price}</strong>
                </section>
                <button className="add-to-cart-btn">
                    <CiShoppingCart size={20}/>
                    Add To Cart
                </button>
                <small>SKU: {SKU}</small>
            </section>
        </article>
    )
}
export { SingleProduct }