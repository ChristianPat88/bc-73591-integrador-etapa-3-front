import { peticionesHttp } from '../../helpers/peticiones-http'
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagenBack, setSrcImagenBack }) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        //console.log(e)
        //console.log(e.dataTransfer.files[0])
        const files = e.dataTransfer.files
        handleFiles(files)
    }

    const handleChange = (e) => {
        const files = e.target.files
        handleFiles(files)
    }

    const handleFiles = async (files) => {
        //console.log('Recibi los archivos', files)
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    }

    const uploadFile = async (file) => {
        //console.log('LLegó a upload', file)

        const url = import.meta.env.VITE_BACKEND_UPLOAD

        try {
            const formData = new FormData()

            formData.append('imagen', file)

            const options = {
                method: 'POST',
                body: formData
            }

            const imagenUp = await peticionesHttp(url, options)

            setFoto(imagenUp)

        } catch (error) {
            console.error('[uploadFile]:', error)
        }
    }

    const previewFile = (file) => {
        //console.log('Llegó al preview', file)

        // API READER -> window -> BOM -> MDN api reader
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        })
    }

    return (
        <div className='alta-container__label drop-area' onDrop={handleDrop}>
            <p>
                Arrastra y solta tu imagen dentro del área punteada o usa
                la opción <b>Buscar Imagen</b>
            </p>
            <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
            <label className="drop-area-button" htmlFor="lbl-foto">
                Buscar Imagen
            </label>
            <div className='drop-area-image'>
                <img src={srcImagenBack} alt="" />
            </div>
        </div>

    )
}

export default DragDrop