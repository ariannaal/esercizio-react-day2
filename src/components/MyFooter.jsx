//Crea un componente MyFooter che renderizzerà un footer per la pagina.

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyFooter = () => (
    <footer>
        <Container className='p-4' >
            <Row >
                <Col lg={6} md={12} className="mb-4 mb-md-0" >
                    <h5 >Starlight Library</h5>
            <p>
             "Starlight Library" is a magical haven where books shimmer with celestial light and ancient knowledge sparkles in the air. It's a tranquil sanctuary for seekers of wisdom, where every book holds a piece of the stars.
            </p>
                </Col>

                 <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5>CONTACT</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-dark">Email</a>
              </li>
              <li>
                <a href="#" className="text-dark">Phone</a>
              </li>
              <li>
                <a href="#" className="text-dark">Address</a>
              </li>
            </ul>
          </Col>
            </Row>
            <div className="text-center p-3" >
        © 2024 Starlight Library. All rights reserved.
      </div>
        </Container>
    </footer>
)

export default MyFooter;