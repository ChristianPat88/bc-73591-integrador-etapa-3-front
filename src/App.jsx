import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Cabecera from "./components/Cabecera"

const App = () => {
  return (
    <BrowserRouter>
      <Cabecera />

      <Rutas />

    </BrowserRouter>
  )
}

export default App