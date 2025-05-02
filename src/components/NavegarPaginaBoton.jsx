import { useNavigate } from "react-router"

const NavegarPaginaBoton = ({ruta, producto, texto}) => {
  const navegar = useNavigate()
  return (
      <button onClick={() => navegar(ruta, { state: { producto } })}>
          {texto}
      </button>
  )
}

export default NavegarPaginaBoton