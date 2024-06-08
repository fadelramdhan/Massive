import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pembayaran = () => {
    return (
        <>
            <Container style={{fontFamily:'jua'}}>
                <Row className="d-flex mt-5">
                    <Col className="d-flex flex-column me-5" style={{ backgroundColor: '#fefae0', padding:'2rem', borderRadius:'20px' }}>
                        <div className="Rincian">
                            <h2 style={{fontWeight:'bolder'}}>Rincian Pesanan</h2>
                            <h3 style={{fontWeight:'bolder'}}>Produk</h3>
                        </div>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Hampers Premium 2</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <div>
                            <ol className="d-flex flex-column">
                                <li>*Nastar</li>
                                <li>*Kue Kacang</li>
                                <li>*Semprong</li>
                                <li>*Kartu Ucapan</li>
                            </ol>
                        </div>
                        <hr></hr>
                        <p>Opsi Pengiriman</p>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Gosend</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p>Biaya Layanan</p>
                            </div>
                            <div>
                                <p> Rp 3.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-row justify-content-between Uraian">
                            <div className="d-flex flex-column ">
                                <p style={{fontWeight:'bolder'}}>Total Pembayaran</p>
                            </div>
                            <div>
                                <p style={{fontWeight:'bolder'}}> Rp 268.000</p>
                            </div>
                        </div>
                    </Col>

                    <Col className="d-flex flex-column me-5" style={{ backgroundColor: '#fefae0', padding:'2rem', borderRadius:'20px' }}>
                        <div className="Rincian">
                            <h2 style={{fontWeight:'bolder'}}>Rincian Metode Pemnayaran</h2>
                        </div>
                        <p>Opsi Pengiriman</p>
                        <div className="d-flex flex-column Uraian">
                            <div className="d-flex">
                                <p>Gosend</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-column Uraian">
                            <div className="d-flex">
                                <p>Gosend</p>
                            </div>
                            <div>
                                <p> Rp 250.000</p>
                            </div>
                        </div>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container className='text-center justify-content-center align-item-center'>
                    <div className="pe-5 ">
                        <Button style={{marginRight:'2rem', padding:'0.5rem 4rem', color: '#6b8e23', outline:'#6b8e23', borderColor:'#6b8e23', backgroundColor:'#ffff'}}>Batal</Button>
                        <Button style={{padding:'0.5rem 4rem', border:'none', backgroundColor:'#6b8e23'}}>Bayar</Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Pembayaran