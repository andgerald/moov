import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className="homeCategories">
                <p>Vista Componente Home</p>
                <Container>
                    <Row>
                        <Col>
                          <div className="categoryBox">
                            <p>Mapa</p>
                          </div>
                        </Col>
                        <Col>
                            <div className="categoryBox">
                                <p>Servicios</p>    
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                          <div className="categoryBox">
                             <p>Favoritos</p>    
                          </div>
                        </Col>
                        <Col>
                          <div className="categoryBox">
                              <p>Transporte</p>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;