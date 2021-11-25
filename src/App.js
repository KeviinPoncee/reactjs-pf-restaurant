import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContainer } from './components/containers/CartContainer'
import { HomeContainer } from './components/containers/HomeContainer'
import { ItemDetailContainer } from './components/containers/ItemDetailContainer'
import { ItemListContainer } from './components/containers/ItemListContainer'
import { NavBar } from './components/NavBar'
import { CartContextProvider } from './context/CartContext'

import './App.css'

const App = () => {
  return (
    <div className='App'>

      <CartContextProvider>

        <BrowserRouter>
          <header className='fixed-top bg-light'>
            <NavBar/>
          </header>
          <Routes>
            <Route exact path='/' element={<HomeContainer/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
            <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<CartContainer/>}/>
          </Routes>
        </BrowserRouter>

      </CartContextProvider>

    </div>
  )
}

export default App
