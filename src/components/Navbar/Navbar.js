import './Navbar.scss'
import CardWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='NavBar'>
            <Link to={'/'}>
            <img className='logo' src='/images/Logo.png' alt='Logo'/>
            </Link>
            <div className='Categories'>
            <Link to={'/category/Asus'} className='Option'>ASUS</Link>
            <Link to={'/category/Lenovo'} className='Option'>LENOVO</Link>
            <Link to={'/category/Gigabyte'} className='Option'>GYGABYTE</Link>
            <Link to={'/category/HP'} className='Option'>HP</Link>
            </div>
            <CardWidget />
        </nav>
    )
}
 export default Navbar
