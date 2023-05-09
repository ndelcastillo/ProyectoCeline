import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraAlephPandemico() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraAlephPandemicoContainer1'>
      <Row className='obraAlephPandemicoRow1'>
        <Col className='obraAlephPandemicoColumn1' xs={12} lg={12}>
          <div>
            <h1>el aleph pandémico</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraAlephPandemicoRow2'>
        <Col className='obraAlephPandemicoColumn1' xs={12} lg={12}>
          <hr />
          <div>
            <Link className='obraAlephPandemicoLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraAlephPandemicoTxt'>
              <h6>
                CO-AUTORAS: MALOLA CANNAY Y SOL MARTINEZ PEREZ
              </h6>
              <h6>
                TEXTO
              </h6>
              <h6>
                2020
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraAlephPandemicoRow3'>
        <Col className='obraAlephPandemicoColumn1' xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/aleph-pandemico/recurso1.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraAlephPandemico