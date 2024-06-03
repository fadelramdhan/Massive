import React from 'react';

const Hampers = () => {
  return (
    <section className="hampers">
      <h2>Rekomendasi Hampers</h2>
      <div className="hamper-list">
        <div className="hamper">
          <img
            src="./Hampers1.png"
            alt="Hampers PREMIUM 1"
          />
          <h3>Hampers PREMIUM 1</h3>
          <p>
            Rp.350.000
            <br />
            Isi: 6 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="hamper">
          <img
            src="./Hampers2.png"
            alt="Hampers PLATINUM"
          />
          <h3>Hampers PLATINUM</h3>
          <p>
            Rp.450.000
            <br />
            Isi: 6 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
        <div className="hamper">
          <img
            src="./Hampers3.png"
            alt="Hamper MINIMALIS 1"
          />
          <h3>Hamper MINIMALIS 1</h3>
          <p>
            Rp.150.000
            <br />
            Isi: 3 kue
          </p>
          <a href="#">Lihat Selengkapnya</a>
        </div>
      </div>
    </section>
  );
};

export default Hampers;
