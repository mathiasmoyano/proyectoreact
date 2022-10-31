import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.scss'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, removeItem, total, clearCart, TotalQuantity} = useContext(CartContext)

    if(TotalQuantity === 0){
        return(
            <h1>No se</h1>
        )
    }


    return (
        <div className="Cart-conteiner">
            <h1>Resumen del Carrito</h1>
            <div className="items-container">
                {
                    cart.map(prod => (
                        <div className="card-cart">
                            <img src={prod.img} alt='producto'/>
                            <div className='card-body'>
                                <p className="prod-name">{prod.name}</p>
                                <p className="cantidad">cantidad: {prod.quantity}</p>
                                <p className="prod-price">Precio por Unidad: USD${prod.price}</p>
                                <p className="prod-price">Subtotal: USD${prod.price * prod.quantity}</p>
                                <button className="btn-remover" onClick={() => removeItem(prod.id)}>Remover</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="finish">
                Precio total: USD$ {total}
                <button className="btn-clear" onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link to='/checkout' className='Option'><button>Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart