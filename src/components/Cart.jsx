import {useCartContext} from '../context/cartContext'
import {Link} from 'react-router-dom'

function Cart () {
    const { cart } = useCartContext()
    return (
        <div id='cartPage'>
            <p>Lista de items en carrito:</p>
            {cart.map(prod => <p key={prod.id}>- {prod.name} ({prod.qty})</p>)}
            <Link id='checkoutLink' to='/checkout'>Finalizar compra</Link>
        </div>
    )
}



export default Cart