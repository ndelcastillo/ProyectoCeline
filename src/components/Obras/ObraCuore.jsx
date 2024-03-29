import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'

function ObraCuore() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraCuoreContainer1'>
      <Row className='obraCuoreRow1'>
        <Col className='obraCuoreColumn1' lg={12}>
          <div>
            <h1>cuore</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraCuoreRow2'>
        <Col className='obraCuoreColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraCuoreLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraCuoreTxt'>
              <h6>
                ACRÍLICO SOBRE BASTIDOR
              </h6>
              <h6>
                TÉCNICA MIXTA
              </h6>
              <h6>
                40 X 40 CM
              </h6>
              <h6>
                2019
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraCuoreRow3'>
        <Col className='obraCuoreColumn1' lg={12}>
          <div>
            <LazyLoadImage
              alt='Recurso 6'
              src="/assets/images/obras/cuore/Recurso 6.jpg"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraCuore