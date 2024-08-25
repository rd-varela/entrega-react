import CartWidget from "./CartWidget"

function NavBar () {
    return(
        <>
            <div id="navBar">
                <h1>
                    Tienda
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="">Categoria 1</a>
                            <a href="">Categoria 2</a>
                            <a href="">Categoria 3</a>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </>
    )
}

export default NavBar