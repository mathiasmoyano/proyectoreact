import { useState } from "react";
import './Counter.scss'


const Counter = ({stock = 0 , initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if (quantity < stock){
        setQuantity(quantity + 1)
        }
    }

    const restar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="divcontador">
            <div className="btn-container">
                <button className="btnrestar" onClick={restar}><span>-</span></button>
                <h3>{quantity}</h3>
                <button className="btnsumar" onClick={increment}>+</button>
            </div>
            <button className="btnagrcarrito" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )

}

export default Counter
