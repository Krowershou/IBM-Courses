import './Plants.css'
import Monstera from '../images/monsteraDeliciosa.jpg'
import Golden from '../images/pothosDorado.jpg'
import Snake from '../images/snakePlant.jpg'
import Fiddle from '../images/plantasInicio.jpg'

export default function Plants() {
  const plantas = [
    {
      id: 1,
      nombre: 'Monstera Deliciosa',
      precio: '$500.000',
      imagen: Monstera,
      descripcion: 'Planta tropical robusta'
    },
    {
      id: 2,
      nombre: 'Pothos Dorado',
      precio: '$600.000',
      imagen: Golden,
      descripcion: 'Perfecta para espacios interiores'
    },
    {
      id: 3,
      nombre: 'Snake Plant',
      precio: '$700.000',
      imagen: Snake,
      descripcion: 'Fácil de cuidar y resistente'
    },
    {
      id: 4,
      nombre: 'Fiddle Leaf Fig',
      precio: '$950.000',
      imagen: Fiddle,
      descripcion: 'Elegante y sofisticada'
    }
  ]

  return (
    <section id="plantas" className="plants-section">
      <h2>Nuestras Plantas Premium</h2>
      <div className="plants-grid">
        {plantas.map(planta => (
          <div key={planta.id} className="plant-card">
            <img src={planta.imagen} alt={planta.nombre} />
            <h3>{planta.nombre}</h3>
            <p className="descripcion">{planta.descripcion}</p>
            <p className="precio">{planta.precio}</p>
            <button className="add-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  )
}
