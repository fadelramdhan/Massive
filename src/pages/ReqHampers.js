import React from 'react';
import './styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ReqHampers = () => {
  const handleOrderClick = () => {
    const selectedProducts = document.querySelectorAll('.product input[type="checkbox"]:checked');
    if (selectedProducts.length > 0) {
      alert(`You have selected ${selectedProducts.length} product(s)`);
    } else {
      alert('Please select at least one product');
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="products">
          <Product
            imgSrc="../asset/nastar-katalog.png"
            title="Nastar"
            description="Nastar adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/Kue-Kacang.png"
            title="Kue Kacang"
            description="Kue kacang adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/Kue-Semprong.png"
            title="Kue Semprong"
            description="Kue semprong adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/Kue-Keju-Strawberry.png"
            title="Kue Keju Strawberry"
            description="Kue keju strawberry adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/Kastengel.png"
            title="Kastengel"
            description="Kastengel adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/Putri-Salju.png"
            title="Putri Salju"
            description="Putri salju adalah kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya."
          />
          <Product
            imgSrc="../asset/kue-lidahkucing.png"
            title="Kue Lidah Kucing"
            description="Kue lidah kucing adalah kudapan mungil nan renyah yang terbuat dari bahan sederhana seperti tepung terigu, gula halus, mentega, telur, dan vanili."
          />
          <Product
            imgSrc="../asset/kue-bijiketapang.png"
            title="Kue Biji Ketapang"
            description="Kue biji ketapang adalah camilan tradisional khas Betawi yang terkenal dengan bentuknya yang mungil menyerupai biji ketapang."
          />
          <Product
            imgSrc="../asset/kue-bawang.png"
            title="Kue Bawang"
            description="Kue bawang adalah camilan gurih dan renyah yang populer di Indonesia."
          />
        </section>
        <button
          className="order-button"
          onClick={handleOrderClick}
        >
          Pesan Sekarang
        </button>
      </main>
    </div>
  );
};

const Product = ({ imgSrc, title, description }) => (
  <div className="product">
    <img
      src={imgSrc}
      alt={title}
    />
    <h2>{title}</h2>
    <p>Berat: 250 gram</p>
    <p>{description}</p>
    <input type="checkbox" />
  </div>
);

export default ReqHampers;
