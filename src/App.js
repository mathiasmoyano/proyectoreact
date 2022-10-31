import React from 'react';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext.js';
import Error404 from './components/error404/error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
