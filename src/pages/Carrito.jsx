import './Carrito.scss'
import { useContext } from "react"
import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"
import CarritoContext from "../contexts/CarritoContext"

const Carrito = () => {

  const { carrito } = useContext(CarritoContext)

  const calcularCantidadTotal = () => {
    let cant = 0
    carrito.map((prod) => { cant = cant + prod.cantidad })
    return cant
  }

  useTitulo('Carrito')

  return (
    <main>
      <section className="section-carrito">
        <header className="section-carrito__header">
          <h1>Productos en el carrito: {calcularCantidadTotal()}</h1>
          <p>Acá podés encontrar los productos agregados al carrito</p>
        </header>
      </section>

      <section className="carrito-container">
        <ListadoCarrito />
      </section>
    </main>
  )
}

export default Carrito