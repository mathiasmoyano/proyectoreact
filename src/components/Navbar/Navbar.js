import './Navbar.css'
import CardWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <h1>Parkbedidas</h1>
            <div className='botones'>
                <button className='btn'>Inicio</button>
                <button className='btn'>Productos</button>
                <button className='btn'>Contact Us</button>
            </div>
            <CardWidget />
        </nav>
    )
}
 export default Navbar
