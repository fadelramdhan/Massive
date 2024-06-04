// OrderPage.js
import React from 'react';
import '../styles/OrderPage.css';

const OrderPage = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img
              src="../asset/logo.png"
              alt="Sweety Pastry"
            />
          </div>
          <ul>
            <li>
              <a href="home.html">Beranda</a>
            </li>
            <li>
              <a href="produk.html">Produk</a>
            </li>
            <li>
              <a href="hampers.html">Hampers</a>
            </li>
          </ul>
          <div className="icons">
            <span>
              <i className="bi bi-toggle2-off"></i>
            </span>
            <span>
              <i className="bi bi-cart"></i>
            </span>
            <a href="login.html">
              <span>
                <i className="bi bi-person-circle"></i>
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <h1>Pesanan Anda</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Harga</th>
              <th scope="col">Nomor Resi</th>
              <th scope="col">Status Pesanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/04/2024</td>
              <td>Nastar</td>
              <td>Rp. 75.000</td>
              <td>JNT237484</td>
              <td>Dalam Pengemasan</td>
            </tr>
            <tr>
              <td>12/04/2024</td>
              <td>Putri Salju</td>
              <td>Rp. 70.000</td>
              <td>JNT237484</td>
              <td>Dalam Pengemasan</td>
            </tr>
            <tr>
              <td>03/04/2024</td>
              <td>Kue Semprong</td>
              <td>Rp. 25.000</td>
              <td>A0003</td>
              <td>Sudah Dikirim</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Sweety Pastry</h3>
            <p>"Nikmati Kelezatan Kue Kering Homemade di Setiap Gigitan! Selamat berbelanja"</p>
          </div>
          <div className="footer-section">
            <h3>Hubungi Kami</h3>
            <p>
              <i className="bi bi-whatsapp"></i> +62 1234 5678 910
            </p>
            <p>
              <i className="bi bi-instagram"></i> sweet_pasty
            </p>
          </div>
          <div className="footer-section">
            <h3>Tentang Kami</h3>
            <p>Bekasi, Jawa Barat, Indonesia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default OrderPage;
