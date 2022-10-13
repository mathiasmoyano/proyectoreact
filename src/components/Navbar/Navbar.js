import './Navbar.scss'
import CardWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='NavBar'>
            <Link to={'/'}>
            <img src='/images/Logo.png' alt='Logo'/>
            </Link>
            <div className='Categories'>
            <Link to={'/category/Asus'} className='Option'>Asus</Link>
            <Link to={'/category/Lenovo'} className='Option'>Lenovo</Link>
            <Link to={'/category/Gigabyte'} className='Option'>Gygabyte</Link>
            <Link to={'/category/HP'} className='Option'>HP</Link>
            </div>
            <CardWidget />
        </nav>
    )
}
 export default Navbar
