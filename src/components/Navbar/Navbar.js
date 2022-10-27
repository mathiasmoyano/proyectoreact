import './Navbar.scss'
import CardWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'



const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])


    return (
        <nav className='NavBar'>
            <Link to={'/'}>
                <img className='logo' src='/images/Logo.png' alt='Logo' />
            </Link>
            <div className='Categories'>
                {
                    categories.map(cat => (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                    ))
                }
            </div>
            <CardWidget />
        </nav>
    )
}
export default Navbar
