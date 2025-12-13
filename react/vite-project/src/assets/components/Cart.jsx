import { useState } from 'react'
import './Cart.css'

export default function Cart({ items, onRemove, onUpdateQuantity }) {
  const [isOpen, setIsOpen] = useState(false)

  const total = items.reduce((sum, item) => {
    const precio = parseFloat(item.precio.replace(/[$,.]/g, ''))
    return sum + (precio * item.cantidad)
  }, 0)

  return (
    <>
      {/* Botón del carrito flotante */}
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        🛒 Carrito ({items.length})
      </button>

      {/* Modal del carrito */}
      {isOpen && (
        <div className="cart-modal">
          <div className="cart-container">
            <div className="cart-header">
              <h2>Mi Carrito</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {items.length === 0 ? (
              <div className="empty-cart">
                <p>El carrito está vacío</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map(item => {
                    const precio = parseFloat(item.precio.replace(/[$,.]/g, ''))
                    const subtotal = precio * item.cantidad
                    return (
                      <div key={`${item.id}-${item.tipo}`} className="cart-item">
                        <img src={item.imagen} alt={item.nombre} />
                        <div className="item-details">
                          <h4>{item.nombre}</h4>
                          <p className="tipo">{item.tipo === 'planta' ? '🌿 Planta' : '🏺 Maceta'}</p>
                          <p className="precio">${precio.toLocaleString()}</p>
                        </div>
                        <div className="item-controls">
                          <button onClick={() => onUpdateQuantity(`${item.id}-${item.tipo}`, item.cantidad - 1)}>-</button>
                          <span>{item.cantidad}</span>
                          <button onClick={() => onUpdateQuantity(`${item.id}-${item.tipo}`, item.cantidad + 1)}>+</button>
                        </div>
                        <div className="item-total">
                          <p>${subtotal.toLocaleString()}</p>
                          <button 
                            className="remove-btn"
                            onClick={() => onRemove(`${item.id}-${item.tipo}`)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <h3>Total:</h3>
                    <h3>${total.toLocaleString()}</h3>
                  </div>
                  <button className="checkout-btn">Proceder al Pago</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
