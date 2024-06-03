import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hampers.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hampers = () => {
  return (
    <div>
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
              <Link to="/beranda">Beranda</Link>
            </li>
            <li>
              <Link to="/produk">Produk</Link>
            </li>
            <li>
              <Link to="/hampers">Hampers</Link>
            </li>
          </ul>
          <div className="icons">
            <span>
              <i className="bi bi-toggle2-off"></i>
            </span>
            <span>
              <i className="bi bi-cart"></i>
            </span>
            <Link to="/login">
              <span>
                <i className="bi bi-person-circle"></i>
              </span>
            </Link>
          </div>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari produk..."
          />
          <button type="button">Cari</button>
        </div>
      </header>
      <main>
        <section className="product-list">
          <div className="product-card">
            <img
              src="./Hampers1.png"
              alt="Hampers Premium 2"
            />
            <h3>Hampers Premium 2</h3>
            <p>Harga: Rp.250.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img
              src="./Hampers2.png"
              alt="Hampers Hemat"
            />
            <h3>Hampers Hemat</h3>
            <p>Harga: Rp.100.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img
              src="./Hampers3.png"
              alt="Hampers Hemat.2"
            />
            <h3>Hampers Hemat.2</h3>
            <p>Harga: Rp.70.000</p>
            <p>Berat: 250 gram</p>
            <p>Isi kue: 2</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img
              src="./Hampers4.png"
              alt="Hampers Platinum"
            />
            <h3>Hampers Platinum</h3>
            <p>Harga: Rp.500.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 9</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img
              src="./Hampers5.png"
              alt="Hampers Royal"
            />
            <h3>Hampers Royal</h3>
            <p>Harga: Rp.600.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 5</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
          <div className="product-card">
            <img
              src="./Hampers6.png"
              alt="Hampers Hemat.3"
            />
            <h3>Hampers Hemat.3</h3>
            <p>Harga: Rp.100.000</p>
            <p>Berat kue: 250 gram</p>
            <p>Isi kue: 3</p>
            <button>
              tambahkan ke keranjang{' '}
              <span>
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hampers;
