import './Pots.css'

export default function Pots() {
  const macetas = [
    {
      id: 1,
      nombre: 'Maceta Cemento Moderno',
      precio: '$250.000',
      imagen: 'https://images.unsplash.com/photo-1485955900519-e21cc028cb29?w=400&h=400&fit=crop&q=80',
      descripcion: 'Diseño minimalista en concreto'
    },
    {
      id: 2,
      nombre: 'Maceta Cerámica Geométrica',
      precio: '$150.000',
      imagen: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop&q=80',
      descripcion: 'Patrones geométricos modernos'
    },
    {
      id: 3,
      nombre: 'Maceta Terrazo',
      precio: '$90.000',
      imagen: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=400&h=400&fit=crop&q=80',
      descripcion: 'Acabado terrazo premium'
    },
    {
      id: 4,
      nombre: 'Maceta Cilindro Arquitectónico',
      precio: '$252.000',
      imagen: 'https://images.unsplash.com/photo-1578905572039-5b4f1b62e7ab?w=400&h=400&fit=crop&q=80',
      descripcion: 'Estructura cilíndrica elegante'
    }
  ]

  return (
    <section id="macetas" className="pots-section">
      <h2>Macetas de Diseño Arquitectónico</h2>
      <div className="pots-grid">
        {macetas.map(maceta => (
          <div key={maceta.id} className="pot-card">
            <img src={maceta.imagen} alt={maceta.nombre} />
            <h3>{maceta.nombre}</h3>
            <p className="descripcion">{maceta.descripcion}</p>
            <p className="precio">{maceta.precio}</p>
            <button className="add-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  )
}
