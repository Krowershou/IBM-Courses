import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>PlantaDesign ofrece plantas premium y macetas de diseño arquitectónico para transformar tus espacios.</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@plantadesign.com</p>
          <p>Teléfono: +34 XXX XX XX XX</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PlantaDesign. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
