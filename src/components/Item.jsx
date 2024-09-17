import {Link} from 'react-router-dom'

function Item ({ product }){
    return(
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} id='catButton'>More info</Link>
        </div>
    )
}



export default Item