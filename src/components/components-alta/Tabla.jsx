import { useContext } from 'react'
import './Tabla.scss'
import TablaFila from "./TablaFila"
import ProductosContext from '../../contexts/ProductosContext'

const Tabla = () => {

    const { productos } = useContext(ProductosContext)

    return (
        <div className="alta-container__divcontain">
            <table className="alta-container__table" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripción</th>
                        <th>Foto</th>
                        <th>Envío</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productos && productos.map((producto) => (
                            <TablaFila producto={producto} key={producto.id} />

                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}

export default Tabla