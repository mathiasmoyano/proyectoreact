import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Item = ({id, img, name, category, price}) => {
    const { addItem } = useContext(CartContext)
    return (
        <div className="card">
            <img src={img} className='card-img' alt={name} />
            <div className='card-body'>
                <h5 className='card-tittle'>{name}</h5>
                <p className='card-text'>{category}</p>
                <p className='card-text'>{price}</p>
                <Link to={`/detail/${id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item
