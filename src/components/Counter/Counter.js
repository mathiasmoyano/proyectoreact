import { useState } from "react";
import './Counter.scss'

let stock = 4;

const Counter = ({onAdd}) => {
    
    const [count, setCount] = useState(0)
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }

    return (
        <div className="divcontador">
            <div className="btn-container">
                <button className="btnrestar" onClick={restar}><span>-</span></button>
                <h3>{count}</h3>
                <button className="btnsumar" onClick={increment}>+</button>
            </div>
            <button className="btnagrcarrito" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}

export default Counter
