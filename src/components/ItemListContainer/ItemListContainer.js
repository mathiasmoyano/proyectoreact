import ItemList from '../ItemList/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.scss'
import { useParams} from 'react-router-dom';
import  { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])



    if(loading) {
        return <div className='loadercontainer'><span className='loader'>
            <span className='loader-inner'></span>  
        </span>
        </div>
    }

    if(error){
        return <h1>Ups.. encontramos un problema</h1>
    }

    return (
        <div className='Products'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer