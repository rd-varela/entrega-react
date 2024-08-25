function ItemListContainer ({item}) {
    return(
        <>
            <div id="itemListContainer">
                <ul>
                    <li>
                        <p>
                            {item}
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ItemListContainer