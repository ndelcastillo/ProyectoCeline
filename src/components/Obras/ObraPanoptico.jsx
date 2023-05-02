import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraPanoptico() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraPanopticoContainer1'>
      <Row className='obraPanopticoRow1'>
        <Col className='obraPanopticoColumn1' xs={12} lg={12}>
          <div>
            <h1>panóptico</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraPanopticoRow2'>
        <Col className='obraPanopticoColumn1' xs={12} lg={12}>
          <hr />
          <div>
            <Link className='obraPanopticoLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraPanopticoTxt'>
              <h6>
                INSTALACIÓN / PERFORMANCE
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraPanopticoRow3'>
        <Col className='obraPanopticoColumn1' xs={12} lg={6}>
          <div>
            <img src="/assets/images/obras/panoptico/Recurso 28.png" alt="" />
            <p>INSTALACIÓN/FOTOGRAFÍA</p>
          </div>
        </Col>
        <Col className='obraPanopticoColumn2' xs={12} lg={6}>
          <div>
            <p className='p1'>El contexto de la obra es un bosque.</p>
            <p className='p2'>La intención de la instalación tenía ese horror tal vez del objeto plasamdo, (en este caso el observador) generando asi un sentimiento de vigilancia. Poniendo en consciencia la vigilancia de nuestras acciones y como cambian nuestros comportamientos a través de las cámaras, o </p>
            <p className='p3'>celulares.</p>
            <p className='p4'>Por otro lado, las fotografías son montadas en el sitio específico donde se fue fotografiada, asi generar como esa "realidad paralela" donde se pueden ver estas presencias de vigilancia.</p>
          </div>
        </Col>
      </Row>
      <Row className='obraPanopticoRow4'>
        <Col className='obraPanopticoColumn1' xs={12}  lg={6}>
          <div>
            <img src="/assets/images/obras/panoptico/Recurso 26.png" alt="" />
            <div>
              <p className='p1'>"EL OBSERVADOR I"</p>
              <p>FOTOGRAFÍA</p>
              <p>0.70 x 1.00m</p>
            </div>
          </div>
        </Col>
        <Col className='obraPanopticoColumn2' xs={12} lg={6}>
          <div>
            <img src="/assets/images/obras/panoptico/Recurso 25.png" alt="" />
            <div>
              <p className='p1'>"EL OBSERVADOR II"</p>
              <p>FOTOGRAFÍA</p>
              <p>0.70 x 1.00m</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraPanopticoRow5'>
        <Col className='obraPanopticoColumn1'xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/panoptico/Recurso 27.png" alt="" />
            <div>
              <p className='p1'>"EL OBSERVADOR III"</p>
              <p>FOTOGRAFÍA</p>
              <p>0.60 x 1.35m</p>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraPanoptico