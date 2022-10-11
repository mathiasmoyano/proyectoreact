const Item = ({ img, name, category, price }) => {
    return (
        <div className="card">
            <img src={img} className='card-img' alt={name} />
            <div className='card-body'>
                <h5 className='card-tittle'>{name}</h5>
                <p className='card-text'>{category}</p>
                <p className='card-text'>{price}</p>
                <button>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item
