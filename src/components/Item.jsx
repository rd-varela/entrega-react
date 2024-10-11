import {Link} from 'react-router-dom'

function Item ({ product }){
    return(
        <div id='itemCard'>
            <h3>{product.name}</h3>
            <div id="prodImg"><img src={product.image}/></div>
            <p id='prodPrice'>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} id='catButton'>Mas info</Link>
        </div>
    )
}



export default Item