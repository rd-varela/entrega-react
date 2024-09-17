import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { products } from '../data/products'; // Adjust the path if necessary

function ItemDetailContainer(){
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() =>{
        const product = products.find((p) => p.id === Number(id));
        setDetail(product)
    }, [id])
    return(
        <div>
            {detail ? (
                <div>
                    <h1>{detail.name}</h1>
                    <p>Price: {detail.price}</p>
                    <p>Description: {detail.description}</p>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    )
}

export default ItemDetailContainer