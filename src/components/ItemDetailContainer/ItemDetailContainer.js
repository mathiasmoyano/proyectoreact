import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import './ItemDetailContainer.scss'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() =>{
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