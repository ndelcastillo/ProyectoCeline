import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraUnoMasUnoTres() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraUnoMasUnoTresContainer1'>
      <Row className='obraUnoMasUnoTresRow1 '>
        <Col className='obraUnoMasUnoTresColumn1' lg={12}>
          <div>
              <h1>1 + 1 = 3</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow2'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12} lg={12}
        >
          <hr />
          <div>
            <Link className='obraUnoMasUnoTresLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraUnoMasUnoTresTxt'>
              <h6>
                OBRA SELECCIONADA PARA LA MUESTRA EN LA GALERÍA VIRTUAL ABRIR
              </h6>
              <h6>
                VIDEO
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow3'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12} lg={12}>
          <div>
            <iframe src="https://player.vimeo.com/video/686398865?h=0e4ce50cb9" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow4'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12}  lg={12}>
          <div>
            <p className='p1'>
              Esta obra habla de esa tercera pieza invisibilizada.
            </p>
            <p className='p2'>
              Habla de la conexión entre 2 partes y lo que estas generan juntas. Esta tercera pieza, es el sentimiento que genera al escucharlo.
            </p>
            <p className='p3'>
              Una voz en off, narra aquellas situaciones cotidianas tal vez en un fluir de conciencia que expresa situaciones de movimiento, la textura del sonido.
              De esta manera, mediante la programación, una figura audio reactiva se forma mediante sus palabras, haciendo un guiño a que las palabras mueven, modifican, generan estados. Como también, aquellas palabras no dichas.
            </p>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow5'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12}  lg={12}>
          <div>
            <h2>GUIÓN DE OBRA</h2>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow6'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12}  lg={12}>
          <div>
            <img src="/assets/images/obras/unomasunotres/recurso5.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow7'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12} lg={12}>
          <div>
            <h2>PROCESO DE PROGRAMACIÓN</h2>
          </div>
        </Col>
      </Row>
      <Row className='obraUnoMasUnoTresRow8'>
        <Col className='obraUnoMasUnoTresColumn1' xs={12} lg={12}>
          <div>
            <img src="/assets/images/obras/unomasunotres/recurso3.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>

  )
}

export default ObraUnoMasUnoTres