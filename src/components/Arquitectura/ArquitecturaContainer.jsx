import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import Arquitectura from './Arquitectura'
import Footer from '../Footer/Footer'


function ArquitecturaContainer() {

    const book = [
        "/assets/images/arquitectura/pag0.png",
        "/assets/images/arquitectura/pag1.png",
        "/assets/images/arquitectura/pag2.png",
        "/assets/images/arquitectura/pag3.png",
        "/assets/images/arquitectura/pag4.png",
        "/assets/images/arquitectura/pag5.png",
        "/assets/images/arquitectura/pag6.png",
        "/assets/images/arquitectura/pag7.png",
        "/assets/images/arquitectura/pag8.png",
        "/assets/images/arquitectura/pag9.png",
        "/assets/images/arquitectura/pag10.png",
        "/assets/images/arquitectura/pag11.png",
        "/assets/images/arquitectura/pag12.png",
        "/assets/images/arquitectura/pag13.png",
        "/assets/images/arquitectura/pag14.png",
        "/assets/images/arquitectura/pag15.png",
        "/assets/images/arquitectura/pag16.png",
        "/assets/images/arquitectura/pag17.png",
        "/assets/images/arquitectura/pag18.png",
        "/assets/images/arquitectura/pag19.png",
        "/assets/images/arquitectura/pag20.png",
        "/assets/images/arquitectura/pag21.png",
        "/assets/images/arquitectura/pag22.png",
        "/assets/images/arquitectura/pag23.png",
        "/assets/images/arquitectura/pag24.png",
        "/assets/images/arquitectura/pag25.png",
        "/assets/images/arquitectura/pag26.png",
        "/assets/images/arquitectura/pag27.png",
        "/assets/images/arquitectura/pag28.png",
        "/assets/images/arquitectura/pag29.png",
        "/assets/images/arquitectura/pag30.png",
        "/assets/images/arquitectura/pag31.png",
        "/assets/images/arquitectura/pag32.png",
    ]

    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <div className='arquitecturaContainer1'>
                <Row className='arquitecturaContainerRow1'>
                    <Col className='arquitecturaContainerColumn1'
                        xs={{ span: 12, offset: 0 }}
                        sm={{ span: 12, offset: 0 }}
                        md={{ span: 12, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}
                    >
                        <Arquitectura className="sliderImg" bookimg={book} />
                    </Col>
                </Row>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default ArquitecturaContainer