import { useState, useEffect } from 'react'
import { getProducts } from '../asyncMock'
import ItemList from '../ItemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.scss'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <span className='loader'>
        <span className='loader-inner'></span>
    </span>
    }
    return (
        <div>
            <h2>Listado de productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer