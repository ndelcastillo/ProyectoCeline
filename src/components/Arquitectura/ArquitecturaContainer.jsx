import React, { useState } from 'react'
import Modal from 'react-modal'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import Swal from 'sweetalert'
import myImage from '../../assets/images/arquitectura/popUpBook.png';
import Arquitectura from './Arquitectura'
import Footer from '../Footer/Footer'
import { BiMessageRoundedError } from 'react-icons/bi';



function ArquitecturaContainer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                <Container fluid>
                    <Row className='arquitecturaContainerRow0 d-block d-lg-none'>
                        <Col className='arquitecturaContainerColumn1' xs={12}>
                            <BiMessageRoundedError size={8} color="#373737" onClick={() => setModalIsOpen(true)} />
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                contentLabel="Mi imagen"
                                className="Modal"
                                overlayClassName="Overlay"
                            >
                                <img className='Modal-img' src={myImage} alt="Descripción de la imagen" />
                                <Button className='btn btn-dark btn-sm btnCerrarModal' onClick={() => setModalIsOpen(false)}></Button>
                            </Modal>
                        </Col>
                    </Row>
                    <Row className='arquitecturaContainerRow1'>
                        <Col className='arquitecturaContainerColumn1' xs={12} lg={12} >
                            <Arquitectura className="sliderImg" bookimg={book} />
                        </Col>
                    </Row>
                    <Row className='arquitecturaContainerRow2'>
                        <Col className='arquitecturaContainerColumn1' xs={12} lg={12}>
                            <p>
                                La tesis hace una investigación acerca de la monumentalidad y la ciudad productiva. Se habla sobre los nuevos monumentos; poniendo en fricción el concepto y dandole una re-significación al mismo. Haciendo de los monumentos nuevos nodos en la ciudad, creando una nueva trama urbana, descentralizando el centro y asi romper la periferia. En sus paginas, se trabaja en un ejemplo en particular, el desarrollo de un nuevo monumento en el Puerto de Buenos Aires, asi conectar la ciudad con el rio devolviendo el derecho al agua que se habia perdido a traves de las barreras urbanas impuestas durante los años.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </motion.div>
    )
}

export default ArquitecturaContainer