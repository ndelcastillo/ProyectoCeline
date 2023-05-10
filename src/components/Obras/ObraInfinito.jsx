import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'

function ObraInfinito() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='obraInfintioContainer1'>
      <Row className='obraInfinitoRow1'>
        <Col className='obraInfinitoColumn1' lg={12}>
          <div>
            <h1>infinito</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraInfinitoRow2'>
        <Col className='obraInfinitoColumn1' xs={12} lg={12}>
          <hr />
          <div>
            <Link className='obraInfinitoLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraInfinitoTxt'>
              <h6>
                ESCULTURA
              </h6>
              <h6>
                TUERCAS Y ALAMBRES
              </h6>
              <h6>
                15 X 15 CM
              </h6>
              <h6>
                2017
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraInfinitoRow3'>
        <Col className='obraInfinitoColumn1' xs={12} lg={12}>
          <div>
            <LazyLoadImage
              alt='Recurso 20'
              src="/assets/images/obras/infinito/Recurso 20.jpg"
              className='img'
            />
            <div>
              <p className='p1'>La porosidad, el infinito, la repetición, lo metálico.</p>
              <p>El infinito vuelo de una mosca.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraInfinitoRow4'>
        <Col className='obraInfinitoColumn1' xs={12} lg={6}>
          <div>
            <LazyLoadImage
              alt='Recurso 18'
              src="/assets/images/obras/infinito/Recurso 18.png"
              className='img'
            />
          </div>
        </Col>
        <Col className='obraInfinitoColumn2' xs={12} lg={6}>
          <div>
            <i className='p1'>" Claro que vuela, así. Pero en realidad esa mosca sigue volando como</i>
            <i className='p2'>cualquier mosca, sólo que le tocó ser la excepción. Lo que ha dado media</i>
            <i className='p3'>vuelta es todo el resto "</i>
            <p className='p4'>Cortazar</p>
          </div>
        </Col>
      </Row>
      <Row className='obraInfinitoRow5'>
        <Col className='obraInfinitoColumn1' xs={12} lg={{ span: 6, offset: 6 }}>
          <div>
            <LazyLoadImage
              alt='Recurso 17'
              src="/assets/images/obras/infinito/Recurso 17.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraInfinitoRow6'>
        <Col className='obraInfinitoColumn1' xs={12} lg={6}>
          <div>
            <LazyLoadImage
              alt='Recurso 19'
              src="/assets/images/obras/infinito/Recurso 19.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraInfinito