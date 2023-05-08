import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import 'animate.css';
import { motion } from 'framer-motion'

function Obras() {

    const [activeElement, setActiveElement] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    function handleClick(elementId, categoryName) {
        setActiveElement(elementId);
        setActiveCategory(categoryName);
    }

    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <div className='obrasContainer1'>
                <Container fluid>
                    <Row className='obrasRow0 d-none d-lg-block'>
                        <Col className='obrasColumn1' xs={2} sm={12} md={12} lg={{ span: 12, offset: 0 }}>
                            <div className=''>
                                <ul>
                                    <li className={activeElement === "categoria-texto" ? "active categoryTexto" : "inactive categoryTexto"} onClick={() => handleClick("categoria-texto", "texto")}>texto</li>
                                    <li className={activeElement === "categoria-programacion" ? "active categoryProgramacion" : "inactive categoryProgramacion"} onClick={() => handleClick("categoria-programacion", "programación")}>video</li>
                                    <li className={activeElement === "categoria-instalacion" ? "active categoryInstalacion" : "inactive categoryInstalacion"} onClick={() => handleClick("categoria-instalacion", "instalación")}>instalación</li>
                                    <li className={activeElement === "categoria-pintura" ? "active categoryPintura" : "inactive categoryPintura"} onClick={() => handleClick("categoria-pintura", "pintura")}>pintura</li>
                                    <li className={activeElement === "categoria-direccion" ? "active categoryDireccion" : "inactive categoryDireccion"} onClick={() => handleClick("categoria-direccion", "direccion")}>dirección</li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='obrasRow1'>
                        <Col className='obrasColumn1 animate__animated animate__fadeInUp animate__slower' xs={12} sm={{ span: 2, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                            <div id="categoria-texto" className={`container1 ${activeElement === "categoria-texto" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/futuroGuion.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/futuro-guion-para-la-obra-del-futuro"}>
                                        <h3 className='txt1'>FUTURO GUIÓN PARA OBRA DEL FUTURO</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>FUTURO GUIÓN PARA OBRA DEL FUTURO</h3>
                                <p>[TEXTO]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 1 }}>
                            <div id="categoria-programacion" className={`container2 ${activeElement === "categoria-programacion" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/unoMasUnoTres1.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/unomasunotres"}>
                                        <h3 className='txt2'>1 + 1 = 3</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>1 + 1 = 3</h3>
                                <p>[VIDEO]</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow2'>
                        <Col className='obrasColumn1 animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 5, offset: 4 }}>
                            <div id="categoria-instalacion" className={`container1 ${activeElement === "categoria-instalacion" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/infinito.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/infinito"}>
                                        <h3 className='txt1'>INFINITO</h3>
                                    </Link>
                                </div>
                            </div >
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>INFINITO</h3>
                                <p>[INSTALACIÓN]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 3, offset: 0 }}>
                            <div id="categoria-instalacion" className={`container2 ${activeElement === "categoria-instalacion" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/panoptico.png" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/panoptico"}>
                                        <h3 className='txt2 '>PANÓPTICO</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>PANÓPTICO</h3>
                                <p>[INSTALACIÓN]</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow3'>
                        <Col className='obrasColumn1 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 0 }}>
                            <div id="categoria-programacion" className={`container1 ${activeElement === "categoria-programacion" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/idiotique.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/idiotique"}>
                                        <h3 className='txt1'>IDIOTEQUE</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>IDIOTEQUE</h3>
                                <p>[PROGRAMACIÓN]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 5, offset: 3 }}>
                            <div id="categoria-texto" className={`container2 ${activeElement === "categoria-texto" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/elAleph3.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/aleph"}>
                                        <h3 className='txt2'>EL ALEPH PANDÉMICO</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>EL ALEPH PANDÉMICO</h3>
                                <p>[TEXTO]</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow4'>
                        <Col className='obrasColumn1 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 1 }}>
                            <div id="categoria-direccion" className={`container1 ${activeElement === "categoria-direccion" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/tuVeneno.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/tu-veneno"}>
                                        <h3 className='txt1'>TU VENENO</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>TU VENENO</h3>
                                <p>[DIRECCIÓN]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 3 }}>
                            <div id="categoria-direccion" className={`container2 ${activeElement === "categoria-direccion" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/vuelveTodoASuLugar1.gif" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/vuelve-todo-a-su-lugar"}>
                                        <h3 className='txt2'>VUELVE TODO A SU LUGAR</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>VUELVE TODO A SU LUGAR</h3>
                                <p>[DIRECCIÓN]</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow5'>
                        <Col className='obrasColumn1 wow animate__animated animate__fadeInUp animate__slower' xs={12} sm={4} md={4} lg={{ span: 5, offset: 0 }} >
                            <div id="categoria-programacion" className={`container1 ${activeElement === "categoria-programacion" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/visuales1.gif" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/visuales"}>
                                        <h3 className='txt1'>VISUALES</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>VISUALES</h3>
                                <p>[PROGRAMACIÓN]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 3 }}>
                            <div id="categoria-pintura" className={`container2 ${activeElement === "categoria-pintura" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/arteObjeto.png" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/arte-objeto"}>
                                        <h3 className='txt2'>ARTE/OBJETO</h3>
                                    </Link>
                                </div>
                            </div>
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>ARTE/OBJETO</h3>
                                <p>[PINTURA]</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='obrasRow6'>
                        <Col className='obrasColumn1 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 4, offset: 0 }}>
                            <div id="categoria-pintura" className={`container1 ${activeElement === "categoria-pintura" ? "borde-azul" : ""}`}>
                                <img className='img1' src="/assets/images/obras/cuore.png" alt="" />
                                <div className='content1'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/cuore"}>
                                        <h3 className='txt1'>CUORE</h3>
                                    </Link>
                                </div>
                            </div >
                            <div className='boxTitle1 d-block d-lg-none d-flex justify-content-end'>
                                <h3>CUORE</h3>
                                <p>[PINTURA]</p>
                            </div>
                        </Col>
                        <Col className='obrasColumn2 wow animate__animated animate__fadeInUp animate__slower' xs={12} lg={{ span: 5, offset: 2 }}>
                            <div id="categoria-pintura" className={`container2 ${activeElement === "categoria-pintura" ? "borde-azul" : ""}`}>
                                <img className='img2' src="/assets/images/obras/intensidadEfimera.png" alt="" />
                                <div className='content2'>
                                    <Link style={{ textDecoration: "none" }} to={"/obras/intensidad-efim"}>
                                        <h3 className='txt2'>INTENSIDAD EFÍMERA</h3>
                                    </Link>
                                </div>
                            </div >
                            <div className='boxTitle2 d-block d-lg-none d-flex justify-content-end'>
                                <h3>INTENSIDAD EFÍMERA</h3>
                                <p>[PINTURA]</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Footer />
        </motion.div >
    )
}

export default Obras

