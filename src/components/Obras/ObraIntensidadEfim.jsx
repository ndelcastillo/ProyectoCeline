import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraIntesidadEfim() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraIntensidadEfimeraContainer1'>
      <Row className='obraIntensidadEfimeraRow1'>
        <Col className='obraIntensidadEfimeraColumn1' lg={12}>
          <div>
            <h1>intensidad efímera</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraIntensidadEfimeraRow2'>
        <Col className='obraIntensidadEfimeraColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraIntensidadEfimeraLink' to={"/obras"}>
              <h6>← atras</h6>
            </Link>
            <div className='obraIntensidadEfimeraTxt'>
              <h6>
                OBRA SELECCIONADA EN EL CERTAMEN DE PINTURA FRANCISCO CARRETERO EN MADRID, ESPAÑA
              </h6>
              <h6>
                ACRILICO SOBRE BASTIDOR
              </h6>
              <h6>
                70 X 50 CM
              </h6>
              <h6>
                2019
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraIntensidadEfimeraRow3'>
        <Col className='obraIntensidadEfimeraColumn1' xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/intensidad-efimera/QDnQIa.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraIntensidadEfimeraRow4'>
        <Col className='obraIntensidadEfimeraColumn1' xs={12} lg={5}>
          <div>
            <img src="/assets/images/obras/intensidad-efimera/dUbSoK.png" alt="" />
            <div>
              <p className='p1'>zoom in I</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraIntensidadEfimeraRow5'>
        <Col className='obraIntensidadEfimeraColumn1' xs={12} lg={{ span: 7, offset: 5 }}>
          <div>
            <img src="/assets/images/obras/intensidad-efimera/vrAPvH.png" alt="" />
            <div>
              <p className='p1'>zoom in II</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraIntensidadEfimeraRow6'>
        <Col className='obraIntensidadEfimeraColumn1' xs={12} lg={5}>
          <div>
            <img src="/assets/images/obras/intensidad-efimera/yuxt8J.png" alt="" />
            <div>
              <p className='p1'>zoom in III</p>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraIntesidadEfim