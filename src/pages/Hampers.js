import React from 'react';
import '../styles/Hampers.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Hampers = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari..."
        />
        <button>Cari</button>
      </div>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hampers;
