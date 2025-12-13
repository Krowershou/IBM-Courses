import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Plants from './assets/components/Plants'
import Pots from './assets/components/Pots'
import Footer from './assets/components/Footer'
import Cart from './assets/components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (producto, tipo) => {
    const itemId = `${producto.id}-${tipo}`
    const existingItem = cartItems.find(item => item.id === producto.id && item.tipo === tipo)

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === producto.id && item.tipo === tipo
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, {
        ...producto,
        tipo,
        cantidad: 1
      }])
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => `${item.id}-${item.tipo}` !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems(cartItems.map(item =>
        `${item.id}-${item.tipo}` === itemId
          ? { ...item, cantidad: newQuantity }
          : item
      ))
    }
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Plants onAddToCart={addToCart} />
      <Pots onAddToCart={addToCart} />
      <Footer />
      <Cart 
        items={cartItems} 
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

export default App
