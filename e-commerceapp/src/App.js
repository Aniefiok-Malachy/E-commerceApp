import React from 'react'
import './App.css'
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import art_banner from "./Components/Assets/arting.png";
import game_banner from "./Components/Assets/gaming.png";
import collectible_banner from "./Components/Assets/collectibles.png";
import ShopProvider from "./Context/ShopContext"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Shop />} />
          <Route path = '/art' element={<ShopCategory banner={art_banner} category="art"/>} />
          <Route path = '/gaming' element={<ShopCategory banner={game_banner} category="gaming"/>} />
          <Route path = '/collectible' element={<ShopCategory banner={collectible_banner} category="collectible"/>} />
          <Route path ='/product' element={<Product/>}>
            <Route path =':productId' element={<Product/>} />
          </Route>
          <Route path ='/cart' element={<Cart/>} />
          <Route path ='/login' element={<LoginSignUp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </ShopProvider>
    </div>
  )
}

export default App
