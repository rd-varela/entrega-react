import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

function NavBar () {
    return(
        <>
            <div id="navBar">
                <h1>
                    <Link to={'/'}>CosmoStore</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'category/Marte'}>Marte</Link>
                            <Link to={'category/Neptuno'}>Neptuno</Link>
                            <Link to={'category/Jupiter'}>Jupiter</Link>
                        </li>
                    </ul>
                </nav>
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </div>
        </>
    )
}

export default NavBar