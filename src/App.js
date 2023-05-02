import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0
//   });
//  const [cursorVariant, setCursorVariant] = useState ("default")

//   useEffect(() => {
//     const mouseMove = e => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       })
//     }

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     }
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//       backgroundColor: "yellow"
//     }
//   }


  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes />
        {/* <motion.div
          className='cursor'
          variant={variants}
          animate="default"
        /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
