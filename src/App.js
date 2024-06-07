import React, {useState}from 'react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Product from './pages/Product';
import Hampers from './pages/Hampers';
import ReqHampers from './pages/ReqHampers';
import FormPage from './components/FormPage';
import OrderPage from './pages/OrderPage';
import HalamanKeranjang from './pages/HalamanKeranjang';
import HalamanPembelian from './pages/HalamanPembelian';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = (isToggled) => {
    setIsDarkMode(isToggled);
  };
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/data')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error fetching the data!', error);
  //     });
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>Data from MySQL Database</h1>
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>{JSON.stringify(item)}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : ''}> {}
        {/* <Header onToggleMode={handleToggleMode} /> */}
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
            path="/Keranjang"
            element={<HalamanKeranjang />}
          />
          <Route
            path="/HalamanPembelian"
            element={<HalamanPembelian />}
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
          <Route
            path="/Register"
            element={<Register />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          {/* <Route
            path="/Login"
            element={<Login />}
          /> */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
