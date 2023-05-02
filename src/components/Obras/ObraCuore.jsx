import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
            <img src="/assets/images/obras/cuore/Recurso 6.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraCuore