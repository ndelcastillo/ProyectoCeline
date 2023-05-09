import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {

  const location = useLocation();

  function isActive(path) {
    return location.pathname === path ? "activeTit" : "";
  }


  return (
    <div className='navBarContainer1'>
      <Container fluid>
        <Row className='navBarRow1'>
          <Col className='navBarColumn1' xs={12} lg={12}>
            <ul>
              <Link className="navBarLink0" to={"/"}>
                <li className={`navBarInicio ${isActive("/")}`}>INICIO</li>
              </Link>
              <Link className="navBarLink1" to={"/statement"}>
                <li className={`navBarStatement ${isActive("/statement")}`}>ABOUT</li>
              </Link>
              <Link className="navBarLink2" to={"/obras"}>
                <li className={`navBarObras ${isActive("/obras")}`}>OBRAS</li>
              </Link>
              <Link className="navBarLink3" to={"/arquitectura"}>
                <li className={`navBarArquitectura ${isActive("/arquitectura")}`}>ARQUITECTURA</li>
              </Link>
              <Link className="navBarLink4" to={"/contacto"}>
                <li className={`navBarContacto ${isActive("/contacto")}`}>CONTACTO</li>
              </Link>
            </ul>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar