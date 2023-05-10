import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'

function ObraFuturoGuionParaLaObraDelFuturo() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraFuturoGuionParaLaObraDelFuturoContainer1'>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow1'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' lg={12}>
          <div>
            <h1>futuro guión para la obra del futuro</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow2'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraFuturoGuionParaLaObraDelFuturoLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraFuturoGuionParaLaObraDelFuturoTxt'>
              <h6>
                INSTALACIÓN
              </h6>
              <h6>
                GUIÓN + AUDIO
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow3'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' xs={12} lg={12}>
          <div>
            <p className='p1'>La obra esta mintiendo. Finge ser una obra en proceso ya terminada.</p>
            <p className='p2'>De esta manera, se crean las miles de posibilidades que esta habla. La búsqueda de la instalacion es mediante la escenografia, </p>
            <p className='p3'> partes del guion, y estas piezas dialoguen.</p>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow4'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' xs={12} lg={6}>
          <div>
            <LazyLoadImage
              alt='Recurso 11'
              src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso11.jpg"
              className='img'
            />
          </div>
        </Col>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn2' xs={12} lg={6}>
          <div>
            <audio src="/assets/audio/obras/futuro-guion-para-una-obra-del-futuro/audio1.wav" controls></audio>
            <p></p>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow5'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' xs={12} lg={12}>
          <div>
            <LazyLoadImage
              alt='Recurso 8'
              src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso8.jpg"
              className='img'
            />
            <LazyLoadImage
              alt='Recurso 10'
              src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso10.jpg"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow6'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' xs={12} lg={12}>
          <div>
            <LazyLoadImage
              alt='Recurso 12'
              src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso12.jpg"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow7'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1' xs={12} lg={12}>
          <div>
            <LazyLoadImage
              alt='Recurso 7'
              src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso7.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraFuturoGuionParaLaObraDelFuturo