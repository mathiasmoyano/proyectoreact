import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc} from "firebase/firestore"
import { db } from "../../services/firebase"

const Checkout = () => {
    const { cart, total } = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: 'mathias',
                phone: 'asdsad',
                mail: 'asdsads'
            },
            items: cart,
            total: total
        }
        console.log(cart, total);
        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(response => {
            console.log(response.id)
        }).catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout