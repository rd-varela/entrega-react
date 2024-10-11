import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useCartContext} from '../context/cartContext'
import {callProducts, getProductsCat} from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer ({item}) {

    const [items, setItems] = useState([])
    const { id } = useParams()

    const { cart } = useCartContext()

    useEffect(() =>{
        id ? getProductsCat(id, setItems) : callProducts(setItems)
    }, [id])

    return(
        <div id='itemListContainerDiv'>
            <div id="itemListContainer">
                <ItemList items={items} />
            </div>
        </div>
    )
}


export default ItemListContainer