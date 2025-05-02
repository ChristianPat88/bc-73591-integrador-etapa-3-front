import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <main>
      <section className="section-us">
        <header className="section-us__header">
          <h1>Nosotros</h1>
          <p>Acá te contamos quienes somos</p>
        </header>
      </section>

      <section className="section-container">

        <h2 className="section-container__subtitle">¿Quiénes somos?</h2>

        <div className="section-container__img">
          <img src="/imgs/local.webp" alt="Vista del local por fuera" />
        </div>

        <p className="section-container__p">En RemerasXD, somos más que una tienda de remeras; somos un punto de encuentro para los fanáticos del anime. Somos un equipo de apasionados por la cultura otaku, y entendemos la emoción de llevar tus personajes y series favoritas contigo.</p>

        <h2 className="section-container__subtitle">Nuestra historia</h2>
        <p className="section-container__p">Nacimos de la pasión por el anime y el deseo de crear prendas únicas y de alta calidad que celebraran nuestras series favoritas. 2015 marcó el inicio de nuestro viaje, y desde entonces, hemos trabajado incansablemente para ofrecerte diseños exclusivos y originales que te permitan expresar tu amor por el anime.</p>

        <h2 className="section-container__subtitle">Nuestra misión</h2>
        <ul>
          <li>Conectar a la comunidad otaku: Queremos ser el lugar donde los fanáticos del anime encuentren remeras que reflejen su pasión y les permitan conectar con otros miembros de la comunidad.</li>
          <li>Ofrecer calidad superior: Nos comprometemos a utilizar materiales de primera calidad y técnicas de impresión de vanguardia para garantizar que nuestras remeras sean cómodas, duraderas y con diseños vibrantes.</li>
          <li>Fomentar la creatividad: Colaboramos con artistas y diseñadores talentosos para crear diseños originales y exclusivos que capturen la esencia de tus series favoritas.</li>
          <li>Brindar una experiencia excepcional: Nos esforzamos por ofrecer un servicio al cliente excepcional, desde el momento en que visitas nuestra tienda hasta que recibes tu pedido.</li>
        </ul>

        <h2 className="section-container__subtitle">¿Qué nos hace diferentes?</h2>
        <ul>
          <li>Diseños exclusivos: Colaboramos con artistas y diseñadores talentosos para crear diseños originales que te harán destacar.</li>
          <li>Variedad para todos: Ofrecemos una amplia gama de tallas, estilos y colores para que encuentres la remera perfecta para ti.</li>
          <li>Compra con confianza: Tu satisfacción es nuestra prioridad. Ofrecemos envíos rápidos, devoluciones fáciles y un excelente servicio al cliente.</li>
          <li>Una comunidad: Amamos conectar con nuestros clientes y construir una comunidad de personas que comparten nuestra pasión por la moda y la expresión personal.</li>
        </ul>

        <div className="section-container__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.321203052194!2d-58.393957125442434!3d-34.59603845709065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabee9c0921b%3A0x4dcaa5065d0e9e20!2sGaler%C3%ADa%20Bond%20Street%2C%20Av.%20Sta.%20Fe%201670%2C%20C1060%20ABP%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1741718027972!5m2!1ses!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <h2 className="section-container__subtitle">¡Únete a nuestra comunidad otaku!</h2>

        <p className="section-container__p">Te invitamos a explorar nuestra colección y encontrar la remera perfecta para ti. Síguenos en nuestras redes sociales para estar al tanto de las últimas novedades, promociones y concursos. ¡Esperamos verte pronto!</p>




      </section>


    </main>
  )
}

export default Nosotros