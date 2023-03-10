import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Obras from '../Obras/Obras';
import Statement from '../Statement/Statement';
import Contacto from '../Contacto/Contacto';
import { AnimatePresence } from 'framer-motion'
import ArquitecturaContainer from '../Arquitectura/ArquitecturaContainer';
import Inicio from '../Inicio/Inicio';
import ObraFuturoGuionParaLaObraDelFuturo from '../Obras/ObraFuturoGuionParaLaObraDelFuturo';
import ObraUnoMasUnoTres from '../Obras/ObraUnoMasUnoTres';
import ObraArteObjeto from '../Obras/ObraArteObjeto';
import ObraPanoptico from '../Obras/ObraPanoptico';
import ObraVuelveTodoASuLugar from '../Obras/ObraVuelveTodoASuLugar';
import ObraAlephPandemico from '../Obras/ObraAlephPandemico';
import ObraTuVeneno from '../Obras/ObraTuVeneno';
import ObraIdiotique from '../Obras/ObraIdiotique';
import ObraVisuales from '../Obras/ObraVisuales';
import ObraCuore from '../Obras/ObraCuore';
import ObraInfinito from '../Obras/ObraInfinito';
import ObraIntensidadEfimera from '../Obras/ObraIntensidadEfimera';


function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Inicio />} />
                <Route path='/obras' element={<Obras />} />
                <Route path='/obras/futuro-guion-para-la-obra-del-futuro' element={<ObraFuturoGuionParaLaObraDelFuturo />} />
                <Route path='/obras/intensidad-efimera' element={<ObraIntensidadEfimera />} />
                <Route path='/obras/unomasunotres' element={<ObraUnoMasUnoTres />} />
                <Route path='/obras/arte-objeto' element={<ObraArteObjeto />} />
                <Route path='/obras/panoptico' element={<ObraPanoptico />} />
                <Route path='/obras/vuelve-todo-a-su-lugar' element={<ObraVuelveTodoASuLugar />} />
                <Route path='/obras/aleph-pandemico' element={<ObraAlephPandemico />} />
                <Route path='/obras/tu-veneno' element={<ObraTuVeneno />} />
                <Route path='/obras/idiotique' element={<ObraIdiotique />} />
                <Route path='/obras/visuales' element={<ObraVisuales />} />
                <Route path='/obras/cuore' element={<ObraCuore />} />
                <Route path='/obras/infinito' element={<ObraInfinito />} />
                <Route path='/obras/intensidad-efimera' element={<ObraIntensidadEfimera />} />

                <Route path='/statement' element={<Statement />} />
                <Route path='/arquitectura' element={<ArquitecturaContainer />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes