import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'

function ObraTuVeneno() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraTuVenenoContainer1'>
      <Row className='obraTuVenenoRow1'>
        <Col className='obraTuVenenoColumn1' xs={12} lg={12}>
          <div>
            <h1>tu veneno</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow2'>
        <Col className='obraTuVenenoColumn1' xs={12} lg={12}>
          <hr />
          <div>
            <Link className='obraTuVenenoLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraTuVenenoTxt'>
              <h6>
                VESTUARIO
              </h6>
              <h6>
                2023
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow3'>
        <Col className='obraTuVenenoColumn1' xs={12} lg={12}>
          <div>
            <iframe src="https://www.youtube.com/embed/3ZFEgWQNXRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow5'>
        <Col className='obraTuVenenoColumn1' lg={{ span: 6, offset: 6 }}>
          <div>
            <LazyLoadImage
              alt='Recurso 30'
              src="/assets/images/obras/tu-veneno/Recurso 30.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow6'>
        <Col className='obraTuVenenoColumn1' lg={6}>
          <div>
            <LazyLoadImage
              alt='Recurso 31'
              src="/assets/images/obras/tu-veneno/Recurso 31.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow7'>
        <Col className='obraTuVenenoColumn1' lg={{ span: 7, offset: 5 }}>
          <div>
            <LazyLoadImage
              alt='Recurso 29'
              src="/assets/images/obras/tu-veneno/Recurso 29.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow8'>
        <Col className='obraTuVenenoColumn1' lg={{ span: 6, offset: 2 }}>
          <div>
            <LazyLoadImage
              alt='Recurso 32'
              src="/assets/images/obras/tu-veneno/Recurso 32.png"
              className='img'
            />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraTuVeneno