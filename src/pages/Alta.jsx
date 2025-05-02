import './Alta.scss'
import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"


const Alta = () => {

  useTitulo('Alta')

  return (
    <main>
      <section className="section-alta">
        <header className="section-alta__header">
          <h1>Formulario de alta de productos</h1>
          <p>Acá podés ingresar productos</p>
        </header>
      </section>

      <section className="alta-container">
        <Formulario />
        <Tabla />
      </section>
    </main>
  )
}

export default Alta