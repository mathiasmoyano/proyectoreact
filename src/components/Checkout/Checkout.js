import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from '../../notification/NotificationService'
import { db } from "../../services/firebase"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import './Checkout.scss'

const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [cel, setCel] = useState("");
    const [comentarios, setComentarios] = useState("");



    const createOrder = async () => {
        setLoading(true)
        try {
            if (email2 === email && nombre.length >= 2 && cel.length >= 9) {
                const objOrder = {
                    buyer: {
                        nombre: { nombre },
                        direccion: { direccion },
                        celular: { cel },
                        mail: { email },
                        comentarios: { comentarios },
                    },
                    items: cart,
                    total: total
                }

                const batch = writeBatch(db)

                const outOfStock = []

                const ids = cart.map(prod => prod.id)

                const productsRef = collection(db, 'products')

                const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

                const { docs } = productsAddedFromFirestore

                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock

                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productAddedToCart?.quantity

                    if (stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })

                if (outOfStock.length === 0) {
                    await batch.commit()

                    const orderRef = collection(db, 'orders')

                    const orderAdded = await addDoc(orderRef, objOrder)

                    clearCart()

                    setTimeout(() => {
                        navigate('/')
                    }, 1500)

                    setNotification('success', `id de su orden es: ${orderAdded.id}`)
                
            } else {
                setNotification('error', 'hay productos que estan fuera de stock')
            }

        }else{
            setNotification('error', 'Porfavor Complete correctamente los campos')
        }

        } catch (error) {
            setNotification('error', 'Estamos solucionando este problema')
        } finally {
            setLoading(false)
        }

        if (loading) {
            return <h1>Se esta generando su orden...</h1>
        }
    }

    return (
        <div className="form-container">
            <h1>Formulario de compra</h1>
            <p>Escape Informatica</p>
            <div className='checkForm' >
                <label>Nombre*</label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-input" placeholder="Nombre" />
                <label>Mail*</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-input" placeholder="Email" />
                <label>Confirmar Mail*</label>
                <input value={email2} onChange={(e) => setEmail2(e.target.value)} type="email 2" className="form-input" placeholder="Confirma tu Email" />
                <label>Celular*</label>
                <input value={cel} onChange={(e) => setCel(e.target.value)} type="number" className="form-input" placeholder="Tel??fono" />
                <label>Direcci??n*</label>
                <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-input" placeholder="Direcci??n" />
                <label>Detalles*</label>
                <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} type="text" className="form-input" placeholder="Comentarios" />
                <button className="btn-orden" onClick={createOrder}>Pagar</button>
            </div>
        </div>
    )
}

export default Checkout