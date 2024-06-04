// src/components/Header.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="./logo.png"
            alt="Sweety Pastry"
          />
        </div>
        <ul>
          <li>
            <a href="Beranda">Beranda</a>
          </li>
          <li>
            <a href="Product">Produk</a>
          </li>
          <li>
            <a href="Hampers">Hampers</a>
          </li>
        </ul>
        <div className="icons">
          <span>
            <i className="bi bi-toggle2-off"></i>
          </span>
          <span>
            <i className="bi bi-cart"></i>
          </span>
          <a href="Login">
            <span>
              <i className="bi bi-person-circle"></i>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
