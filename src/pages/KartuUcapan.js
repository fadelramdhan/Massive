import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const KartuUcapan = () => {
    return (
        <>
            <Container style={{ marginTop: '3rem', maxwidth: 'none', borderRadius: '40px' }}>
                <Row>
                    <Col>
                        <Form style={{ paddingTop: '2rem' }}>
                            <Form.Group controlId="opsiPengiriman" style={{padding:'1rem 0'}}>
                                <Form.Label style={{fontSize:'1rem'}}>Perihal</Form.Label>
                                <Form.Select>
                                    <option>Tuliskan</option>
                                    <option value="standard">Standard</option>
                                    <option value="express">Express</option>
                                    <option value="overnight">Overnight</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="text-area" style={{ paddingBottom: '2rem', fontSize:'1rem' }}>
                                <Form.Label>Tuliskan Kata-katanya</Form.Label>
                                <div className="text-area-container">
                                    <Form.Control type="text" style={{ padding: '6rem', borderRadius: '10px' }} />
                                </div>
                            </Form.Group>
                            <div className='buton text-end' style={{ display: 'block' }}>
                                <Button className='text-center' variant="primary" style={{ padding: '0.6rem 3rem', backgroundColor: ' #6b8e23', border: 'none' }} type="submit">Submit</Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default KartuUcapan