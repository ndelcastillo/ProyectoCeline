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
                                    <Link style={{ textDecoration: "none" }} to={"/obras/futuro-guion-para-la-obra-del-futuro"}>
                                        <h3 className='txt1'>FUTURO GUION PARA OBRA DEL FUTURO</h3>
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
                                <img className='img2' src="/assets/images/obras/unoMasUnoTres.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/unomasunotres"}>
                                        <h3 className='txt2'>UNOMASUNOTRES</h3>
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
                            lg={{ span: 6, offset: 3 }}
                        >
                            <div className='container1 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/arteObjeto.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/arte-objeto"}>
                                        <h3 className='txt1'>ARTE OBJETO</h3>
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
                            <div className='container2 animate__animated animate__fadeInUp animate__slower'>
                                <img className='img2' src="/assets/images/obras/panoptico.png" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/panoptico"}>
                                        <h3 className='txt2'>PANOPTICO</h3>
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
                                <img className='img1' src="/assets/images/obras/vuelveTodoASuLugar.gif" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/vuelve-todo-a-su-lugar"}>
                                        <h3 className='txt1'>VUELVE TODO A SU LUGAR</h3>
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
                                <img className='img2' src="/assets/images/obras/elAleph.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/aleph-pandemico"}>
                                        <h3 className='txt2'>ALEPH PANDEMICO</h3>
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
                            lg={{ span: 4, offset: 1 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/tuVeneno.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/tu-veneno"}>
                                        <h3 className='txt1'>TU VENENO</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='obrasColumn2'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 4, offset: 2 }}
                        >
                            <div className='container2 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img2' src="/assets/images/obras/idiotique.png" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/idiotique"}>
                                        <h3 className='txt2'>IDIOTIQUE</h3>
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
                            lg={{ span: 6, offset: 0 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/visuales.gif" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/visuales"}>
                                        <h3 className='txt1'>VISUALES</h3>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow6'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 12, offset: 0 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/cuore.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/cuore"}>
                                        <h3 className='txt1'>CUORE</h3>
                                    </Link>
                                </div>
                            </div >
                        </Col>
                    </Row>
                    <Row className='obrasRow7'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 12, offset: 0 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/infinito.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/infinito"}>
                                        <h3 className='txt1'>INFINITO</h3>
                                    </Link>
                                </div>
                            </div >
                        </Col>
                    </Row>
                    <Row className='obrasRow8'>
                        <Col className='obrasColumn1'
                            xs={4}
                            sm={4}
                            md={4}
                            lg={{ span: 12, offset: 0 }}
                        >
                            <div className='container1 wow animate__animated animate__fadeInUp animate__slower'>
                                <img className='img1' src="/assets/images/obras/intensidadEfimera.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/intensidad-efimera"}>
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