import Item from "../Item/Item"
import './ItemList.scss'
import { memo } from "react"

const ItemList = ({ products }) => {

    return (
        <div className="cardcontainer">
            {products.map(prod => <Item key={prod.id} id={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price} />)}
        </div>
    )
}

export default memo(ItemList)