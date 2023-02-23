import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Obras from '../Obras/Obras';
import Statement from '../Statement/Statement';
import Contacto from '../Contacto/Contacto';
import { AnimatePresence } from 'framer-motion'
import ArquitecturaContainer from '../Arquitectura/ArquitecturaContainer';
import Inicio from '../Inicio/Inicio';


function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Inicio />} />
                <Route path='/obras' element={<Obras />} />
                <Route path='/statement' element={<Statement />} />
                <Route path='/arquitectura' element={<ArquitecturaContainer />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes