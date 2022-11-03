import './ItemDetail.scss'
import Counter from '../Counter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img, description
        }

        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    const quantityAdded = getProductQuantity(id)

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
                <p>Descripción: {description}</p>
                <p>Stock: {stock}</p>
                <p>USD$ {price}</p>
                <footer className='ItemFooter'>
                    {stock !== 0 ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> : <p>No hay stock de este producto</p>}
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail
