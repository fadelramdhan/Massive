import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HalamanKeranjang() {
  return (
    <div>
      <Header />
      <main className="container-fluid pe-5 ps-5">
        <Container className="d-flex flex-column">
          <div>
            <h1 style={{ fontFamily: 'jua', color: '#bc6c25', paddingTop: '1rem' }}>Keranjang</h1>
          </div>
          <hr />
          <Row className="d-flex flex-row p-5">
            <Col
              md={9}
              className="d-flex flex-row"
            >
              <div>
                <Form.Check
                  type="checkbox"
                  className="p-3"
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex flex-row flex-grow-1 p-2">
                <img
                  src="./asset/images/Rectangle 171.png"
                  alt="Deskripsi gambar"
                  style={{ objectFit: 'contain', width: 'auto', height: '200px' }}
                />
                <div className="isi-tulisan d-flex flex-column ps-2 justify-content-between">
                  <div className="isi-o d-flex flex-column">
                    <h1>Nastar</h1>
                    <p>Berat Kue 2gram</p>
                  </div>
                  <img
                    src="./asset/images/Vector (7).png"
                    alt="Deskripsi gambar"
                    style={{ width: '15px', height: '20px' }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column pe-3">
                <div className="jumlah">
                  <p className="d-flex flex-column">Jumlah</p>
                  <div
                    className="d-flex flex-row align-items-center border"
                    style={{ width: '156px', height: '47px' }}
                  >
                    <Button
                      className="text-white h-100"
                      style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '10px 0 0 10px' }}
                    >
                      -
                    </Button>
                    <span
                      className="flex-grow-1 h-100 d-flex justify-content-center align-items-center"
                      style={{ backgroundColor: '#8f9873' }}
                    >
                      1
                    </span>
                    <Button
                      className="text-white h-100"
                      style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '0 10px 10px 0' }}
                    >
                      +
                    </Button>
                  </div>
                  <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Rp 70.000</p>
                </div>
              </div>
            </Col>
            <Col
              md={3}
              className="ps-5"
              style={{ borderLeft: '2px solid black', padding: '2px' }}
            >
              <p
                className="text-center"
                style={{ fontSize: '30px', fontWeight: 'bold' }}
              >
                Rincian
              </p>
              <div className="total d-flex flex-row justify-content-between">
                <div className="text-total d-flex flex-column">
                  <p className="text-left">Total Sementara</p>
                  <p className="text-left">Ongkos Kirim</p>
                  <p className="text-left">Total</p>
                </div>
                <div className="text-total d-flex flex-column">
                  <p className="text-left">Rp 75.000</p>
                  <p className="text-left">Rp 0</p>
                  <p className="text-left">Rp 75.000</p>
                </div>
              </div>
              <Button
                className="text-white w-100 text-center align-items-center justify-content-center"
                style={{ backgroundColor: '#606c38', paddingTop: '1rem', paddingBottom: '1rem', borderRadius: '10px', border: 'none', fontSize: 'large' }}
              >
                PESAN
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default HalamanKeranjang;
