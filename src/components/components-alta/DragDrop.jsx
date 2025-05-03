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

    const handleChange = () => {

    }

    const handleFiles = (files) => {
        //console.log('Recibi los archivos', files)
        const file = files[0]
        uploadFile(file)
        previewFile(file)
    }

    const uploadFile = (file) => {
        //console.log('LLegó a upload', file)
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
        <div className='drop-area' onDrop={handleDrop}>
            <p>
                Subir imagen al servidor con <b>File Dialog</b> o con
                <b>drag and drop</b> dentro del area punteada.
            </p>
            <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
            <label className="drop-area-button" htmlFor="lbl-foto">
                File Dialog
            </label>
            <div className='drop-area-image'>
                <img src={srcImagenBack} alt="" />
            </div>
        </div>

    )
}

export default DragDrop