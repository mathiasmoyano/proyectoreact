import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = (()=>{
    return(
        <div className="Footer">
            <Link to={'/'}> <button className='btn-flip' data-back="<Escape Informatica>" data-front="Tu mejor Opcion" /> </Link>
            <p>Diseñado por Mathias Moyano Derechos reservados 2022</p>
        </div>
    )
    
})

export default Footer