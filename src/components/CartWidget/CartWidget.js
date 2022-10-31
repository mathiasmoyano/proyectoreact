import './CartWidget.scss'
import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {

    const { TotalQuantity } = useContext (CartContext)

    return (
        <Link to='/cart' className='cartcontainer'>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {TotalQuantity}
        </Link>
    )
}

export default CardWidget