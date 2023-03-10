import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraFuturoGuionParaLaObraDelFuturo() {
  return (
    <div className='obraFuturoGuionParaLaObraDelFuturoContainer1'>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow1 '>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div>
            <Link className='obraFuturoGuionParaLaObraDelFuturoLink' to={"/"}>
              <h1 className='obraFuturoGuionParaLaObraDelFuturoTitulo'>futuro guion para la obra del futuro</h1>
            </Link>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow2'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <hr />
          <div>
            <Link className='obraFuturoGuionParaLaObraDelFuturoLink' to={"/obras"}>
              <h6>← atras</h6>
            </Link>
            <div className='obraFuturoGuionParaLaObraDelFuturoTxt'>
              <h6>
                INSTALACION
              </h6>
              <h6>
                GUION + AUDIO
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow3'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div>
            <p className='p1'>La obra esta mintiendo. Finge ser una obra en proceso ya terminada.</p>
            <p className='p2'>De esta manera, se crean las miles de posibilidades que esta habla. La búsqueda de la instalacion es mediante la escenografia, </p>
            <p className='p3'> partes del guion, y estas piezas dialoguen.</p>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow4'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <div>
            <img src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso11.png" alt="" />
          </div>
        </Col>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn2'
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <div>
            <audio src="/assets/audio/obras/futuro-guion-para-una-obra-del-futuro/audio1.wav" controls></audio>
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow5'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div>
            <img src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso8.png" alt="" />
            <img src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso10.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow6'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div>
            <img src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso8.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraFuturoGuionParaLaObraDelFuturoRow7'>
        <Col className='obraFuturoGuionParaLaObraDelFuturoColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div>
            <img src="/assets/images/obras/futuro-guion-para-una-obra-del-futuro/recurso7.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraFuturoGuionParaLaObraDelFuturo