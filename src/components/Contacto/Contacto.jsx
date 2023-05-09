import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'
import { Link, useLocation } from 'react-router-dom'

function Contacto() {

    const location = useLocation();

    function isActive(path) {
        return location.pathname === path ? "activeTit" : "";
    }

    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='navBarContainer1'>
                <Container fluid>
                    <Row className='navBarRow1'>
                        <Col className='navBarColumn1' xs={12} sm={12} md={12} lg={12}>
                            <ul>
                                <Link className="navBarLink0" to={"/"}>
                                    <li className={`navBarInicio ${isActive("/")}`}>INICIO</li>
                                </Link>
                                <Link className="navBarLink1" to={"/statement"}>
                                    <li className={`navBarStatement ${isActive("/statement")}`}>ABOUT</li>
                                </Link>
                                <Link className="navBarLink2" to={"/obras"}>
                                    <li className={`navBarObras ${isActive("/obras")}`}>OBRAS</li>
                                </Link>
                                <Link className="navBarLink3" to={"/arquitectura"}>
                                    <li className={`navBarArquitectura ${isActive("/arquitectura")}`}>ARQUITECTURA</li>
                                </Link>
                                <Link className="navBarLink4" to={"/contacto"}>
                                    <li className={`navBarContactoEnContacto ${isActive("/contacto")}`}>CONTACTO</li>
                                </Link>
                            </ul>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='contactoContainer1'>
                <Container>
                    <Row className='contactoRow1'>
                        <Col className='contactoColumn1'>
                            <></>
                        </Col>
                        <Col className='contactoColumn2'>
                            <a href="mailto:celihuergo@gmail.com">
                                <p>celihuergo@gmail.com</p>
                            </a>
                        </Col>
                        <Col className='contactoColumn3'>
                            <></>
                        </Col>
                        <Col className='contactoColumn4'>
                            <></>
                        </Col>
                    </Row>
                    <Row className='contactoRow2'>
                        <Col className='contactoColumn1'>
                            <></>
                        </Col>
                        <Col className='contactoColumn2'>
                            <></>
                        </Col>
                        <Col className='contactoColumn3'>
                            <a href="https://www.instagram.com/celine.__________________/" target="_blank" rel="noreferrer" >
                                <p>@celine.________________</p>
                            </a>
                        </Col>
                        <Col className='contactoColumn4'>
                            <></>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Contacto