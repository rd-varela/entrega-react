import {useState} from 'react'
import {useCartContext} from '../context/cartContext'

function ItemCount (item){
    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()

    const add = () => setCount (count + 1)
    const substract = () => setCount (count - 1)
    const handleAddToCart = () => addToCart({...item.item, qty: count})

    return(
        <div id='itemCount'>
            <p>Cantidad: {count}</p>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <button onClick={handleAddToCart}>agregar</button>
        </div>
    )
}

export default ItemCount