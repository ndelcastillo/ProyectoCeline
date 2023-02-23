import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <div className='navBarContainer1'>
      <Row className='navBarRow1'>
        <Col className='navBarColumn1'
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <hr />
          <ul>
            <Link className='navBarLink' to={"/"}>
              <li className='navBarInicio'>INICIO</li>
            </Link>
            <Link className='navBarLink' to={"/statement"}>
              <li className='navBarStatement'>STATEMENT</li>
            </Link>
            <Link className='navBarLink' to={"/obras"}>
              <li className='navBarObras'>OBRAS</li>
            </Link>
            <Link className='navBarLink' to={"/arquitectura"}>
              <li className='navBarArquitectura'>ARQUITECTURA</li>
            </Link>
            <Link className='navBarLink' to={"/contacto"}>
              <li className='navBarContacto'>CONTACTO</li>
            </Link>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default NavBar