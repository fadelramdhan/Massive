// src/components/ProductList.js
import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Product = () => {
  const products = [
    {
      imgSrc: './nastar-katalog.png',
      alt: 'Nastar',
      name: 'Nastar',
      price: 'Rp.75.000',
      weight: '250 gram',
    },
    {
      imgSrc: './Kue-Kacang.png',
      alt: 'Kue Kacang',
      name: 'Kue Kacang',
      price: 'Rp.60.000',
      weight: '250 gram',
    },
    {
      imgSrc: './Kue-Semprong.png',
      alt: 'Kue Semprong',
      name: 'Kue Semprong',
      price: 'Rp.25.000',
      weight: '250 gram',
    },
    {
      imgSrc: './Kue-Keju-Strawberry.png',
      alt: 'Kue Keju Strawberry',
      name: 'Kue Keju Strawberry',
      price: 'Rp.70.000',
      weight: '250 gram',
    },
    {
      imgSrc: './Kastengel.png',
      alt: 'Kastengel',
      name: 'Kastengel',
      price: 'Rp.60.000',
      weight: '250 gram',
    },
    {
      imgSrc: './Putri-Salju.png',
      alt: 'Putri Salju',
      name: 'Putri Salju',
      price: 'Rp.70.000',
      weight: '250 gram',
    },
  ];

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
          {products.map((product, index) => (
            <div
              className="product-card"
              key={index}
            >
              <img
                src={product.imgSrc}
                alt={product.alt}
              />
              <h3>
                <a href={product.link}>{product.name}</a>
              </h3>
              <p>Harga : {product.price}</p>
              <p>Berat : {product.weight}</p>
              <button>
                tambahkan ke keranjang{' '}
                <span>
                  <a href="HalamanKeranjang">
                    <i className="bi bi-cart"></i>
                  </a>
                </span>
              </button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
