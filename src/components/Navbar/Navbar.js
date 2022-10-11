import './Navbar.scss'
import CardWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <img src='/images/Logo.png' alt='Logo'/>
            <ul>
            <li><a href="Laptops.html">Laptops</a></li>
            <li><a href="Teclados.html">Teclados</a></li>
            <li><a href="Mouses.html">Mouses</a></li>
            </ul>
            <CardWidget />
        </nav>
    )
}
 export default Navbar
