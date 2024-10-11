import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { callProduct } from '../firebase/db'
import ItemCount from './ItemCount'

function ItemDetailContainer(){
    const [detail, setDetail] = useState(null)
    const { id } = useParams()
    useEffect(() =>{
        callProduct(id, setDetail)
    }, [id])
    return(
        <div>
            {detail ? (
                <div>
                    <h1>{detail.name}</h1>
                    <p>Precio: {detail.price}</p>
                    <p>{detail.description}</p>
                    <ItemCount item={detail} />
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    )
}

export default ItemDetailContainer