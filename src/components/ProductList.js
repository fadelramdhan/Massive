// src/components/ProductList.js
import React from 'react';
import '../App.css';

const ProductList = () => {
  const products = [
    {
      imgSrc: '../asset/nastar-katalog.png',
      alt: 'Nastar',
      link: '../detailpages/PageNastar.html',
      name: 'Nastar',
      price: 'Rp.75.000',
      weight: '250 gram',
    },
    {
      imgSrc: '../asset/Kue-Kacang.png',
      alt: 'Kue Kacang',
      link: '../detailpages/PageKuekacang.html',
      name: 'Kue Kacang',
      price: 'Rp.60.000',
      weight: '250 gram',
    },
    {
      imgSrc: '../asset/Kue-Semprong.png',
      alt: 'Kue Semprong',
      link: '../detailpages/PageKuesemprong.html',
      name: 'Kue Semprong',
      price: 'Rp.25.000',
      weight: '250 gram',
    },
    {
      imgSrc: '../asset/Kue-Keju-Strawberry.png',
      alt: 'Kue Keju Strawberry',
      link: '../detailpages/PageKuekejustrawbery.html',
      name: 'Kue Keju Strawberry',
      price: 'Rp.70.000',
      weight: '250 gram',
    },
    {
      imgSrc: '../asset/Kastengel.png',
      alt: 'Kastengel',
      link: '../detailpages/kastengel.html',
      name: 'Kastengel',
      price: 'Rp.60.000',
      weight: '250 gram',
    },
    {
      imgSrc: '../asset/Putri-Salju.png',
      alt: 'Putri Salju',
      link: '../detailpages/putrisalju.html',
      name: 'Putri Salju',
      price: 'Rp.70.000',
      weight: '250 gram',
    },
  ];

  return (
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
                <i className="bi bi-cart"></i>
              </span>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductList;
