import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraVisuales() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraVisualesContainer1'>
      <Row className='obraVisualesRow1'>
        <Col className='obraVisualesColumn1' lg={12}>
          <div>
            <h1>visuales</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraVisualesRow2'>
        <Col className='obraVisualesColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraVisualesLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraVisualesTxt'>
              <h6>
                VJ
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraVisualesRow3'>
        <Col className='obraVisualesColumn1' lg={12}>
          <div>
            <iframe src="https://player.vimeo.com/video/799469599?h=3387c226f3" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className='obraVisualesRow4'>
        <Col className='obraVisualesColumn1' lg={{ span: 6, offset: 6 }}>
          <div>
            <p>La intimidad de la banda se ve reflejada en estos videos caseros filmados con una HandyCam donde se ve el trabajo detrás de su música. También los ludico en sus formas de crear. Intervenidos con saturaciones, distorsiones y opacidades, empieza a ser una herramienta para iluminar los espacios en sus shows y crear sensaciones a través de ella y su música.</p><br />
            <p className='p1'>Estas visuales fueron pasadas en Ciudad Cultural Konex // Mayo 2022 </p>
            <p className='p1'>El Emergente // Agosto 2022</p>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraVisuales