import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../pages/home.css';
import SiteFooter from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div className="homeCategories">
                <Container>
                    <Row>
                        <Col>
                          <div onClick={()=>this.props.changeState(1)} className="categoryBox">
                            <p>Mapa</p>
                          </div>
                        </Col>
                        <Col>
                            <div onClick={()=>this.props.changeState(2)} className="categoryBox">
                                <p>Servicios</p>    
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                          <div onClick={()=>this.props.changeState(3)} className="categoryBox">
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
                <SiteFooter />
            </div>
        );
    }
}

export default Home;