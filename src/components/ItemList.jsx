import Item from "./Item"

function ItemList ({ items }){
    return(
        <>
            {items.map(product => <Item product={product} key={product.id} />)}
        </>
    )
}

export default ItemList