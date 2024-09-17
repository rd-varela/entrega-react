import {Link} from 'react-router-dom'

function Item ({ product }){
    return(
        <div id='itemCard'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} id='catButton'>More info</Link>
        </div>
    )
}



export default Item