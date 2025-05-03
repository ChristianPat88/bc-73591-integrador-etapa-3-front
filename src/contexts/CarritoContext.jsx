import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";


// ! 1. Creación del contexto
const CarritoContext = createContext()

// ! 2. Armado del provider
const CarritoProvider = ({ children }) => {

    const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])


    function elProductoEstaEnElCarrito(producto) {
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {
        console.log('Ya estoy en el agregar del contexto', producto)


        if (!elProductoEstaEnElCarrito(producto)) {
            console.log('No está en el carrito')
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            console.log('Ya está en el carrito')
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }

    }

    const eliminarProductoDelCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoBackendContext = async () => {
        try {

            const dataCarrito = {
                carrito
            }

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(dataCarrito)
            }
            
            const carritoGuardado = await peticionesHttp(urlCarrito, options)

            limpiarCarrito()

        } catch (error) {
            console.error('[guardarCarritoBackendContext]', error)
        }
    }

    const data = {
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>

}
// ! 3. Exportaciones
export { CarritoProvider }
export default CarritoContext