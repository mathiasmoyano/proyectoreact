import { useState, useEffect } from 'react'
import { getProductsById } from "../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()


    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return (<span className='loader'><span className='loader-inner'></span></span>);
    }

    return (
            <div className='ItemDetailContainer'>
                <ItemDetail {...product} />
            </div>
    );
}
export default ItemDetailContainer