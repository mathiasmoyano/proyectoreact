import { useState, useEffect, createContext } from "react"
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [TotalQuantity, setTotalQuantity] = useState(0)

    useEffect(() =>{
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) => {
        console.log('addItem')
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            alert('ya estaaaaaaaaaaa')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

/*     const removeItem = () => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)

        setCart(cartWithoutProduct)
    } */

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod =>{
            accu += prod.quantity
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, TotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}