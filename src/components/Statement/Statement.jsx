import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Statement() {
    return (
        <motion.div
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <div className='statementContainer1'>
                <Container>
                    <Row className='statementRow1'>
                        <Col className='statementColumn1'
                            xs={{ span: 12, offset: 0 }}
                            sm={{ span: 12, offset: 0 }}
                            md={{ span: 12, offset: 0 }}
                            lg={{ span: 12, offset: 0 }}
                        >
                            <p>
                                La producción en proceso explora las diferentes disciplinas trabajando conceptos e inquietudes que me intrigan a la hora de desarrollarme. Tal
                                vez de una manera autorreferencial, es importante para mi, retratar en mi obra mis ideas y los procesos que estas sugieren. El trabajo busca
                                ser un catalizador de aquellos cuestiones que me obligan a repensar lo cotidiano de una manera diferente. Las dualidades, la muerte, su intimi-
                                dad, el vigilio, el movimiento. De esta manera, la obra sugiere algunos humores, entre textos, fotografías e instalaciones. Por otro lado, la programación para materializar ideas es importante en el proceso de la obra. Como un gesto tecnológico puede conversar con un texto, lo frío y
                                lo sensible. Estas ficciones que creo en la obra, tratan de representar la realidad de mundo que veo y creo conocer, de historias de amigxs, sus
                                intimidades, o voces en mi cabeza que pueden tener figuras familiares. La fragilidad de las partes, la sensiblidad de los seres, la abstracción
                                de los mismos. Entenderme frágil me hace ser mas dosil, y más maleable para comprender estas situaciones. De esta manera busca la obra
                                ser un reflejo de mis momentos, mis historias.
                            </p>
                        </Col>
                    </Row>
                    <Row className='statementRow2'>
                        <Col className='statementColumn1'
                            xs={{ span: 12, offset: 0 }}
                            sm={{ span: 12, offset: 0 }}
                            md={{ span: 12, offset: 0 }}
                            lg={{ span: 12, offset: 0 }}
                        >
                            <Link style={{ textDecoration: 'none' }} to={'/'}>
                                <p>
                                    ver más
                                </p>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default Statement