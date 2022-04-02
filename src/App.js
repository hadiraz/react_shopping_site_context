import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import "./assets/app.css";
import ProductDetail from './components/ProductDetail';
import Store from './components/Store';
import CardsContextProvider from './context/CardsContextProvider';
import ProductContext from './context/ProductContext';
import NavBar from './shared/NavBar';
import CartDetail from './components/CartDetail';

function App() {
  return (
  <CardsContextProvider>
    <ProductContext>
      <NavBar/>
      <section className="app-container">
      <Routes>
        <Route path="/cart" element={<CartDetail/>} />
        <Route path="/products/product/:id" element={<ProductDetail/>}/>
        <Route path="/products" element={<Store/>}/>
        <Route path="*" element={<Navigate to="/products" />}/>
      </Routes>
      </section>
    </ProductContext>
  </CardsContextProvider>
  );
}

export default App;
