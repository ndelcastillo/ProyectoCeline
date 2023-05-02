import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
              <h6>← atras</h6>
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
            <iframe src="https://www.youtube-nocookie.com/embed/3ZFEgWQNXRU?controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow5'>
        <Col className='obraTuVenenoColumn1' lg={{ span: 6, offset: 6 }}>
          <div>
            <img src="/assets/images/obras/tu-veneno/Recurso 30.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow6'>
        <Col className='obraTuVenenoColumn1' lg={6}>
          <div>
            <img src="/assets/images/obras/tu-veneno/Recurso 31.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow7'>
        <Col className='obraTuVenenoColumn1' lg={{ span: 7, offset: 5 }}>
          <div>
            <img src="/assets/images/obras/tu-veneno/Recurso 29.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraTuVenenoRow8'>
        <Col className='obraTuVenenoColumn1' lg={{span:6, offset:2}}>
          <div>
          <img src="/assets/images/obras/tu-veneno/Recurso 32.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraTuVeneno