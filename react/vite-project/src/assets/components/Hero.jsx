import './Hero.css'
import plantasInicio from '../images/plantasInicio.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Transforma tu espacio con naturaleza</h2>
        <p>Descubre nuestra colección exclusiva de plantas y macetas de diseño arquitectónico</p>
        <button className="cta-button">Explorar Catálogo</button>
      </div>
      <div className="hero-image">
        <img 
          src={plantasInicio}
          alt="Plantas decorativas modernas"
        />
      </div>
    </section>
  )
}
