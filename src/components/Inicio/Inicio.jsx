import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Inicio() {
    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='inicioContainer1'>
                <Row className='inicioRow1'>
                    <Col className='inicioColumn1'
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                    >
                        <div>
                            <h1 >CELINE_</h1>
                            <hr />
                        </div>
                        <div>
                            <hr />
                            <ul>
                                <Link className='inicioLink' to={"/statement"}>
                                    <li className='homeStatement'>STATEMENT</li>
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
                        </div>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default Inicio