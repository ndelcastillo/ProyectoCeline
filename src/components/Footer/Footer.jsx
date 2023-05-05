import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footerContainer1'>
      <Container>
        <Row className='footerRow1'>
          <Col className='footerColumn1' xs={12} lg={12}>
            <h5>©2023 CELINA HUERGO</h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer