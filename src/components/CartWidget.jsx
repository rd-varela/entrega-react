import {useCartContext} from '../context/cartContext'

function CartWidget () {
    const {cart} = useCartContext()

    return(
        <>
            <button id="cartButton">
                Cart
                <div id="cartCounter">
                    <p>{cart.length}</p>
                </div>
            </button>
        </>
    )
}

export default CartWidget