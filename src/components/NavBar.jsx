import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

function NavBar () {
    return(
        <>
            <div id="navBar">
                <h1>
                    <Link to={'/'}>Tienda</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'category/Categoria1'}>Categoria 1</Link>
                            <Link to={'category/Categoria2'}>Categoria 2</Link>
                            <Link to={'category/Categoria3'}>Categoria 3</Link>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </>
    )
}

export default NavBar