import {cartContext} from './cartContext'
import {useState} from 'react'

function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const isDuplicated = (item) => cart.some((prod) => prod.name === item.name)
    
    const addToCart = (item) => {
     if(isDuplicated(item)){
        alert('El producto ya se encuentra en el carrito')
        return
     }
        setCart([... cart, item])
    }    

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.price*prod.qty)
        const total = pricesOnly.reduce( (acc, current) => acc + current, 0,)
        return total
    }

    const clearCart = () => {
        setCart([]);
    };

    return(
        <cartContext.Provider value={{cart, addToCart, getTotal, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider