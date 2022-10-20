import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)

    const { categoryId} = useParams ()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoryId])

/*     useEffect(() =>{
        const onResize = () => console.log('cambie de tamaño')
        
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener ('resize', onResize)
    }, []) */

    if(loading){
        return <span className='loader'>
        <span className='loader-inner'></span>
    </span>
    }
    return (
        <div className='Products'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer