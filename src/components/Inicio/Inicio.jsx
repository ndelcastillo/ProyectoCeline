import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Inicio() {
    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='inicioContainer1'>
                <Container fluid>
                    <Row className='inicioRow1'>
                        <Col className='inicioColumn1' xs={12} lg={12}>
                            <div>
                                <LazyLoadImage
                                    alt='mi GIF'
                                    src='/assets/images/inicio/celineTitCom2.gif'
                                />
                                {/* <img src="/assets/images/inicio/celineTitCom2.gif" alt="" /> */}
                                <hr />
                            </div>
                        </Col>
                    </Row>
                    <Row className='inicioRow2'>
                        <Col className='inicioColumn1' xs={12} sm={12} md={12} lg={12}>
                            <div></div>
                        </Col>
                    </Row>
                    <Row className='inicioRow3'>
                        <Col className='inicioColumn1' xs={12} sm={12} md={12} lg={12}>
                            <hr />
                            <ul>
                                <Link className='inicioLink' to={"/statement"}>
                                    <li className='homeStatement'>ABOUT</li>
                                </Link>
                                <Link className='inicioLink' to={"/obras"}>
                                    <li className='homeObras'>OBRAS</li>
                                </Link>
                                <Link className='inicioLink' to={"/arquitectura"}>
                                    <li className='homeArquitectura'>ARQUITECTURA</li>
                                </Link>
                                <Link className='inicioLink' to={"/contacto"}>
                                    <li className='homeContacto'>CONTACTO</li>
                                </Link>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
    )
}

export default Inicio