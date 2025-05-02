import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
import NavegarPaginaBoton from './NavegarPaginaBoton'

const Card = ({ producto }) => {

    const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

    const handleAgregar = (producto) => {
        agregarProductoAlCarritoContext(producto)
    }


    return (
        <div className="card">
            <article className="card__article">
                <div className="card__image-container">
                    <img className="card__image" src={producto.foto ? producto.foto : "imgs/image-not-found.webp"} alt={producto.nombre} />
                </div>
                <div className="card__content-container">
                    <h2 className="card__heading">{producto.nombre}</h2>
                    <div className="card__description">
                        <p>{producto.descripcion}</p>
                        <div className='card__buttons'>
                            <button onClick={() => handleAgregar(producto)}>Agregar</button>
                            <NavegarPaginaBoton ruta="/productodetalle" producto={producto} texto="Detalles" />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card