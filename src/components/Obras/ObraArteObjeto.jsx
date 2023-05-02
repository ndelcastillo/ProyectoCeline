import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraArteObjeto() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraArteObjetoContainer1'>
      <Row className='obraArteObjetoRow1'>
        <Col className='obraArteObjetoColumn1' lg={12}>
          <div>
            <h1>arte/objeto</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraArteObjetoRow2'>
        <Col className='obraArteObjetoColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraArteObjetoLink' to={"/obras"}>
              <h6>← atras</h6>
            </Link>
            <div className='obraArteObjetoTxt'>
              <h6>
                ESCULTURAS
              </h6>
              <h6>
                2021
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraArteObjetoRow3'>
        <Col className='obraArteObjetoColumn1' xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/arte-objeto/Recurso 5.png" alt="" />
            <div>
              <p className='p1'>#1</p>
              <p>acrílico sobre film transparente</p>
              <p>9 x 4 cm</p>
              <p>2021</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraArteObjetoRow4'>
        <Col className='obraArteObjetoColumn1' xs={12} lg={6}>
          <div>
            <img src="/assets/images/obras/arte-objeto/Recurso 3.png" alt="" />
            <div>
              <p className='p1'>#2</p>
              <p>acrílico sobre film transparente</p>
              <p>9 x 4 cm</p>
              <p>2021</p>
            </div>
          </div>
        </Col>
        <Col className='obraArteObjetoColumn2' xs={12} lg={6}>
          <div>
            <p className='p1'>La pintura el soporte mismo.</p>
            <p className='p2'>(contenido como contenedor)</p>
            <p className='p3'>Investigación de la mancha como objeto auotoparte.</p>
          </div>
        </Col>
      </Row>
      <Row className='obraArteObjetoRow5'>
        <Col className='obraArteObjetoColumn1'  xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/arte-objeto/Recurso 4.png" alt="" />
            <div>
              <p className='p1'>#3</p>
              <p>acrílico sobre aluminio</p>
              <p>7 x 5 cm</p>
              <p>2021</p>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraArteObjeto