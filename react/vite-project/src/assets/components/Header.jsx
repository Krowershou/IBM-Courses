import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>🌿 PlantaDesign</h1>
          <p>Plantas Premium & Macetas Arquitectónicas</p>
        </div>
        <nav className="nav">
          <a href="#plantas">Plantas</a>
          <a href="#macetas">Macetas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
