import React from 'react';
import '../assets/css/footer.css';
import {Container, Row, Col} from 'react-bootstrap';
import Favorite from '../assets/img/favorite-icon.png';
import Map from '../assets/img/map-icon.png'
import HomeIcon from '../assets/img/home-icon.png';

class SiteFooter extends React.Component {
    render() {
        return (
            <div className='footerDiv'>
                <footer>
                <Container>
                <Row>
                        <Col>
                          <div onClick={()=>this.props.changeState(1)} className="footerBox">
                            <img alt="home" src={HomeIcon} />
                          </div>
                        </Col>
                        <Col>
                            <div onClick={()=>this.props.changeState(2)} className="footerBox">
                            <img alt="favorite" src={Favorite} /> 
                            </div>
                        </Col>
                        <Col>
                            <div onClick={()=>this.props.changeState(2)} className="footerBox">
                            <img alt="map" src={Map} /> 
                            </div>
                        </Col>
                    </Row>
                </Container>
                </footer>
            </div>
        );
    }
}

export default SiteFooter;