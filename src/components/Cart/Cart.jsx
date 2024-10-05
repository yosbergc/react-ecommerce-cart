import { useId, useState, useContext } from 'react'
import { CartContext } from '../../context/Cart';
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import './cart.css'
import './singlecartitem.css'
function Cart() {
    const { cart } = useContext(CartContext)
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
                    {
                        cart.map(producto => {
                            return <SingleCartItem
                                key={producto.id}
                                title={producto.id}
                                brand={producto.brand}
                                price={producto.price}
                                thumbnail={producto.thumbnail}
                                quantity={producto.quantity}
                            />
                        })
                    }
                </section>
            </section>
            )
        }
        </section>
    )
}

function SingleCartItem({ title, brand, price, thumbnail, quantity}) {
    return (
        <article className="cart-single-product">
            <section className="inner-single-product">
                <section className="partOne">
                    <img src={thumbnail} alt={title} />
                    <section className="information-single">
                        <h3>{title}</h3>
                        <strong>{brand}</strong>
                        <p>Price: ${price}</p>
                    </section>
                </section>
                <section>
                    <p>Quantity:</p>
                    <p>{quantity}</p>
                    <button><MdOutlineAddShoppingCart  size={20}/></button>
                </section>
            </section>
            <button className="delete-btn">Delete</button>
        </article>
    )
}
export { Cart }