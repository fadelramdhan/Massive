import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HalamanPembelian = () => {
  return (
    <div
      className="bg"
      style={{ backgroundColor: '#8b5e3c' }}
    >
      <Container className="detil p-5">
        <div className="tulisan">
          <h2>Detil Pembeli</h2>
        </div>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="namaDepan">
                <Form.Label>Nama Depan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Depan"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="namaBelakang">
                <Form.Label>Nama Belakang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Belakang"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group
            controlId="email"
            className="mb-3"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="nomorTelepon">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Nomor Telepon"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="opsiPengiriman">
                <Form.Label>Opsi pengiriman</Form.Label>
                <Form.Select>
                  <option>Pilih opsi pengiriman</option>
                  <option value="standard">Standard</option>
                  <option value="express">Express</option>
                  <option value="overnight">Overnight</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="metodePengiriman">
                <Form.Label>Metode Pengiriman</Form.Label>
                <Form.Select>
                  <option>Metode Pengiriman</option>
                  <option value="standard">Standard</option>
                  <option value="express">Express</option>
                  <option value="overnight">Overnight</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group
            controlId="alamatPengiriman"
            className="mb-3"
          >
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              style={{
                backgroundColor: '#606c38',
                padding: '1rem 4rem',
                fontSize: 'larger',
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default HalamanPembelian;
