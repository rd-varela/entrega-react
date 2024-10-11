import { useState } from 'react';
import {useCartContext} from '../context/cartContext'
import {createOrder} from '../firebase/db'
import {serverTimestamp} from 'firebase/firestore'

function Checkout (){
    const {cart, getTotal, clearCart} = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const totalSum = cart.reduce((acc, prod) => acc + prod.price * prod.qty, 0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.nombre.value
        const lastname = e.target.apellido.value
        const email = e.target.email.value

        const order = {
            buyer: {name, lastname, email},
            items: cart,
            date: serverTimestamp(),
            total: totalSum
        }

        try {
            const id = await createOrder(order);
            setOrderId(id);
            clearCart();
        } catch (err) {
            console.log("error creating order");
        }
    }
    return (
        <div>
            <h2>Resumen de compra</h2>
            <ul>
                {cart.map((prod) => (
                    <li key={prod.id}>
                        {prod.name} x {prod.qty}, ${prod.price} /u = ${(prod.price * prod.qty).toFixed(2)}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalSum.toFixed(2)}</h3>
            <form id='checkoutForm' onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" required></input>
                <input type="text" name="apellido" placeholder="Apellido" required></input>
                <input type="email" name="email" placeholder="Mail@mail.com" required></input>
                <button type="submit">Enviar</button>
            </form>
            {orderId && <p id='notificacionOrden'>Orden creada correctamente! Tu ID de orden es: {orderId}</p>}
        </div>
    )
}

export default Checkout