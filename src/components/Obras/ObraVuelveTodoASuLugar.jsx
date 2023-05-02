import React, {useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function ObraVuelveTodoASuLugar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraVuelveTodoASuLugarContainer1'>
      <Row className='obraVuelveTodoASuLugarRow1'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={12}>
          <div>
            <h1>vuelve todo a su lugar</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow2'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={12}>
          <hr />
          <div>
            <Link className='obraVuelveTodoASuLugarLink' to={"/obras"}>
              <h6>← atras</h6>
            </Link>
            <div className='obraVuelveTodoASuLugarTxt'>
              <h6>
                VESTUARIO
              </h6>
              <h6>
                2022
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow3'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={12}>
          <div>
            <iframe src="https://www.youtube.com/embed/F6r2QQZqIvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow4'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={{ span: 6, offset: 6 }}>
          <div>
            <p>La búsqueda del vestuario fue diferenciar el día de la noche, llevar la noche hacia el GlamRock con influencias de los años 70s. La paleta de colores se base en colores cálidos que se yuxtaponen con los marrones de la locación. El protagonista, diferenciado con un blanco para tomar la atención del ojo a través del contraste.</p>
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow5'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={{ span: 6, offset: 6 }}>
          <div>
            <img src="/assets/images/obras/vuelve-todo-a-su-lugar/Recurso 38.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow6'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={{span:4, offset:1}}>
          <div>
            <img src="/assets/images/obras/vuelve-todo-a-su-lugar/Recurso 36.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow7'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={{ span: 5, offset: 6 }}>
          <div>
            <img src="/assets/images/obras/vuelve-todo-a-su-lugar/Recurso 37.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row className='obraVuelveTodoASuLugarRow8'>
        <Col className='obraVuelveTodoASuLugarColumn1' xs={12} lg={{span:5}}>
          <div>
            <img src="/assets/images/obras/vuelve-todo-a-su-lugar/Recurso 35.png" alt="" />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraVuelveTodoASuLugar