import React, { useState } from 'react'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Arquitectura({ bookimg }) {

  // Variables y Estados
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = bookimg?.length;

  // Return prematuro
  if (!Array.isArray(bookimg) || cantidad === 0)
    return;

  // Siguiente y Anteriro imagen
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  }
  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  }

  return (
    <div className='arquitetcuraSliderColumn1'
    >
      <p className='iconLeft d-none d-lg-block' icon={faArrowLeft} onClick={anteriorImagen} >←</p>
      {bookimg.map((imagen, index) => {
        return (
          <div className={imagenActual === index ? `${"arquitecturaSliderImg"} ${"arquitecturaSliderImgActive"}` : "arquitecturaSliderImg"}>
            {imagenActual === index && (
              <LazyLoadImage
                alt='Imagen Libro'
                src={imagen}
                key={index}
              />
            )}
          </div>
        )
      })}
      <div className='iconsSliders d-flex'>
        <p className='iconLeft d-block d-lg-none' icon={faArrowLeft} onClick={anteriorImagen} >←</p>
        <p className='iconRight' icon={faArrowRight} onClick={siguienteImagen} >→</p>
      </div>
    </div>
  )
}

export default Arquitectura
