import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'

function ObraIdiotique() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='obraIdiotiqueContainer1'>
      <Row className='obraIdiotiqueRow1'>
        <Col className='obraIdiotiqueColumn1' lg={12}>
          <div>
            <h1>idioteque</h1>
          </div>
        </Col>
      </Row>
      <Row className='obraIdiotiqueRow2'>
        <Col className='obraIdiotiqueColumn1' lg={12}>
          <hr />
          <div>
            <Link className='obraIdiotiqueLink' to={"/obras"}>
              <h6>← atrás</h6>
            </Link>
            <div className='obraIdiotiqueTxt'>
              <h6>
                REEL EN INSTAGRAM
              </h6>
              <h6>
                PROGRAMACIÓN
              </h6>
              <h6>
                2021
              </h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='obraIdiotiqueRow3'>
        <Col className='obraIdiotiqueColumn1' xs={12} lg={6}>
          <div>
            <video src="/assets/videos/obras/idiotique/reelIg.mp4" controls></video>
          </div>
        </Col>
      </Row>
      <Row className='obraIdiotiqueRow4'>
        <Col className='obraIdiotiqueColumn1' xs={12} lg={6}>
          <div>
            <p>¿Qué es el movimiento?
            </p>
            <p>¿Qué pasa cuando me muevo?
            </p>
            <p>¿Qué pasa cuando freno?
            </p>
            <p>¿Quedarse paralizado es una manera de moverse?
            </p>
            <p>¿Qué defino como movimiento?
            </p>
            <p>¿El movimiento es constante?
            </p>
            <p>¿Los sentimientos tienen movimiento?
            </p>
            <p>¿Qué pasa cuando hay demasiado movimiento?
            </p>
            <p>¿Cuando llega el colapso del movimiento?
            </p>
            <p>¿Cómo puedo registrar el movimiento invisible?
            </p>
            <p>¿Qué quiero decir con esto?
            </p>
            <p>¿Cómo me interpela el movimiento?
            </p>
            <p>¿Cómo me doy cuenta que me estoy moviendo?
            </p>
            <p>¿Soy consciente de mis movimientos todo el tiempo?
            </p>
            <p>¿Qué cosas me hacen moverme?
            </p>
            <p>¿Qué palabras expresan movimiento?
            </p>
            <p>¿Qué sensaciones me mueven?
            </p>
            <p>¿Qué me mueve?
            </p>
            <p>¿Por qué me mueve?
            </p>
            <p>¿Por qué hablo del movimiento?
            </p>
            <p>¿Por qué me intriga tanto?
            </p>
            <p>¿Será que le tengo miedo al paralisis?
            </p>
            <p>¿A veces frenar es la mejor manera de moverse?
            </p>
            <p>¿A que llega el movimiento? ¿Tiene un fin?
            </p>
            <p>¿cuando me muevo qué sensaciones tengo?
            </p>
            <p>¿que trato de expresar en mis movimientos?
            </p>
            <p>¿Cómo me muevo?
            </p>
            <p>¿Qué movimientos me llaman la atención?
            </p>
            <p>¿El placer mueve? ¿motiva?
            </p>
            <p>¿Pensar y después moverse?
            </p>
            <p>¿Moverse y después pensar?
            </p>
            <p>¿Me muevo pensando?
            </p>
            <p>¿Qué narración le quiero dar al video?
            </p>
            <p>¿Qué hilo conductor va a unir todos los pensamientos?
            </p>
            <p>¿Cómo quiero expresarlo y mostrarlo?
            </p>
            <p>¿Qué citas puedo leer?¿tiene que estar justificado?
            </p>
            <p>¿Qué disciplinas puedo alcanzar?
            </p>
            <p>¿Cómo se interpreta el movimiento en los diferentes ámbitos?
            </p>
            <p>¿Qué cosas expresan movimiento?
            </p>
            <p>¿Si te digo mover que es lo primero que te imaginas?
            </p>
            <p>¿Mueve la exigencia?
            </p>
            <p>¿Cuánto más te moves mas productivo?
            </p>
            <p>¿Qué intensidad tiene el movimiento?
            </p>
            <p>¿Moverse mucho genera cansancio?
            </p>
            <p>¿Qué pasa cuando algo te conmueve?
            </p>
            <p>¿Cómo puedo expresar movimiento en el texto?
            </p>
            <p>¿Cómo puedo hacer sentir movimiento a través de palabras?
            </p>
            <p>¿Mueve la curiosidad?
            </p>
            <p>¿Mueve el dolor?
            </p>
            <p>¿El movimiento tiene ritmo?
            </p>
            <p>¿El movimiento tiene dimensiones?
            </p>
            <p>¿El movimiento es visible?¿invisible?
            </p>
            <p>¿El movimiento es tangible?¿intangible?
            </p>
            <p>¿Cuántas veces me muevo en el día?
            </p>
            <p>¿Movimientos que se mueven adelante y movimientos que se mueven para atrás?
            </p>
            <p>¿Todos los movimientos tienen causa y consecuencia?
            </p>
            <p>¿Qué sentido tiene moverse?
            </p>
            <p>¿Qué sentido tiene todo esto?
            </p>
            <p>¿Todos los movimientos son absurdos?
            </p>
            <p>¿Qué diferencia un movimiento absurdo a un movimiento con sentido?
            </p>
            <p>¿Qué viene después de un movimiento?
            </p>
            <p>¿Movimientos fuertes?
            </p>
            <p>¿Movimientos débiles?
            </p>
            <p>¿Cómo se mide un movimiento?
            </p>
            <p>¿Existe la subjetividad en los movimientos?
            </p>
            <p>¿Qué movimientos están bien y cuáles están mal?
            </p>
            <p>¿Todo movimiento es relevante?
            </p>
            <p>¿Qué cosas hacen que me mueva por inercia?
            </p>
            <p>¿El miedo mueve?
            </p>
            <p>¿El dinero mueve?
            </p>
            <p>¿La música mueve?
            </p>
            <p>¿El movimiento lleva al caos?
            </p>
            <p>¿El caos es exceso de movimiento?
            </p>
            <p>¿El caos es parálisis?
            </p>
            <p>¿Hay que controlar los movimientos?
            </p>
            <p>¿Qué pasa cuando pierdes el control?
            </p>
            <p>¿Qué pasa con el movimiento incontrolable?
            </p>
            <p>¿Cuándo hay que dejar que el movimiento sea fluido?
            </p>
            <p>¿Qué pasa con el movimiento fluido?
            </p>
            <p>¿Las palabras se mueven?
            </p>
            <p>¿Qué textura tiene el movimiento?
            </p>
            <p>¿Movimiento analógico o virtual?
            </p>
            <p>¿El movimiento virtual es invisible? ¿hasta qué punto?
            </p>
            <p>¿El movimiento analógico es visible?
            </p>
            <p>¿Crecer es moverse?
            </p>
            <p>¿Qué objetivo tiene moverse?
            </p>
            <p>¿Soñar es un movimiento?
            </p>
            <p>¿La muerte es la conculsión del movimiento?
            </p>
            <p>¿La vida como la razón del mismo?
            </p>
            <p>¿La quietud es un estado de paz?
            </p>
            <p>¿La turbulencia un estado de miedo?
            </p>
            <p>¿Cuál es el interés del movimiento?
            </p>
            <p>Al estar en completamente en movimeinto, ¿No se convierten en efímeros todos los momentos?
            </p>
            <p>¿El movimiento se mide en el tiempo?
            </p>
            <p>¿Cómo disfrutas en constante movimiento?
            </p>
            <p>¿El movimiento es cambio?
            </p>
            <p>¿A donde me trasnporto cuando me pierdo en el movimiento?
            </p>
            <p>¿Me voy a cansar de hacer preguntas?
            </p>
            <br />
            <p className='p1'>Fin.</p>
          </div>
        </Col>
        <Col className='obraIdiotiqueColumn2' xs={12} lg={6}>
          <div className='boxImg1'>
            <div>
              <LazyLoadImage
                alt='Recurso 16'
                src="/assets/images/obras/idiotique/Recurso 16.png"
                className='img1'
              />
            </div>
            <div>
              <LazyLoadImage
                alt='Recurso 15'
                src="/assets/images/obras/idiotique/Recurso 15.png"
                className='img2'
              />
              <LazyLoadImage
                alt='Recurso 14'
                src="/assets/images/obras/idiotique/Recurso 14.png"
                className='img3'
              />
            </div>
            <div>
              <LazyLoadImage
                alt='Recurso 13'
                src="/assets/images/obras/idiotique/Recurso 13.png"
                className='img4'
              />
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default ObraIdiotique