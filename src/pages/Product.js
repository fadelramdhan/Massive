// import React from 'react';
// import '../App.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Product = () => {
//   const products = [
//     {
//       imgSrc: './nastar-katalog.png',
//       alt: 'Nastar',
//       name: 'Nastar',
//       price: 'Rp.75.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//     {
//       imgSrc: './Kue-Kacang.png',
//       alt: 'Kue Kacang',
//       name: 'Kue Kacang',
//       price: 'Rp.60.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//     {
//       imgSrc: './Kue-Semprong.png',
//       alt: 'Kue Semprong',
//       name: 'Kue Semprong',
//       price: 'Rp.25.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//     {
//       imgSrc: './Kue-Keju-Strawberry.png',
//       alt: 'Kue Keju Strawberry',
//       name: 'Kue Keju Strawberry',
//       price: 'Rp.70.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//     {
//       imgSrc: './Kastengel.png',
//       alt: 'Kastengel',
//       name: 'Kastengel',
//       price: 'Rp.60.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//     {
//       imgSrc: './Putri-Salju.png',
//       alt: 'Putri Salju',
//       name: 'Putri Salju',
//       price: 'Rp.70.000',
//       weight: '250 gram',
//       link:'./DetailProduct'
//     },
//   ];

//   return (
//     <div>
//       {/* <Header /> */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Cari..."
//         />
//         <button>Cari</button>
//       </div>
//       <main>
//         <section className="product-list">
//           {products.map((product, index) => (
//             <div
//               className="product-card"
//               key={index}
//             >
//               <img
//                 src={product.imgSrc}
//                 alt={product.alt}
//               />
//               <h3>
//                 <a href={product.link}>{product.name}</a>
//               </h3>
//               <p>Harga : {product.price}</p>
//               <p>Berat : {product.weight}</p>
//               <button>
//                 tambahkan ke keranjang{' '}
//                 <span>
//                   <a href="HalamanKeranjang">
//                     <i className="bi bi-cart"></i>
//                   </a>
//                 </span>
//               </button>
//             </div>
//           ))}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Product;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from server or API
    axios.get('http://localhost:8081/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

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
            <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img 
              className='text-center justify-content-center'
                variant="top"
                src={`http://localhost:8081/${product.img_product}`}
                alt={product.img_product}
                style={{ marginLeft:'2.6rem', width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px'}}
              />

              <Card.Body>
                <Card.Title><a href="">{product.name_product}</a></Card.Title>
                <Card.Text>
                  Harga : {formatCurrency(product.price)}
                  <br />
                  Berat : {product.weight} gram
                </Card.Text>
                <Button variant="primary" style={{background:"#bc6c25", border:'none', outline:'none'}}>Tambahkan ke keranjang</Button>
              </Card.Body>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;

