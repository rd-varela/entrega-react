import {useState} from 'react'
import {products} from '../data/products'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import ItemList from './ItemList'

function ItemListContainer ({item}) {

    const [items, setItems] = useState([])
    const { id } = useParams()


    const getProducts = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 2000);
        })
    }

    useEffect(() =>{
        getProducts()
        .then(res => {
            if (id) {
                const filteredProducts = res.filter(product => product.category === id);
                setItems(filteredProducts);
            } else {
                setItems(res);
            }
        })
    }, [id])

    return(
            <div id="itemListContainer">
                <ItemList items={items} />
            </div>
    )
}

export default ItemListContainer