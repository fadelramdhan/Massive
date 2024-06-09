import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../styles/setel.css';

const DetailProduct = () => {
    const [quantities, setQuantities] = useState([1]); // Misalnya kita punya 1 produk dalam contoh ini

    const products = [
        {
            imgSrc: './Nastar.png',
            alt: 'Nastar',
            desc: 'Untuk memastikan bahwa gambar memenuhi satu kolom dan tetap responsif, kamu perlu mengatur properti CSS pada elemen img agar ukurannya mengikuti ukuran kolom Kamu juga bisa menggunakan Bootstrap utility classes untuk mempermudah pengaturan tersebut. Berikut adalah kode yang telah dimodifikasi',
            name: 'Hampers Premium 2',
            price: 75000,
            weight: '250 gram',
            rating: 4,
        },
    ];
    const ulasan = [
        {
            name: 'Anita',
            desc: 'Untuk memastikan bahwa gambar memenuhi satu kolom dan tetap responsif, kamu perlu mengatur properti CSS pada elemen img agar ukurannya mengikuti ukuran kolom Kamu juga bisa menggunakan Bootstrap utility classes untuk mempermudah pengaturan tersebut. Berikut adalah kode yang telah dimodifikasi',
            rating: 3.5,
        },
        {
            name: 'Bayu',
            desc: 'Amira merasakan kekuatan baru yang mengalir melalui dirinya, Absolute Recreation, kekuatan untuk menciptakan dan merekonstruksi segalanya secara mutlak. Meskipun hanya untuk sement',
            rating: 5,
        },
        {
            name: 'Akagi',
            desc: 'Di bawah langit malam yang dipenuhi cahaya bintang yang gemerlap, tiga sahabat—Amira, Mimir, dan Aki—berdiri di hadapan sosok misterius yang muncul dari kegelapan, Sang Anak Murphy. Namun, kali ini, ada kejutan tak terduga: Amira diberi pinjaman kekuatan oleh alter ego Aki untuk beberapa saat.',
            rating: 5,
        },
        {
            name: 'Ameri',
            desc: 'Di bawah langit malam yang dipenuhi cahaya bintang yang gemerlap, tiga sahabat—Amira, Mimir, dan Aki—berdiri di hadapan sosok misterius yang muncul dari kegelapan, Sang Anak Murphy. Namun, kali ini, ada kejutan tak terduga: Amira diberi pinjaman kekuatan oleh alter ego Aki untuk beberapa saat.',
            rating: 3,
        },
        {
            name: 'Chika',
            desc: 'Di bawah langit malam yang dipenuhi cahaya bintang yang gemerlap, tiga sahabat—Amira, Mimir, dan Aki—berdiri di hadapan sosok misterius yang muncul dari kegelapan, Sang Anak Murphy. Namun, kali ini, ada kejutan tak terduga: Amira diberi pinjaman kekuatan oleh alter ego Aki untuk beberapa saat.',
            rating: 4,
        },
    ];

    const handleDecrease = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index]--;
            setQuantities(newQuantities);
        }
    };

    const handleIncrease = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index]++;
        setQuantities(newQuantities);
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    };

    const calculateMedianRating = () => {
        if (ulasan.length === 0) return 0;

        const ratings = ulasan.map(ulasan => ulasan.rating).sort((a, b) => a - b);
        const mid = Math.floor(ratings.length / 2);

        return ratings.length % 2 !== 0 ? ratings[mid] : ((ratings[mid - 1] + ratings[mid]) / 2).toFixed(1);
    };


    return (
        <Container>
            {products.map((product, index) => (
                <Row className="p-2 m-5" key={index}>
                    <Col>
                        <div className="text-center">
                            <img src={product.imgSrc} style={{ objectFit: 'cover', width: '100%', padding: '0' }} alt={product.alt} />
                        </div>
                    </Col>
                    <Col className="ps-5">
                        <div>
                            <div>
                                <h1>{product.name}</h1>
                                <p style={{ fontWeight: "bold" }}>{formatCurrency(product.price)}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-column">
                                    <p>Review</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <Rating
                                        initialRating={product.rating}
                                        readonly
                                        emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                        fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                    />
                                    <p className="ms-2">{product.rating}</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: "12px" }}>{product.desc}</p>
                            </div>
                            <div>
                                <p className="d-flex flex-column"></p>
                                <div
                                    className="d-flex flex-row align-items-center"
                                    style={{ width: '156px', height: '47px' }}
                                >
                                    <Button
                                        className="text-white h-100"
                                        style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '10px 0 0 10px' }}
                                        onClick={() => handleDecrease(index)}
                                    >
                                        -
                                    </Button>
                                    <span
                                        className="flex-grow-1 h-100 d-flex justify-content-center align-items-center"
                                        style={{ backgroundColor: '#8f9873' }}
                                    >
                                        {quantities[index]}
                                    </span>
                                    <Button
                                        className="text-white h-100"
                                        style={{ width: '45px', outline: 'none', border: 'none', padding: '0', margin: '0', backgroundColor: '#606c38', borderRadius: '0 10px 10px 0' }}
                                        onClick={() => handleIncrease(index)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
                                    {formatCurrency(product.price * quantities[index])}
                                </p>
                                <div>
                                    <Container style={{ padding: '0' }}>
                                        <div className="pe-5">
                                            <Button style={{ marginRight: '2rem', color: '#606c38', outline: '#606c38', borderColor: '#606c38', backgroundColor: '#ffff' }}>Tambah Ke Keranjang</Button>
                                            <Button style={{ border: 'none', backgroundColor: '#606c38' }}>Pesan Sekarang</Button>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
            <div id='ulasan-box' style={{ display: 'block', padding: '0', margin: '0' }}>
                <p>Ulasan</p>
                <hr></hr>
            </div>
            <Row>
                <Col>
                    <Card style={{ border: 'none', outline: 'none' }}>
                        {ulasan.map((ulasan, index) => (
                            <Card.Body key={index}>
                                <Card.Title>{ulasan.name}</Card.Title>
                                <Rating
                                    initialRating={ulasan.rating}
                                    readonly
                                    emptySymbol={<FaRegStar style={{ color: '#ffd700' }} />}
                                    fullSymbol={<FaStar style={{ color: '#ffd700' }} />}
                                />
                                <Card.Text>{ulasan.desc}</Card.Text>
                                <hr></hr>
                            </Card.Body>
                        ))}
                    </Card>
                </Col>
                <Col id='kolom-akhir' className='d-flex justify-content-center'>
                    <div className='d-flex flex-row'>
                        <div >
                            <Rating style={{ padding: '1.4rem' }}
                                initialRating={calculateMedianRating()}
                                readonly
                                emptySymbol={<FaRegStar style={{ color: '#ffd700', fontSize: '40px' }} />}
                                fullSymbol={<FaStar style={{ color: '#ffd700', fontSize: '40px' }} />}
                            />
                        </div>
                        <div>
                            <p>{calculateMedianRating()}</p>
                        </div>
                    </div>
                    <div>
                        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '100px', marginRight: '10px' }}>
                                <div style={{ backgroundColor: '#ffd700', height: '10px', width: `${calculateMedianRating() * 20}%` }}></div>
                            </div>
                            <p>{calculateMedianRating()}</p>
                        </div> */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailProduct;
