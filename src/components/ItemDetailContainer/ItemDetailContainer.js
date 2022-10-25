import { useState, useEffect } from 'react'
import { getProductsById } from "../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import './ItemDetailContainer.scss'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <div className='loadercontainer'><span className='loader'>
            <span className='loader-inner'></span>
        </span>
        </div>
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
            <button className='Back' onClick={() => navigate (-1)}>Back</button>
        </div>
    );
}
export default ItemDetailContainer