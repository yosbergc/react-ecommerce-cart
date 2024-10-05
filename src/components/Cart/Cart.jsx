import { useId, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import './cart.css'
import './singlecartitem.css'
function Cart() {
    const [showCart, setShowCart] = useState(false)
    function handleShow() {
        setShowCart(!showCart)
    }
    const cartCheckBoxId = useId()
    return (
        <section className="cartContainer">
        <label htmlFor={cartCheckBoxId} className="cart-btn">
            <IoCartOutline size={25}/>
        </label>
        <input type="checkbox" id={cartCheckBoxId} onChange={handleShow}/>
        {
            showCart && (<section className="cart">
                <header className="cart-header">
                    <h2>Cart</h2>
                    <IoMdClose size={20} onClick={handleShow} style={{cursor: "pointer"}}/>
                </header>
                <section className="cart-body">
                    <SingleCartItem />
                </section>
            </section>
            )
        }
        </section>
    )
}

function SingleCartItem() {
    return (
        <article className="cart-single-product">
                <section className="partOne">
                <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="Product" />
                <section className="information-single">
                    <h3>Essence Mascara Lash Princess</h3>
                    <strong>Essence</strong>
                    <p>$9.99</p>
                    <p>Quantity: 1</p>
                </section>
            </section>
            <button>Delete</button>
        </article>
    )
}
export { Cart }