import './Formulario.scss'
import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import DragDrop from './DragDrop'

const Formulario = () => {

    const { crearProductoContext, productoAEditar, setProductoAEditar, actualizarProductoContext } = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        stock: '',
        descripcion: '',
        foto: '',
        envio: false
    }


    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])


    const [form, setForm] = useState(formInicial)

    /* Creamos 2 estados para gestionar el drag and drop */
    const [foto, setFoto] = useState('')
    const [srcImagenBack, setSrcImagenBack] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id === null) {
            crearProductoContext(form)
        } else {
            actualizarProductoContext(form)
            setProductoAEditar(null)
        }

        setForm(formInicial)

    }

    const handleChange = (e) => {
        //console.log(e.target.name)
        //console.log(e.target.value)

        const { type, name, checked, value } = e.target

        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })

    }

    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
    }

    return (
        <>
            <h2 className="alta-container__subtitle">{form.id ? "Editar" : "Guardar"}</h2>
            <form className="alta-container__form" onSubmit={handleSubmit}>
                <div>
                    <label className="alta-container__label" htmlFor="lbl-nombre">Nombre:</label>
                    <input className="alta-container__input"
                        type="text"
                        id="lbl-nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange} />
                </div>

                <div>
                    <label className="alta-container__label" htmlFor="lbl-precio">Precio:</label>
                    <input className="alta-container__input"
                        type="number"
                        min={0}
                        id="lbl-precio"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange} />
                </div>

                <div>
                    <label className="alta-container__label" htmlFor="lbl-stock">Stock:</label>
                    <input className="alta-container__input"
                        type="number"
                        min={0}
                        id="lbl-stock"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange} />
                </div>

                <div>
                    <label className="alta-container__label" htmlFor="lbl-descripcion">Descripción:</label>
                    <input className="alta-container__input"
                        type="text"
                        id="lbl-descripcion"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange} />
                </div>

                <div>
                    <DragDrop
                        setFoto={setFoto}
                        srcImagenBack={srcImagenBack}
                        setSrcImagenBack={setSrcImagenBack}
                    />
                </div>

                <div>
                    <label className="alta-container__label" htmlFor="lbl-foto">Foto:</label>
                    <input className="alta-container__input"
                        type="text"
                        id="lbl-foto"
                        name="foto"
                        value={form.foto}

                        onChange={handleChange} />
                </div>

                <div>
                    <label className="alta-container__label alta-container__label-envio" htmlFor="lbl-envio">Envío</label>
                    <input className="alta-container__input alta-container__input-envio"
                        type="checkbox"
                        id="lbl-envio"
                        name="envio"
                        checked={form.envio}
                        onChange={handleChange} />
                </div>

                <div className="alta-container__buttons">
                    <button className="bot-send" type="submit">{form.id ? "Editar" : "Guardar"}</button>
                    <button className="bot-clean" type="reset" onClick={handleReset}>Limpiar</button>
                </div>

            </form>
        </>
    )
}

export default Formulario