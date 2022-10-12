import './ItemDetail.scss'
import Counter from '../Counter/Counter'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <article className='CardItem'>
            <div className='imgcontainer'>
                <img src={img} alt={name} className="ItemImg" />
                <div class="valoracion">
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label for="radio5">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label for="radio4">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label for="radio3">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label for="radio2">★</label>
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label for="radio1">★</label>
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
