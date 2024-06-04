import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Beranda from './pages/Beranda';
import Product from './pages/Product';
import Hampers from './pages/Hampers';
import ReqHampers from './pages/ReqHampers';
import FormPage from './components/FormPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/Product"
            element={<Product />}
          />
          <Route
            path="/Beranda"
            element={<Beranda />}
          />
          <Route
            path="/Hampers"
            element={<Hampers />}
          />
          <Route
            path="/ReqHampers"
            element={<ReqHampers />}
          />
          <Route
            path="/FormPage"
            element={<FormPage />}
          />
          <Route
            path="/OrderPage"
            element={<OrderPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
