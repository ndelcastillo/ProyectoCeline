import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'

function Contacto() {

    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <div className='contactoContainer1'>
                <Container>
                    <Row className='contactoRow1'>
                        <Col className='contactoColumn1'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                        <Col className='contactoColumn2'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <p>
                                celihuergo@gmail.com
                            </p>
                        </Col>
                        <Col className='contactoColumn3'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                        <Col className='contactoColumn4'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                    </Row>
                    <Row className='contactoRow2'>
                        <Col className='contactoColumn1'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                        <Col className='contactoColumn2'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <></>
                        </Col>
                        <Col className='contactoColumn3'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
                            <a href="https://www.instagram.com/celine.__________________/" target="_blank">
                                <p>@celine.________________</p>
                            </a>
                        </Col>
                        <Col className='contactoColumn4'
                            xs={{ span: 3, offset: 0 }}
                            sm={{ span: 3, offset: 0 }}
                            md={{ span: 3, offset: 0 }}
                            lg={{ span: 3, offset: 0 }}
                        >
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