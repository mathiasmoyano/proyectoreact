import './ItemDetail.scss'
import Counter from '../Counter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    
    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    return (
        <article className='CardItem'>
            <div className='imgcontainer'>
                <img src={img} alt={name} className="ItemImg" />
                <div className='valoracion'>
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label htmlFor="radio5">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label htmlFor="radio4">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label htmlFor="radio3">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label htmlFor="radio2">★</label>
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label htmlFor="radio1">★</label>
                </div>
                <p>valoración</p>
            </div>
            <div className='Bodyitem'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
                <p>{category}</p>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                <p>{price}</p>
                <footer className='ItemFooter'>
                    <Counter onAdd={handleOnAdd} stock={stock} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail
