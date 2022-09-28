import './Navbar.css'
import CardWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <h1>Parkbedidas</h1>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Contact Us</button>
            </div>
            <CardWidget />
        </nav>
    )
}
 export default Navbar
