import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import 'animate.css';
import { motion } from 'framer-motion'

function Obras() {
    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <div className='obrasContainer1'>
                <Container>
                    <Row className='obrasRow1'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 4, offset: 0 }}
                        >
                            <div className='container1 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/futuroGuion.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>FUTURO GUION PARA LA OBRA DEL FUTURO</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='obrasColumn2'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 3, offset: 1 }}
                        >
                            <div className='container2 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img2' src="/assets/gif/obras/unoMasUnoTres.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt2'>UNOMASUNOTRES</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='obrasColumn3'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 3, offset: 1 }}
                        >
                            <div className='container3 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img3' src="/assets/images/obras/panoptico.png" alt="" />
                                <div className='content3'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt3'>PANOPTICO</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow2'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 3, offset: 4 }}
                        >
                            <div className='container1 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/colectivero.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>COLECTIVERO</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow3'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 4, offset: 1 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/tuVeneno.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>TU VENENO</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='obrasColumn2'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 3, offset: 2 }}
                        >
                            <div className='container2 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img2' src="/assets/gif/obras/vuelveTodoASuLugar.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt2'>VUELVE TODO A SU LUGAR</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow4'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 9, offset: 3 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/gif/obras/visuales.gif" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>VISUALES</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow5'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 4, offset: 0 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/idiotique.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>IDIOTIQUE</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='obrasColumn2'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                        <Col className='obrasColumn3'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 2, offset: 0 }}
                        >
                            <></>
                        </Col>
                    </Row>
                    <Row className='obrasRow6'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 7, offset: 5 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/intensidadEfimera.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={""}>
                                        <h3 className='txt1'>INTENSIDAD EFIMERA</h3>
                                    </Link>
                                </div>
                            </div >
                        </Col>
                    </Row>
                </Container>
            </div >
            <Footer />
        </motion.div >
    )
}

export default Obras