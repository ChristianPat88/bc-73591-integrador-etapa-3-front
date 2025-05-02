import useTitulo from '../hooks/useTitulo'
import './ProductoDetalle.scss'
import { useLocation } from "react-router"

const ProductoDetalle = () => {

    useTitulo('Producto Detalles')

    const location = useLocation()
    const prod = location.state ? location.state.producto : null
     
    return (
        <main>
            <section className="section-detail">
                <header className="section-detail__header">
                    <h1>Producto Detallado</h1>
                    <p>Acá podrás ver el producto completo</p>
                </header>
            </section>
            {
                prod ? (

                    <section className="detail-container">

                        <h2>Nombre: {prod.nombre}</h2>
                        <h2>Precio: ${prod.precio}</h2>
                        <h2>Stock: {prod.stock}</h2>
                        <h2>Descripción: {prod.descripcion}</h2>
                        <h2>Envío: {prod.envio ? 'SI' : 'NO'}</h2>
                        <div className="detail-container__img">
                            <img src={prod.foto ? prod.foto : "imgs/image-not-found.webp"} alt={prod.nombre} />
                        </div>

                    </section>
                ) : (

                    <h2 className="no-selected">No hay producto seleccionado</h2>

                )
            }

        </main>
    )
}

export default ProductoDetalle