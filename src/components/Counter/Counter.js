import { useState } from "react";
import './Counter.scss'

const Counter = ({onAdd}) => {
    const [count, setCount] = useState(0)
    const [title] = useState('Vino prime')

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className="divcontador">
            <h2>{title}</h2>
            <h3>{count}</h3>
            <div className="btn-container">
                <button className="btnrestar" onClick={restar}><span>-</span></button>
                <button className="btnsumar" onClick={increment}>+</button>
            </div>
            <button className="btnagrcarrito" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}

export default Counter
