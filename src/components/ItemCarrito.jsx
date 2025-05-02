import './ItemCarrito.scss'
import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'


const ItemCarrito = ({ producto }) => {

    const { eliminarProductoDelCarritoContext } = useContext(CarritoContext)

    const handleEliminar = (id) => {
        console.log('Eliminando el producto...', id)
        eliminarProductoDelCarritoContext(id)
    }

    return (
        <tr>
            <td>
                <img className="carrito-container__image" src={producto.foto ? producto.foto : "imgs/image-not-found.webp"} alt={producto.nombre} />
            </td>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>${producto.cantidad * producto.precio}</td>
            <td>
                <div className="carrito-container__table-buttons">
                    <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                </div>
            </td>
        </tr>
    )
}

export default ItemCarrito