import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EstudioStatement() {
    return (
        <div className='statementEstudioContainer1'>
            <Container fluid>
                <Row className='statementEstudioRow1'>
                    <Col className='statementEstudioCol1' xs={12} lg={3} >
                        <div>
                            <p className='pTit'> ESTUDIOS</p>
                            <br />
                            <p>Universitarios:</p>
                            <p>2016 - 2022: Arquitectura - Universidad Buenos Aires</p>
                            <br />
                            <p>Talleres:</p>
                            {/* <p>2023: Taller Compartido - Galería CRUDO</p> */}
                            <p>2020: Taller de Kit de Supervivencia para Artistas - Diana Aisenberg</p>
                            <p>2020: Seminario en Profundizacion en el Arte - UNA</p>
                            <p>2016-2017: Taller - Patricia Vaneiro</p>
                            <br />
                            <p>Clínicas:</p>
                            <p>2023: Proyecto PAC - Galería Gachi Prieto</p>
                            <p>2023: Proyecto PÚRPURA - Galería Púrpura</p>
                            <p>2021 - 2022: Taller Cabos Sueltos - Valeria Rovatti</p>
                            <br />
                            <p>Cursos:</p>
                            <p>2021: Programación Touchdesigner - Panikkk</p>
                            <p>2020: Collage Digital - Domestika</p>
                            <p>2019: Fotografía - Universidad de Buenos Aires</p>

                        </div >
                        <br /><br />
                    </Col>
                    <Col className='statementEstudioCol2' xs={12} lg={3} >
                        <div>
                            <p className='pTit'>EXPOSICIONES</p>
                            <br />
                            <p>Galerías</p>
                            <p>2023: AMULETO Galería - Exposición Colectiva</p>
                            <p>2022: Galerías ABRIR - Cabos Sueltos</p>
                            <br />
                            <p>Centros Culturales:</p>
                            <p>2021: Vedia, Nuñez - exposición</p>
                            <p>2019: Pilará Evento Solidario - pintura en vivo</p>
                            <p>2018: Ciudad Cultural Konex - pintura en vivo</p>
                            <p>2018: Hipodromo de Palermo - exposición</p>
                            <br />
                        </div>
                        <br /><br />
                    </Col>
                    <Col className='statementEstudioCol3' xs={12} sm={12} md={12} lg={3} >
                        <div>
                            <p className='pTit'>PUBLICACIONES</p>
                            <br />
                            <p>2022: Relieve Contemporáneo:</p>
                            <p><a href="http://relievecontemporaneo.com/cabos-sueltos-en-abrir">http://relievecontemporaneo.com/cabos-sueltos-en-abrir</a></p>
                            <br />
                            <p>2022: Terremoto Magazine:</p>
                            <p><a href="https://terremoto.mx/online/cabos-sueltos-exhibicion-colectiva-en-abrir-galeria-peru/">https://terremoto.mx/online/cabos-sueltos-exhibicion-colectiva-en-abrir-galeria-peru/</a></p>
                        </div>
                    </Col>
                </Row >
            </Container>
        </div>
    )
}

export default EstudioStatement