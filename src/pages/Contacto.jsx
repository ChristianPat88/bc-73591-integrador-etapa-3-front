import useTitulo from '../hooks/useTitulo'
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <main>
      <section className="section-contact">
        <header className="section-contact__header">
          <h1>Contacto</h1>
          <p>Hace llegar tu mensaje o visitanos</p>
        </header>
      </section>

      <section className="section-container">

        <div className="section-container__info">
          <p>Somos Remeras XD, contamos con local en galeria Bond Street (Av. Santa Fe 1670 CABA). Abrimos de
            lunes a sabado de 12 a 20! Te esperamos!</p>
          <ul>
            <li>1166459123</li>
            <li>remerasxd@tudominio.com</li>
            <li>Av. Santa Fe 1670</li>
          </ul>
        </div>

        <div className="section-container__form">

          <form action="https://postman-echo.com/post" method="POST" target="_blank">

            <fieldset className="section-container__form-fieldset">
              <legend>Tus datos</legend>

              <div>
                <label className="section-container__form-bloque" htmlFor="lbl-nombre">Nombre:*</label>
                <input className="section-container__form-inp-caja" type="text" name="nombre" id="lbl-nombre" required autoFocus />
              </div>

              <div>
                <label className="section-container__form-bloque" htmlFor="lbl-correo">Email:*</label>
                <input className="section-container__form-inp-caja" type="email" placeholder="Ej: mail@gmail.com" name="correo"
                  id="lbl-correo" required />
              </div>

              <div>
                <label className="section-container__form-bloque" htmlFor="lbl-telefono">Teléfono:</label>
                <input className="section-container__form-inp-caja" type="text" placeholder="Código de área y número" name="telefono"
                  id="lbl-telefono" />
              </div>

              <div>
                <label className="section-container__form-bloque" htmlFor="lbl-descripcion">Mensaje </label>
                <textarea className="section-container__form-inp-caja" name="descrip" id="lbl-descripcion" rows="6"></textarea>
              </div>

            </fieldset>

            <p className="section-container__form-oblig">*: campo obligatorio.</p>

            <div className="section-container__form-bottons">
              <button className="bot-send" type="submit">Enviar</button>
              <button className="bot-clean" type="reset">Borrar</button>
            </div>

          </form>

        </div>

      </section>

    </main>
  )
}

export default Contacto