import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito, limpiarCarritoContext, guardarCarritoBackendContext } = useContext(CarritoContext)

    //console.log(carrito)

    const handleComprar = () => {
        //console.log('Comprando...')
        guardarCarritoBackendContext()
    }

    const handleLimpiarCarrito = () => {
        //console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }


    const calcularTotal = () => {
        let tot = 0
        carrito.map((prod) => { tot = tot + (prod.precio * prod.cantidad) })
        return tot
    }

    return (
        <>
            <div className="carrito-container__divcontain">
                <table className="carrito-container__table">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.length <= 0 ? (
                                <tr>
                                    <td className="no-product" colSpan={5}>No hay productos</td>
                                </tr>
                            ) : (
                                carrito.map((producto, idx) => (
                                    <ItemCarrito key={idx} producto={producto} />
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>

            <p>Total: ${calcularTotal()}</p>

            {!carrito.length <= 0 && (
                <div className="carrito-container__buttons">
                    <button className="bot-clean" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="bot-buy" onClick={handleComprar}>Comprar</button>
                </div>
            )
            }

        </>
    )
}

export default ListadoCarrito