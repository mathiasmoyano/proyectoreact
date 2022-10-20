import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CardWidget = () => {

    const { TotalQuantity } = useContext (CartContext)

    return (
        <div className='cartcontainer'>
            <img src={cart} alt='cart'/>
            {TotalQuantity}
        </div>
    )
}

export default CardWidget