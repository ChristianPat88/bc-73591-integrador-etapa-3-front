import './TablaFila.scss'
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import NavegarPaginaBoton from "../NavegarPaginaBoton"
import Swal from 'sweetalert2'


const TablaFila = ({ producto }) => {

    const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

    const handleEliminar = (id) => {

        Swal.fire({
            title: "Estás seguro?",
            text: "Se borrará el producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, lo quiero borrar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoContext(id)
                Swal.fire({
                    title: "Borrado",
                    text: "El producto ha sido eliminado",
                    icon: "success"
                });
            }
        })

    }

    const handleEditar = (producto) => {
        setProductoAEditar(producto)
    }


    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.descripcion}</td>
            <td>
                <img className="alta-container__image" src={producto.foto} alt={producto.nombre} />
            </td>
            <td>{producto.envio ? 'SI' : 'NO'}</td>
            <td>
                <div className="alta-container__table-buttons">
                    <NavegarPaginaBoton ruta="/productodetalle" producto={producto} texto="Ver" />
                    <button onClick={() => handleEditar(producto)}>Editar</button>
                    <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
                </div>
            </td>
        </tr>
    )
}

export default TablaFila